import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tamamen statik çıktı: `npm run build` sonrası `out/` klasörü herhangi bir statik hostinge yüklenebilir.
  output: "export",
  // Görseller build öncesi `scripts/optimize-images.mjs` ile WebP'ye çevrilip boyutlandırılıyor.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
