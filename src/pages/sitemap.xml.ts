import { dePageMeta } from "@data/de";
import { enPageMeta } from "@data/en";
import { ruPageMeta } from "@data/ru";
import { pageMeta, site } from "@data/site";

const paths = Array.from(
  new Set([...Object.values(pageMeta), ...Object.values(enPageMeta), ...Object.values(dePageMeta), ...Object.values(ruPageMeta)].map((meta) => meta.path))
).sort();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((path) => {
    const loc = new URL(path, site.domain).toString();
    const priority = path === "/" ? "1.0" : "0.8";

    return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

export function GET() {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
