/**
 * pnpm art:upload
 *
 * Reads images from ./images-source/{category}/, compresses them with sharp
 * to a 2400px-wide WebP (+ JPEG fallback), uploads to Vercel Blob, and prints
 * ready-to-paste artworks.ts metadata snippets.
 *
 * Setup:
 *   1. Create a Vercel Blob store in your Vercel dashboard
 *   2. Copy the BLOB_READ_WRITE_TOKEN into .env
 *   3. Drop originals into ./images-source/oil-paintings/ or ./images-source/other-arts/
 *   4. Run: pnpm art:upload
 */

import { readdir, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"
import sharp from "sharp"
import { put } from "@vercel/blob"

// Load env vars from .env
const envPath = path.resolve(process.cwd(), ".env")
if (existsSync(envPath)) {
  const { readFileSync } = await import("fs")
  const lines = readFileSync(envPath, "utf-8").split("\n")
  for (const line of lines) {
    const [key, ...rest] = line.split("=")
    if (key && rest.length) process.env[key.trim()] = rest.join("=").trim()
  }
}

const MAX_WIDTH = 2400
const QUALITY = 88
const SOURCE_DIR = path.resolve(process.cwd(), "images-source")
const CATEGORIES = ["oil-paintings", "other-arts"] as const

type Category = (typeof CATEGORIES)[number]

const categoryMap: Record<Category, string> = {
  "oil-paintings": "oil-painting",
  "other-arts": "other",
}

async function processImage(filePath: string, outDir: string) {
  const ext = path.extname(filePath).toLowerCase()
  const basename = path.basename(filePath, ext)

  const meta = await sharp(filePath).metadata()
  const origW = meta.width ?? 800
  const origH = meta.height ?? 600

  const scale = origW > MAX_WIDTH ? MAX_WIDTH / origW : 1
  const outW = Math.round(origW * scale)
  const outH = Math.round(origH * scale)

  const webpPath = path.join(outDir, `${basename}.webp`)
  const jpegPath = path.join(outDir, `${basename}.jpg`)

  await sharp(filePath)
    .resize(outW, outH, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(webpPath)

  await sharp(filePath)
    .resize(outW, outH, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: QUALITY, progressive: true })
    .toFile(jpegPath)

  return { webpPath, jpegPath, width: outW, height: outH }
}

async function uploadToBlob(filePath: string, category: Category) {
  const filename = path.basename(filePath)
  const blobPath = `art/${category}/${filename}`
  const fileBuffer = await import("fs").then((fs) =>
    fs.readFileSync(filePath)
  )

  const blob = await put(blobPath, fileBuffer, {
    access: "public",
    contentType: filePath.endsWith(".webp") ? "image/webp" : "image/jpeg",
  })

  return blob.url
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("❌  BLOB_READ_WRITE_TOKEN is not set in .env")
    process.exit(1)
  }

  const tmpDir = path.resolve(process.cwd(), ".art-tmp")
  await mkdir(tmpDir, { recursive: true })

  const snippets: string[] = []

  for (const category of CATEGORIES) {
    const sourceDir = path.join(SOURCE_DIR, category)
    if (!existsSync(sourceDir)) {
      console.log(`⚠️  No directory: ${sourceDir} — skipping`)
      continue
    }

    const files = (await readdir(sourceDir)).filter((f) =>
      /\.(jpe?g|png|tiff?|webp|heic|avif)$/i.test(f)
    )

    if (!files.length) {
      console.log(`⚠️  No images found in ${sourceDir}`)
      continue
    }

    console.log(`\n📂 Processing ${category} (${files.length} images)…`)

    for (const file of files) {
      const filePath = path.join(sourceDir, file)
      const basename = path.basename(file, path.extname(file))

      console.log(`  → ${file}`)

      const { webpPath, width, height } = await processImage(filePath, tmpDir)
      const blobUrl = await uploadToBlob(webpPath, category)

      const id = basename.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")

      snippets.push(`  {
    id: "${id}",
    title: "${basename.replace(/-/g, " ")}",
    year: ${new Date().getFullYear()},
    medium: "Oil on canvas",
    dimensions: '??" × ??"',
    blobUrl: "${blobUrl}",
    width: ${width},
    height: ${height},
    alt: "${basename.replace(/-/g, " ")}",
    category: "${categoryMap[category]}",
    featured: false,
  },`)

      console.log(`     ✓ Uploaded → ${blobUrl}`)
    }
  }

  // Clean up temp dir
  await import("fs").then((fs) => fs.rmSync(tmpDir, { recursive: true, force: true }))

  if (snippets.length) {
    console.log("\n\n━━━ Paste these into app/lib/artworks.ts ━━━\n")
    console.log(snippets.join("\n"))
    console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
