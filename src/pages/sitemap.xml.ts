import { dePageMeta } from "@data/de";
import { enPageMeta } from "@data/en";
import { getNotePath, notesIndexMeta, teacherNotes } from "@data/notes";
import { ruPageMeta } from "@data/ru";
import { pageMeta, site } from "@data/site";

const staticPaths = [...Object.values(pageMeta), ...Object.values(enPageMeta), ...Object.values(dePageMeta), ...Object.values(ruPageMeta)].map((meta) => ({
  path: meta.path
}));
const notePaths = [
  {
    path: notesIndexMeta.path,
    lastmod: teacherNotes[0]?.updatedAt
  },
  ...teacherNotes.map((note) => ({
    path: getNotePath(note),
    lastmod: note.updatedAt
  }))
];
const paths = Array.from(new Map([...staticPaths, ...notePaths].map((entry) => [entry.path, entry])).values()).sort((a, b) =>
  a.path.localeCompare(b.path)
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(({ path, lastmod }) => {
    const loc = new URL(path, site.domain).toString();
    const priority = path === "/" ? "1.0" : path.startsWith("/hocalarimizdan-notlar/") ? "0.7" : "0.8";

    return `  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
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
