// Open Graph / Twitter kartı (1200×630), build sırasında statik olarak üretilir.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { imageSrc, type ImageName } from "./images";
import { ogSize } from "./metadata";
import { site } from "./site";


const root = process.cwd();

function dataUri(buffer: Buffer, mime: string) {
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

export async function renderOgImage({ title, subtitle, image }: { title: string; subtitle: string; image: ImageName }) {
  const [outfit, dmSans, logoSvg, photo] = await Promise.all([
    readFile(join(root, "assets/fonts/Outfit-SemiBold.ttf")),
    readFile(join(root, "assets/fonts/DMSans-Medium.ttf")),
    readFile(join(root, "public/logo-yatay.svg")),
    sharp(join(root, "public", imageSrc(image))).resize(480, 630, { fit: "cover" }).jpeg({ quality: 80 }).toBuffer(),
  ]);
  const logoSrc = dataUri(logoSvg, "image/svg+xml");
  const photoSrc = dataUri(photo, "image/jpeg");

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#FAF8F5" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 720,
            padding: "56px 56px 52px 64px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={logoSrc} width={218} height={80} />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontFamily: "Outfit",
                fontSize: 64,
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                color: "#082C33",
              }}
            >
              {title}
            </div>
            <div style={{ fontFamily: "DM Sans", fontSize: 28, lineHeight: 1.4, color: "#423E3A" }}>{subtitle}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                background: "#25D366",
                color: "#062A14",
                fontFamily: "DM Sans",
                fontSize: 26,
                padding: "14px 26px",
                borderRadius: 14,
              }}
            >
              WhatsApp’tan fiyat alın
            </div>
            <div style={{ fontFamily: "DM Sans", fontSize: 28, color: "#0C4049" }}>{site.phoneDisplay}</div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={photoSrc} width={480} height={630} style={{ objectFit: "cover" }} />
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Outfit", data: outfit, weight: 600, style: "normal" },
        { name: "DM Sans", data: dmSans, weight: 500, style: "normal" },
      ],
    },
  );
}
