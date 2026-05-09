import { useState } from "react"
import { cn } from "~/lib/utils"

type ArtImageProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  onClick?: () => void
}

export function ArtImage({ src, alt, width, height, className, priority, onClick }: ArtImageProps) {
  const [loaded, setLoaded] = useState(false)

  // Build a Vercel Image Optimization URL for Blob-hosted images
  // Falls back to the raw src for external images (like Unsplash placeholders)
  const optimizedSrc = src.includes("vercel-storage.com") || src.includes("blob.vercel-storage.com")
    ? `/_vercel/image?url=${encodeURIComponent(src)}&w=1200&q=85`
    : src

  const aspectRatio = height / width

  return (
    <div
      className={cn("relative overflow-hidden bg-muted", className)}
      style={{ aspectRatio: `${width} / ${height}` }}
      onClick={onClick}
    >
      {/* Blurred placeholder */}
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-muted"
          aria-hidden="true"
        />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          onClick && "cursor-pointer"
        )}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  )
}
