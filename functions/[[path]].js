const DISCOVERY_LINKS = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</llms.txt>; rel="alternate"; type="text/markdown"; title="LLMs context"',
  '</llms-full.txt>; rel="alternate"; type="text/markdown"; title="Full LLMs context"',
  '</.well-known/openapi.json>; rel="service-desc"; type="application/openapi+json"; title="Public discovery OpenAPI"',
  '</.well-known/agent-skills/index.json>; rel="service-desc"; type="application/json"; title="Agent skills index"',
  '</auth.md>; rel="service-doc"; type="text/markdown"; title="Agent auth instructions"',
  '</.well-known/oauth-protected-resource>; rel="oauth-protected-resource"; type="application/json"',
  '</.well-known/mcp/server-card.json>; rel="service-desc"; type="application/json"; title="MCP server card"'
];

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "X-Frame-Options": "SAMEORIGIN"
};

export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  const accept = request.headers.get("Accept") || "";
  const response = await context.next();
  const headers = new Headers(response.headers);

  addDiscoveryHeaders(headers);
  addSecurityHeaders(headers);
  setKnownContentType(headers, url.pathname);

  const contentType = headers.get("Content-Type") || "";
  if (accept.includes("text/markdown") && contentType.includes("text/html")) {
    const html = await response.text();
    const markdown = htmlToMarkdown(html);
    headers.set("Content-Type", "text/markdown; charset=utf-8");
    headers.set("Vary", appendVary(headers.get("Vary"), "Accept"));
    headers.set("X-Markdown-Tokens", String(estimateTokens(markdown)));
    headers.set("X-Original-Tokens", String(estimateTokens(html)));
    return new Response(markdown, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

function addDiscoveryHeaders(headers) {
  headers.delete("Link");
  for (const link of DISCOVERY_LINKS) headers.append("Link", link);
}

function addSecurityHeaders(headers) {
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(name)) headers.set(name, value);
  }
}

function setKnownContentType(headers, pathname) {
  const knownTypes = {
    "/.well-known/api-catalog": "application/linkset+json; charset=utf-8",
    "/.well-known/openapi.json": "application/openapi+json; charset=utf-8",
    "/.well-known/oauth-protected-resource": "application/json; charset=utf-8",
    "/.well-known/oauth-authorization-server": "application/json; charset=utf-8",
    "/.well-known/mcp/server-card.json": "application/json; charset=utf-8",
    "/.well-known/agent-skills/index.json": "application/json; charset=utf-8",
    "/.well-known/status.json": "application/json; charset=utf-8",
    "/llms.txt": "text/markdown; charset=utf-8",
    "/llms-full.txt": "text/markdown; charset=utf-8",
    "/auth.md": "text/markdown; charset=utf-8"
  };

  if (knownTypes[pathname]) headers.set("Content-Type", knownTypes[pathname]);
  if (pathname.startsWith("/.well-known/agent-skills/") && pathname.endsWith(".md")) {
    headers.set("Content-Type", "text/markdown; charset=utf-8");
  }
}

function appendVary(current, value) {
  if (!current) return value;
  const parts = current.split(",").map((part) => part.trim().toLowerCase());
  return parts.includes(value.toLowerCase()) ? current : `${current}, ${value}`;
}

function htmlToMarkdown(html) {
  const title = (html.match(/<title>(.*?)<\/title>/is)?.[1] || "Akyarlar Windsurf").trim();
  let content = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "");

  content = content
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n# $1\n")
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n## $1\n")
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n### $1\n")
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "\n#### $1\n")
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "\n- $1")
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n$1\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "_$1_")
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, "_$1_")
    .replace(/<[^>]+>/g, " ");

  content = decodeEntities(content)
    .replace(/[ \t]+/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return `---\ntitle: ${decodeEntities(title)}\nsource: Akyarlar Windsurf\n---\n\n${content}\n`;
}

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x2F;/g, "/");
}

function estimateTokens(text) {
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).filter(Boolean).length * 1.3));
}
