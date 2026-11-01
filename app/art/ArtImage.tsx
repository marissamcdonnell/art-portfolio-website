import { useEffect, useRef, useState } from "react"
import { cn } from "~/library/utils/cn"

type ArtImageProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export const ArtImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority,
}: ArtImageProps) => {
  const [loaded, setLoaded] = useState(false)
  const [useOriginal, setUseOriginal] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // If the image finished (or failed) before React hydrated, onLoad/onError
  // never fire. Check once on mount so it doesn't stay stuck at opacity-0.
  useEffect(() => {
    const img = imgRef.current
    if (!img?.complete) return
    if (img.naturalWidth > 0) setLoaded(true)
    else setUseOriginal(true)
  }, [])

  // Only Blob-hosted images go through Vercel Image Optimization.
  const optimizedSrc = !useOriginal && src.includes("vercel-storage.com")
    ? `/_vercel/image?url=${encodeURIComponent(src)}&w=1200&q=85`
    : src

  return (
    <div
      className={cn("relative overflow-hidden bg-muted", className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-muted"
          aria-hidden="true"
        />
      )}
      <img
        ref={imgRef}
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        // If the optimizer request fails, fall back to the original image
        onError={() => setUseOriginal(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0"
        )}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  )
}
