import manifest from "./images.generated.json";

// `npm run images` çıktısı. Yeni görsel eklemek için önce scripti çalıştırın.
export type ImageName = keyof typeof manifest;

export type ImageInfo = {
  width: number;
  height: number;
  widths: number[];
};

export function getImage(name: ImageName): ImageInfo {
  return manifest[name];
}

export function imageSrc(name: ImageName, width?: number) {
  const { widths } = getImage(name);
  const w = width ?? widths[widths.length - 1];
  return `/images/${name}-${w}.webp`;
}

export function imageSrcSet(name: ImageName) {
  return getImage(name)
    .widths.map((w) => `${imageSrc(name, w)} ${w}w`)
    .join(", ");
}
