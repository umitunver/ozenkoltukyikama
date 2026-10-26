// Figma'dan dışa aktarılan logo parçalarından (assets/logo) site varlıklarını üretir:
//
//   public/logo-yatay.svg   açık zemin, yatay logo   (Figma 12:29)
//   public/logo-koyu.svg    koyu / petrol zemin      (Figma 12:51)
//   public/logo-dikey.svg   dikey logo               (Figma 12:95)
//   app/favicon.ico         16 / 32 / 48 px          ("İkon 160" katmanı)
//   app/icon1.svg           SVG favicon
//   app/icon2.png           96 px  (Google arama sonucu favicon'u 48'in katı olmalı)
//   app/icon3.png           192 px
//   app/apple-icon.png      180 px, köşesiz (iOS kendi yuvarlatır)
//   public/web-app-manifest-192x192.png, -512x512.png, -maskable-512x512.png   app/manifest.ts için
//   lib/logo-paths.generated.ts   Header/Footer'daki inline SVG bileşeni için yol verisi
//
// Kullanım: npm run brand

import { readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import sharp from "sharp";

const ROOT = resolve(import.meta.dirname, "..");
const LOGO = join(ROOT, "assets/logo");

/** Bir parça SVG'nin boyutunu ve iç içeriğini döndürür. */
async function part(file) {
  const svg = await readFile(join(LOGO, file), "utf8");
  const [, w, h] = svg.match(/width="([\d.]+)" height="([\d.]+)"/);
  const inner = svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").trim();
  const paths = [...inner.matchAll(/<path[^>]*?\sd="([^"]+)"[^>]*?fill="([^"]+)"/g)].map((m) => ({
    d: m[1],
    fill: m[2],
  }));
  return { w: Number(w), h: Number(h), inner, paths };
}

function compose({ width, height, title, items }) {
  const body = items
    .map(({ p, x, y }) => `<svg x="${x}" y="${y}" width="${p.w}" height="${p.h}" viewBox="0 0 ${p.w} ${p.h}">${p.inner}</svg>`)
    .join("\n");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" role="img" aria-label="${title}">\n<title>${title}</title>\n${body}\n</svg>\n`;
}

const TITLE = "Özen Koltuk Yıkama";
const [yYazi, yAmblem, kYazi, kAmblem, dYazi, dAmblem] = await Promise.all(
  ["y-yazi", "y-amblem", "k-yazi", "k-amblem", "d-yazi", "d-amblem"].map((n) => part(`${n}.svg`)),
);

// Konumlar Figma'daki "Logo / Yatay", "Logo / Dikey" çerçevelerinden alındı.
await writeFile(
  join(ROOT, "public/logo-yatay.svg"),
  compose({ width: 432.022, height: 158.823, title: TITLE, items: [{ p: yAmblem, x: 0, y: 0 }, { p: yYazi, x: 164.628, y: 15.37 }] }),
);
await writeFile(
  join(ROOT, "public/logo-koyu.svg"),
  compose({ width: 288.015, height: 105.882, title: TITLE, items: [{ p: kAmblem, x: 0, y: 0 }, { p: kYazi, x: 109.752, y: 10.247 }] }),
);
await writeFile(
  join(ROOT, "public/logo-dikey.svg"),
  compose({ width: 178.263, height: 230.977, title: TITLE, items: [{ p: dAmblem, x: 29.801, y: 0 }, { p: dYazi, x: 0, y: 145.588 }] }),
);

// Inline logo bileşeni için yol verisi (açık zemin yatay logo).
const ts = `// Bu dosya scripts/build-brand.mjs tarafından üretilir, elle düzenlemeyin.
export const logo = ${JSON.stringify(
  {
    width: 432.022,
    height: 158.823,
    amblem: yAmblem.paths,
    yazi: { x: 164.628, y: 15.37, paths: yYazi.paths },
  },
  null,
  2,
)} as const;
`;
await writeFile(join(ROOT, "lib/logo-paths.generated.ts"), ts);

// Favicon ve uygulama ikonları: Figma "İkon 160" (12:146) — 160×160 petrol-600 zemin, 36px köşe, beyaz amblem.
const amblem = await part("icon-160.svg");
const appIcon = (rx) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">` +
  `<rect width="160" height="160" rx="${rx}" fill="#146C7A"/>` +
  `<svg x="32.662" y="27.2" width="${amblem.w}" height="${amblem.h}" viewBox="0 0 ${amblem.w} ${amblem.h}">${amblem.inner}</svg>` +
  `</svg>\n`;
const rounded = appIcon(36); // köşeler şeffaf
const square = appIcon(0); // apple-touch-icon ve maskable için tam dolu
await writeFile(join(ROOT, "app/icon1.svg"), rounded);
const png = (svg, size) => sharp(Buffer.from(svg), { density: 72 * (size / 160) * 2 }).resize(size, size).png();
await png(rounded, 96).toFile(join(ROOT, "app/icon2.png"));
await png(rounded, 192).toFile(join(ROOT, "app/icon3.png"));
await png(square, 180).toFile(join(ROOT, "app/apple-icon.png"));
await png(rounded, 192).toFile(join(ROOT, "public/web-app-manifest-192x192.png"));
await png(rounded, 512).toFile(join(ROOT, "public/web-app-manifest-512x512.png"));
await png(square, 512).toFile(join(ROOT, "public/web-app-manifest-maskable-512x512.png"));
const icon = rounded;

const icoSizes = [16, 32, 48];
const pngs = await Promise.all(icoSizes.map((s) => png(icon, s).toBuffer()));
const header = Buffer.alloc(6 + 16 * pngs.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(pngs.length, 4);
let offset = header.length;
pngs.forEach((buf, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(icoSizes[i], e);
  header.writeUInt8(icoSizes[i], e + 1);
  header.writeUInt8(0, e + 2);
  header.writeUInt8(0, e + 3);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(buf.length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += buf.length;
});
await writeFile(join(ROOT, "app/favicon.ico"), Buffer.concat([header, ...pngs]));

console.log("✓ logo SVG'leri, favicon.ico, icon1.svg, icon2/3.png, apple-icon.png, manifest ikonları ve lib/logo-paths.generated.ts üretildi");
