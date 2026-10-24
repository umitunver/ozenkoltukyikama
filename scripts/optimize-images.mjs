// Ham fotoğrafları WebP'ye çevirir; 640 / 1080 / 1600 (ve küçük kartlar için 320 / 480 / 768) genişliklerinde üretir.
//
// Kullanım:  npm run images            (varsayılan kaynak: assets/raw-images)
//            node scripts/optimize-images.mjs <kaynak-klasör>
//
// Çıktı:     public/images/<ad>-<genişlik>.webp
//            lib/images.generated.json  (bileşenlerin srcset / width / height için okuduğu manifest)
//
// Kaynak görsel hedef genişlikten darsa büyütülmez; o boy kaynağın kendi genişliğinde üretilir.

import { mkdir, readdir, writeFile, rm } from "node:fs/promises";
import { join, parse, resolve } from "node:path";
import sharp from "sharp";

const ROOT = resolve(import.meta.dirname, "..");
const SRC_DIR = resolve(process.argv[2] ?? join(ROOT, "assets/raw-images"));
const OUT_DIR = join(ROOT, "public/images");
const MANIFEST = join(ROOT, "lib/images.generated.json");
// 640 / 1080 / 1600 ana boylar; 320, 480 ve 768 küçük kartlar ve mobil hero için (Lighthouse "responsive images").
const WIDTHS = [320, 480, 640, 768, 1080, 1600];
const QUALITY = 70;

const files = (await readdir(SRC_DIR)).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).sort();
if (files.length === 0) {
  console.error(`Kaynak klasörde görsel yok: ${SRC_DIR}`);
  process.exit(1);
}

await rm(OUT_DIR, { recursive: true, force: true });
await mkdir(OUT_DIR, { recursive: true });

const manifest = {};
for (const file of files) {
  const name = parse(file).name;
  const input = sharp(join(SRC_DIR, file));
  const { width: srcWidth, height: srcHeight } = await input.metadata();

  const widths = [...new Set(WIDTHS.map((w) => Math.min(w, srcWidth)))];
  for (const w of widths) {
    await input
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(join(OUT_DIR, `${name}-${w}.webp`));
  }

  manifest[name] = { width: srcWidth, height: srcHeight, widths };
  console.log(`✓ ${name}  ${srcWidth}×${srcHeight}  →  ${widths.join(", ")}`);
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`\n${files.length} görsel işlendi → public/images, manifest → lib/images.generated.json`);
