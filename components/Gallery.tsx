import { gallery, type GalleryItem } from "@/lib/content";
import type { ImageName } from "@/lib/images";
import { Picture } from "./Picture";
import { SectionHeading } from "./SectionHeading";

/** `exclude`: sayfanın hero fotoğrafı; galeride tekrar etmesin diye yerine yedek fotoğraf konur. */
function pickItems(exclude?: ImageName): GalleryItem[] {
  if (!exclude) return gallery.items;
  const used = new Set<ImageName>(gallery.items.map((i) => i.image));
  const spare = gallery.alternates.filter((a) => a.image !== exclude && !used.has(a.image));
  return gallery.items.map((item) => (item.image === exclude ? (spare.shift() ?? item) : item));
}

function Label({ children }: { children: string }) {
  return (
    <span className="absolute bottom-3 left-3 rounded-lg bg-kum-0 px-2.5 py-1.5 text-[13px] font-bold text-kum-900">
      {children}
    </span>
  );
}

export function Gallery({ exclude }: { exclude?: ImageName }) {
  const items = pickItems(exclude);

  return (
    <section id="galeri" aria-labelledby="galeri-title" className="on-dark section-y bg-petrol-900">
      <div className="container-site">
        <SectionHeading id="galeri-title" eyebrow={gallery.eyebrow} title={gallery.title} text={gallery.text} tone="dark" />

        <div className="mt-7 flex flex-col gap-3 md:mt-10 lg:flex-row lg:gap-4">
          <figure className="relative overflow-hidden rounded-[18px] lg:w-[600px] lg:shrink-0">
            <Picture
              name={gallery.main.image}
              alt={gallery.main.alt}
              sizes="(min-width: 1024px) 600px, calc(100vw - 40px)"
              className="h-[260px] w-full object-cover md:h-[400px] lg:h-[456px]"
            />
            <figcaption>
              <Label>{gallery.main.label}</Label>
            </figcaption>
          </figure>

          <ul className="grid flex-1 grid-cols-2 gap-3 lg:gap-4">
            {items.map((item) => (
              <li key={item.image}>
                <figure className="relative overflow-hidden rounded-[14px]">
                  <Picture
                    name={item.image}
                    alt={item.alt}
                    sizes="(min-width: 1024px) 284px, calc(50vw - 26px)"
                    className="h-[130px] w-full object-cover md:h-[200px] lg:h-[220px]"
                  />
                  <figcaption>
                    <Label>{item.label}</Label>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
