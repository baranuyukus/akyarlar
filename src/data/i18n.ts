export const routeAlternates = [
  { tr: "/", en: "/en/", de: "/de/", ru: "/ru/" },
  { tr: "/bodrum-ruzgar-sorfu-okulu/", en: "/en/bodrum-windsurf-school/", de: "/de/windsurfschule-bodrum/", ru: "/ru/shkola-vindsorfinga-bodrum/" },
  { tr: "/ruzgar-sorfu-dersi/", en: "/en/windsurf-lessons-bodrum/", de: "/de/windsurfkurs-bodrum/", ru: "/ru/uroki-vindsorfinga-bodrum/" },
  { tr: "/kiralama/", en: "/en/windsurf-rental-bodrum/", de: "/de/windsurf-verleih-bodrum/", ru: "/ru/prokat-vindsorfinga-bodrum/" },
  { tr: "/akyarlar/", en: "/en/akyarlar-windsurf-spot/", de: "/de/akyarlar-windsurf-spot/", ru: "/ru/akyarlar-vindsorfing-spot/" },
  { tr: "/akyarlar-koyu-rehberi/", en: "/en/akyarlar-bay-guide/", de: "/de/akyarlar-bucht-reisefuehrer/", ru: "/ru/bukhta-akyarlar-gid/" },
  { tr: "/akyarlar-sikca-sorulan-sorular/", en: "/en/akyarlar-faq/", de: "/de/akyarlar-faq/", ru: "/ru/akyarlar-faq/" },
  { tr: "/bodrum-akyarlar-ruzgar-durumu/", en: "/en/bodrum-akyarlar-wind-forecast/", de: "/de/bodrum-akyarlar-windvorhersage/", ru: "/ru/prognoz-vetra-bodrum-akyarlar/" },
  { tr: "/bodrum-paddle/", en: "/en/bodrum-paddle-board/", de: "/de/bodrum-stand-up-paddling/", ru: "/ru/sup-bodrum-akyarlar/" },
  { tr: "/bodrum-su-sporlari/", en: "/en/bodrum-water-sports/", de: "/de/bodrum-wassersport/", ru: "/ru/vodnye-vidy-sporta-bodrum/" },
  { tr: "/iletisim/", en: "/en/contact/", de: "/de/kontakt/", ru: "/ru/kontakty/" }
];

export const findRouteAlternates = (path: string) =>
  routeAlternates.find((route) => route.tr === path || route.en === path || route.de === path || route.ru === path);
