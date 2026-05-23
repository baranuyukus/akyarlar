# Akyarlar Windsurf

Astro ile hazırlanmış statik kurumsal web sitesi. Odak: Bodrum Akyarlar rüzgar sörfü okulu için yerel SEO, hızlı statik yayın ve Cloudflare Pages dağıtımı.

## Komutlar

```bash
npm install
npm run dev
npm run build
```

## Cloudflare Pages

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Production domain: `www.akyarlarwindsurf.com`

## SEO Migration Notları

- Google site taşıma önerilerine göre yayından önce eski WordPress URL listesini çıkarıp `public/_redirects` dosyasına birebir 301 eşleme ekleyin.
- Yeni yayından sonra Search Console mülkünü doğrulayın, `https://www.akyarlarwindsurf.com/sitemap-index.xml` sitemap'ini gönderin.
- Eski sitedeki yüksek trafik alan URL'leri silmek yerine en yakın yeni sayfaya yönlendirin.
- Alan adı değişmiyorsa Change of Address aracı kullanılmaz; URL değişikliklerinde 301 ve sitemap takibi yeterlidir.
