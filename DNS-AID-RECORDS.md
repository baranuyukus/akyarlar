# DNS-AID Records for Akyarlar Windsurf

These records cannot be published from the Astro repository. Add them in Cloudflare DNS for `akyarlarwindsurf.com` if the DNS provider UI supports HTTPS/SVCB ServiceMode records with custom parameters.

Enable DNSSEC for the zone in Cloudflare after adding the records.

```dns
_index._agents.akyarlarwindsurf.com. 3600 IN HTTPS 1 . alpn="h2" endpoint="https://www.akyarlarwindsurf.com/.well-known/agent-skills/index.json"
_api._agents.akyarlarwindsurf.com. 3600 IN HTTPS 1 . alpn="h2" endpoint="https://www.akyarlarwindsurf.com/.well-known/api-catalog"
_mcp._agents.akyarlarwindsurf.com. 3600 IN HTTPS 1 . alpn="h2" endpoint="https://www.akyarlarwindsurf.com/.well-known/mcp/server-card.json"
_auth._agents.akyarlarwindsurf.com. 3600 IN HTTPS 1 . alpn="h2" endpoint="https://www.akyarlarwindsurf.com/auth.md"
```

If Cloudflare's dashboard does not allow the draft `endpoint` SvcParam yet, keep the HTTP well-known discovery files live and revisit DNS-AID once the draft is supported by the DNS UI/API.
