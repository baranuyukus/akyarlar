export const routeAlternates = [
  { tr: "/", en: "/en/" },
  { tr: "/bodrum-ruzgar-sorfu-okulu/", en: "/en/bodrum-windsurf-school/" },
  { tr: "/ruzgar-sorfu-dersi/", en: "/en/windsurf-lessons-bodrum/" },
  { tr: "/kiralama/", en: "/en/windsurf-rental-bodrum/" },
  { tr: "/akyarlar/", en: "/en/akyarlar-windsurf-spot/" },
  { tr: "/akyarlar-koyu-rehberi/", en: "/en/akyarlar-bay-guide/" },
  { tr: "/akyarlar-sikca-sorulan-sorular/", en: "/en/akyarlar-faq/" },
  { tr: "/bodrum-akyarlar-ruzgar-durumu/", en: "/en/bodrum-akyarlar-wind-forecast/" },
  { tr: "/bodrum-paddle/", en: "/en/bodrum-paddle-board/" },
  { tr: "/bodrum-su-sporlari/", en: "/en/bodrum-water-sports/" },
  { tr: "/iletisim/", en: "/en/contact/" }
];

export const findRouteAlternates = (path: string) =>
  routeAlternates.find((route) => route.tr === path || route.en === path);
