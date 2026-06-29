import { site } from "@data/site";

export type NoteSection = {
  heading?: string;
  paragraphs: string[];
};

export type TeacherNote = {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  category: string;
  tags: string[];
  keywords: string;
  coverImage: string;
  coverImageWebp: string;
  coverImageAvif: string;
  imageAlt: string;
  relatedLinks: Array<{
    href: string;
    label: string;
    text: string;
  }>;
  body: NoteSection[];
};

export const notesIndexPath = "/hocalarimizdan-notlar/";
export const notesIndexMeta = {
  title: "Hocalarımızdan Notlar | Akyarlar Windsurf",
  description:
    "Akyarlar Windsurf hocalarından rüzgar sörfü dersi, çocuk eğitimi, paddle ve Akyarlar rüzgarı hakkında sahadan kısa notlar.",
  path: notesIndexPath,
  keywords:
    "Akyarlar Windsurf blog, Bodrum rüzgar sörfü notları, windsurf hocaları, Akyarlar rüzgar, Bodrum windsurf"
};

export const teacherNotes: TeacherNote[] = [
  {
    title: "İlk Rüzgar Sörfü Dersinde Öğrenciye Ne Anlatıyoruz?",
    slug: "ilk-ruzgar-sorfu-dersinde-ne-anlatiyoruz",
    description:
      "Bodrum Akyarlar'da ilk rüzgar sörfü dersinde denge, yelken kontrolü, yön verme ve güvenli dönüşü sahada nasıl anlattığımızı okuyun.",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    author: "Akyarlar Windsurf hocaları",
    category: "Rüzgar sörfü dersi",
    tags: ["ilk rüzgar sörfü dersi", "Bodrum rüzgar sörfü dersi", "başlangıç windsurf"],
    keywords:
      "ilk rüzgar sörfü dersi, Bodrum rüzgar sörfü dersi, Akyarlar windsurf dersi, başlangıç windsurf, rüzgar sörfü öğrenmek",
    coverImage: site.heroImage,
    coverImageWebp: site.heroImageWebp,
    coverImageAvif: site.heroImageAvif,
    imageAlt: "Akyarlar koyunda ilk rüzgar sörfü dersi için sakin deniz",
    relatedLinks: [
      {
        href: "/ruzgar-sorfu-dersi/",
        label: "Rüzgar sörfü dersi",
        text: "6 saatlik özel ders sistemini inceleyin."
      },
      {
        href: "/bodrum-ruzgar-sorfu-okulu/",
        label: "Okul yaklaşımı",
        text: "Aile ortamında nasıl eğitim verdiğimizi okuyun."
      },
      {
        href: "/iletisim/",
        label: "Ders için iletişim",
        text: "Ders saati ve rüzgar durumunu birlikte planlayalım."
      }
    ],
    body: [
      {
        paragraphs: [
          "İlk rüzgar sörfü dersinde amacımız öğrenciyi uzun teoriyle yormak değil, denizde neyi neden yaptığını sade şekilde hissettirmektir. Akyarlar'ın dalgasız koy yapısı bu yüzden bizim için büyük avantaj sağlar; öğrenci panik yerine tekrar yapmaya odaklanır.",
          "Derse başlamadan önce board, yelken ve rüzgar yönünü birlikte tanırız. Hangi elin ne zaman çalıştığını, yelkeni neden gövdeye yaklaştırdığımızı ve rüzgarı nasıl okuyacağımızı kısa örneklerle anlatırız."
        ]
      },
      {
        heading: "Önce denge, sonra yelken hissi",
        paragraphs: [
          "Başlangıçta en önemli konu board üzerinde rahat durmaktır. Öğrenci ayak yerini, bakış yönünü ve gövde dengesini bulduğunda yelken kontrolü çok daha kolay gelir.",
          "Yelkeni kaldırırken güçle çekmek yerine doğru açıyla kaldırmayı gösteririz. Bu küçük fark, özellikle ilk kez deneyen öğrencinin yorulmadan öğrenmesini sağlar."
        ]
      },
      {
        heading: "İlk hedef: kontrollü gidip dönebilmek",
        paragraphs: [
          "İlk derste mucize vaat etmeyiz; ama doğru hava ve doğru ekipmanla öğrencilerin büyük kısmı kontrollü şekilde ilerleyip dönüş fikrini anlamaya başlar. Buradaki asıl hedef hız değil, güvenli kontroldür.",
          "Ders sonunda öğrenci rüzgarın nereden geldiğini, board'un neden döndüğünü ve yelken açısının gidişi nasıl değiştirdiğini daha net hisseder. Bu temel oturduğunda sonraki dersler çok daha keyifli ilerler."
        ]
      }
    ]
  },
  {
    title: "Akyarlar'da Çocuklar Rüzgar Sörfüne Nasıl Başlıyor?",
    slug: "akyarlarda-cocuklar-ruzgar-sorfune-nasil-basliyor",
    description:
      "Çocuklar için rüzgar sörfü eğitiminde yaş, güven, küçük ekipman ve Akyarlar'ın sakin koy yapısı neden önemlidir?",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    author: "Akyarlar Windsurf hocaları",
    category: "Çocuk eğitimi",
    tags: ["çocuk rüzgar sörfü Bodrum", "çocuklar için windsurf", "Akyarlar çocuk eğitimi"],
    keywords:
      "çocuk rüzgar sörfü Bodrum, çocuklar için windsurf, Akyarlar çocuk windsurf, Bodrum çocuk aktivitesi, çocuk rüzgar sörfü dersi",
    coverImage: site.familyImage,
    coverImageWebp: site.familyImageWebp,
    coverImageAvif: site.familyImageAvif,
    imageAlt: "Akyarlar koyunda çocuklar ve aileler için güvenli deniz ortamı",
    relatedLinks: [
      {
        href: "/bodrum-ruzgar-sorfu-okulu/",
        label: "Çocuk ve aile dersleri",
        text: "Çocuklar için eğitim yaklaşımımızı görün."
      },
      {
        href: "/akyarlar/",
        label: "Akyarlar koyu",
        text: "Koyun neden başlangıç için güvenli olduğunu okuyun."
      },
      {
        href: "/iletisim/",
        label: "Uygun yaş ve saat",
        text: "Çocuğunuz için doğru günü birlikte seçelim."
      }
    ],
    body: [
      {
        paragraphs: [
          "Çocuklarda rüzgar sörfüne başlama kararı sadece yaşa bakılarak verilmez. Yüzme bilgisi, denizdeki rahatlık, dikkat süresi ve o günkü rüzgar koşulları birlikte değerlendirilir.",
          "Akyarlar'da çocuklarla çalışırken ilk hedefimiz performans değil, güven duygusudur. Çocuk denizde kendini rahat hissettiğinde yelken ve board zaten daha doğal şekilde öğrenilir."
        ]
      },
      {
        heading: "Küçük ekipman, kısa anlatım",
        paragraphs: [
          "Çocuklar için hafif yelken ve uygun board seçimi çok önemlidir. Büyük ekipman çocuğu gereksiz zorlar; doğru ekipman ise ilk dakikalarda bile başarma hissi verir.",
          "Anlatımı kısa tutar, denemeyi oyunlaştırırız. Rüzgarı ezberletmek yerine, yelkenin dolduğunu ve board'un hareket ettiğini çocuğun kendi deneyimiyle fark etmesini isteriz."
        ]
      },
      {
        heading: "Ailenin güveni de sürecin parçası",
        paragraphs: [
          "Aileler genellikle ilk derste çocuğun ne kadar açıkta kalacağını, düşerse ne olacağını ve yorulursa nasıl döneceğini merak eder. Bu soruları ders başlamadan netleştiririz.",
          "Akyarlar'ın sığ ve korunaklı yapısı, ailelerin de süreci daha rahat izlemesini sağlar. Çocuk için iyi bir ilk deneyim, sonraki yıllarda deniz sporlarına bakışını tamamen değiştirebilir."
        ]
      }
    ]
  },
  {
    title: "Akyarlar'da Sabah Paddle, Öğleden Sonra Windsurf Neden Mantıklı?",
    slug: "akyarlarda-sabah-paddle-ogleden-sonra-windsurf",
    description:
      "Akyarlar'da günün rüzgar ritmine göre sabah paddle, öğleden sonra windsurf planı neden aileler ve öğrenciler için iyi çalışır?",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    author: "Akyarlar Windsurf hocaları",
    category: "Rüzgar ve planlama",
    tags: ["Akyarlar paddle", "Bodrum windsurf zamanı", "Akyarlar rüzgar"],
    keywords:
      "Akyarlar paddle, Bodrum windsurf zamanı, Akyarlar rüzgar, Bodrum paddle, Akyarlar SUP, Bodrum rüzgar sörfü saatleri",
    coverImage: site.heroImage,
    coverImageWebp: site.heroImageWebp,
    coverImageAvif: site.heroImageAvif,
    imageAlt: "Akyarlar koyunda sabah paddle ve öğleden sonra windsurf için uygun deniz",
    relatedLinks: [
      {
        href: "/bodrum-paddle/",
        label: "Bodrum Paddle",
        text: "Akyarlar'da sabah paddle koşullarını inceleyin."
      },
      {
        href: "/bodrum-akyarlar-ruzgar-durumu/",
        label: "Rüzgar durumu",
        text: "Windguru ve Windy ile günü planlayın."
      },
      {
        href: "/bodrum-su-sporlari/",
        label: "Su sporları",
        text: "Akyarlar'daki deniz aktivitelerini keşfedin."
      }
    ],
    body: [
      {
        paragraphs: [
          "Akyarlar'da denizin günlük ritmi çoğu zaman çok nettir: sabah daha sakin, öğleden sonra rüzgar daha belirgin. Bu yüzden aileler için sabah paddle, öğleden sonra windsurf planı doğal şekilde çalışır.",
          "Elbette her gün aynı olmaz; rüzgar tahminine ve koydaki gerçek koşula bakmak gerekir. Yine de yaz aylarında bu ritim, günü verimli planlamak için güçlü bir başlangıç noktasıdır."
        ]
      },
      {
        heading: "Sabah paddle için neden güzel?",
        paragraphs: [
          "Sabah saatlerinde deniz daha cam gibi olduğunda SUP ve paddle board daha keyifli olur. Yeni başlayanlar, çocuklar ve sakin deniz isteyen aileler için bu saatler daha rahat geçer.",
          "Paddle sırasında amaç rüzgarla mücadele etmek değil, koyu yavaşça hissetmektir. Kos manzarası, berrak su ve sessiz sahil bu deneyimi Akyarlar'da daha özel yapar."
        ]
      },
      {
        heading: "Öğleden sonra windsurf zamanı",
        paragraphs: [
          "Meltem kendini göstermeye başladığında rüzgar sörfü için daha anlamlı bir ortam oluşur. Öğrenci yelkenin dolduğunu, board'un ilerlediğini ve dönüşlerin neden çalıştığını daha iyi hisseder.",
          "Bu yüzden ders saatini sadece takvime göre değil, rüzgarın o günkü davranışına göre düşünürüz. Doğru saat seçimi bazen dersin kalitesini ekipmandan bile fazla etkiler."
        ]
      }
    ]
  }
];

export const getNotePath = (note: Pick<TeacherNote, "slug">) => `${notesIndexPath}${note.slug}/`;

export const latestNotes = [...teacherNotes].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
