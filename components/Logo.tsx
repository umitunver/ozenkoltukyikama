import { logo } from "@/lib/logo-paths.generated";
import { site } from "@/lib/site";

// Figma "Logo / Yatay" (12:29), açık zemin. Yollar `npm run brand` ile üretilir.
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox={`0 0 ${logo.width} ${logo.height}`} className={className} role="img" aria-label={site.name}>
      {logo.amblem.map((p, i) => (
        <path key={i} d={p.d} fill={p.fill} />
      ))}
      <g transform={`translate(${logo.yazi.x} ${logo.yazi.y})`}>
        {logo.yazi.paths.map((p, i) => (
          <path key={i} d={p.d} fill={p.fill} />
        ))}
      </g>
    </svg>
  );
}
