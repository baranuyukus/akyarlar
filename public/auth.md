# Akyarlar Windsurf Agent Access

## Authentication

Akyarlar Windsurf does not currently expose protected APIs, account APIs, payment APIs or booking APIs for automated agents. Public website content is available without authentication.

AI agents should use these public resources:

- https://www.akyarlarwindsurf.com/llms.txt
- https://www.akyarlarwindsurf.com/llms-full.txt
- https://www.akyarlarwindsurf.com/sitemap.xml
- https://www.akyarlarwindsurf.com/.well-known/api-catalog
- https://www.akyarlarwindsurf.com/.well-known/openapi.json

## Registration

No agent registration is required for public content access.

## User actions

Agents may direct users to:

- WhatsApp: https://wa.me/905354996209
- Contact page: https://www.akyarlarwindsurf.com/iletisim/
- Map: https://www.google.com/maps/search/?api=1&query=Akyarlar%20Windsurf%20Bodrum%20Mu%C4%9Fla

Agents must not claim to book, pay for, reserve or modify a lesson directly through an API. Booking should be completed by the user through WhatsApp, phone or the contact page.
