import Link from "next/link";

export type Crumb = { name: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Sayfa yolu" className="bg-kum-50 pt-4">
      <ol className="container-site flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="text-kum-600">
                ›
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="py-1 text-petrol-700 underline-offset-2 hover:underline">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-kum-900">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
