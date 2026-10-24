/* eslint-disable @next/next/no-img-element -- statik export: görseller build öncesi WebP'ye çevriliyor */
import { preload } from "react-dom";
import { getImage, imageSrc, imageSrcSet, type ImageName } from "@/lib/images";

type PictureProps = {
  name: ImageName;
  alt: string;
  /** `srcset` için tarayıcıya verilecek görüntü genişliği ipucu. */
  sizes: string;
  /** LCP görseli: hemen yüklenir ve önceden yüklenir (preload). */
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export function Picture({ name, alt, sizes, priority = false, className, style }: PictureProps) {
  const { width, height } = getImage(name);
  const src = imageSrc(name);
  const srcSet = imageSrcSet(name);

  if (priority) {
    preload(src, { as: "image", imageSrcSet: srcSet, imageSizes: sizes, fetchPriority: "high" });
  }

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      className={className}
      style={style}
    />
  );
}
