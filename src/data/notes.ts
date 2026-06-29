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
    "Akyarlar Windsurf hocalarından çocuk odaklı Bodrum rüzgar sörfü dersi, oyunlaştırılmış windsurf eğitimi, kum zeminli güvenli koy, tekne dersleri ve Akyarlar rüzgarı hakkında sahadan SEO odaklı notlar.",
  path: notesIndexPath,
  keywords:
    "Akyarlar Windsurf blog, Hocalarımızdan Notlar, Bodrum çocuk rüzgar sörfü, çocuklar için windsurf Bodrum, oyunlaştırılmış windsurf eğitimi, kum zeminli güvenli koy, Akyarlar tekne dersi, Bodrum rüzgar sörfü notları, Akyarlar rüzgar, Bodrum windsurf"
};

export const teacherNotes: TeacherNote[] = [
  {
    title: "İlk Rüzgar Sörfü Dersinde Öğrenciye Ne Anlatıyoruz?",
    slug: "ilk-ruzgar-sorfu-dersinde-ne-anlatiyoruz",
    description:
      "Bodrum Akyarlar'da ilk rüzgar sörfü dersinde 10-15 dakikalık denge egzersizi, oyunlaştırılmış rüzgar bilgisi, kum zeminli güvenli koyda yelken kontrolü ve ilk ders sonunda gidip dönebilme hedefini nasıl öğrettiğimizi okuyun.",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    author: "Akyarlar Windsurf hocaları",
    category: "Rüzgar sörfü dersi",
    tags: ["ilk rüzgar sörfü dersi", "Bodrum rüzgar sörfü dersi", "başlangıç windsurf"],
    keywords:
      "ilk rüzgar sörfü dersi, Bodrum rüzgar sörfü dersi, Akyarlar rüzgar sörfü dersi, oyunlaştırılmış windsurf eğitimi, başlangıç windsurf, çocuk rüzgar sörfü Bodrum, kum zeminli güvenli koy, denge dersi windsurf, tekne destekli windsurf dersi, rüzgar sörfü öğrenmek",
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
          "İlk rüzgar sörfü dersinde amacımız öğrenciyi uzun teoriyle yormak değil, denizde neyi neden yaptığını sade, eğlenceli ve akılda kalıcı şekilde hissettirmektir. Akyarlar Windsurf olarak ağırlıklı şekilde çocuklarla çalıştığımız için teorik bilgiyi kuru bir anlatım gibi değil, küçük oyunlar ve denge denemeleriyle veririz.",
          "Rüzgar nereden geliyor, yelken neden doluyor, board neden dönüyor gibi konuları öğrencinin yaşına göre basitleştiririz. Çocuklarda bunu oyunlaştırır, yetişkinlerde ise günlük hayattan örneklerle anlatırız. Böylece yediden yetmişe her öğrenci, ilk dakikalardan itibaren derse dahil olur.",
          "Akyarlar'ın güvenli koy yapısı bu yaklaşımı çok destekler. Eğitim yaptığımız alan bel hizasına gelen, tamamen kum zeminli, dalgası düşük bir su alanıdır. Öğrenci düştüğünde ayağını rahatça yere basabilir; bu da özellikle ilk kez deneyen çocuklar ve denizden çekinen yetişkinler için büyük güven verir."
        ]
      },
      {
        heading: "Önce denge, sonra yelken hissi",
        paragraphs: [
          "İlk dersin yaklaşık 10-15 dakikasını denge dersine ayırırız. Öğrenci önce board üzerinde ayak yerini, dizlerin ne kadar yumuşak kalacağını, bakışın nereye yönleneceğini ve gövdenin nasıl rahat duracağını dener.",
          "Bu bölüm özellikle çocuklarda çok keyifli geçer. Board üzerinde küçük denge oyunları, ileri geri ağırlık aktarımı ve kontrollü düşme denemeleri yaparız. Çocuk dengesini oyun içinde bulduğu zaman yelken ona korkutucu gelmez.",
          "Denge egzersizlerinden sonra rüzgar bilgisine geçeriz. Yelkeni kaldırırken güçle çekmek yerine doğru açıyla kaldırmayı gösteririz. Bu küçük fark, hem çocukların hem de yetişkinlerin yorulmadan öğrenmesini sağlar."
        ]
      },
      {
        heading: "İlk hedef: kontrollü gidip dönebilmek",
        paragraphs: [
          "İlk derste mucize vaat etmeyiz; ama doğru hava, doğru ekipman ve sakin anlatımla öğrencilerimizin tamamına yakını ilk dersin sonunda gidip dönebilecek seviyeye rahatlıkla gelir. Buradaki asıl hedef hız değil, güvenli kontroldür.",
          "Ders sonunda öğrenci rüzgarın nereden geldiğini, board'un neden döndüğünü ve yelken açısının gidişi nasıl değiştirdiğini daha net hisseder. Bu temel oturduğunda sonraki dersler çok daha keyifli ilerler.",
          "Üçüncü dersten sonra öğrencilerimizin büyük çoğunluğuyla açığa çıkmaya başlarız. Bu aşamada tekne yanımızda olur; öğrenci ip olmadan, daha özgür bir alanda sörf yapmayı öğrenir ve gerçek güvenini burada kazanır."
        ]
      },
      {
        heading: "Tekne dersinde yakınlar da sürece dahil olabilir",
        paragraphs: [
          "Tekne destekli derslerde öğrencinin yakını isterse tekneye gelerek süreci izleyebilir. Bu, özellikle çocuk derslerinde aileler için çok güzel bir deneyimdir; hem güven verir hem de çocuğun gelişimini yakından görmelerini sağlar.",
          "Aileler tekneden fotoğraf ve video çekebilir. Çocuğun ilk kez ip olmadan ilerlediği, dönüş denediği veya rüzgarı kendi başına yakaladığı anlar hem öğrenci hem aile için unutulmaz olur.",
          "Bizim için ders yalnızca teknik öğretmek değildir. Öğrencinin kendine güvenmesini, ailesinin süreci rahatça izlemesini ve denizde geçirilen zamanın keyifli bir anıya dönüşmesini isteriz."
        ]
      },
      {
        heading: "Bu sistem çocuklarda neden daha hızlı çalışıyor?",
        paragraphs: [
          "Çocuklar bazen teorik bilgiyi uzun uzun dinlemek istemez; ama doğru oyunun içine konduğunda aynı bilgiyi çok hızlı kavrar. Bu yüzden rüzgar yönünü, yelken açısını ve board dengesini ayrı ayrı ezberletmek yerine küçük görevler halinde veririz.",
          "Örneğin önce board üzerinde dengede kalma oyunu yaparız, sonra yelkeni rüzgara doğru değil doğru açıya taşımayı deneriz. Çocuk her küçük başarıda kendini daha rahat hisseder ve dersin devamına daha istekli olur.",
          "Bu yaklaşım yalnızca çocuklarda değil, yetişkinlerde de işe yarar. İlk kez rüzgar sörfü öğrenen bir yetişkin de karmaşık terimler yerine basit, bedende hissedilen ve tekrar edilebilir hareketlerle daha hızlı ilerler."
        ]
      },
      {
        heading: "İlk dersten sonra öğrenci neyi bilerek çıkar?",
        paragraphs: [
          "İlk dersin sonunda öğrenci yalnızca board üzerinde durmayı değil, rüzgarın yönünü anlamayı, yelkeni kaldırmayı, yelkenin dolduğu anı hissetmeyi ve güvenli şekilde yön değiştirmeyi öğrenmiş olur.",
          "Akyarlar'ın bel hizasına gelen kum zeminli eğitim alanı, bu tekrarları korkmadan yapmayı sağlar. Öğrenci düştüğünde panik olmaz, ayağa kalkar, tekrar dener ve aynı hareketi daha iyi yapmaya başlar.",
          "Bu yüzden Bodrum rüzgar sörfü dersi arayan ailelere ve ilk kez deneyecek yetişkinlere hep aynı şeyi söyleriz: doğru koy, doğru ekipman ve sakin anlatım bir araya geldiğinde ilk ders çok daha keyifli ve verimli geçer."
        ]
      }
    ]
  },
  {
    title: "Akyarlar'da Çocuklar Rüzgar Sörfüne Nasıl Başlıyor?",
    slug: "akyarlarda-cocuklar-ruzgar-sorfune-nasil-basliyor",
    description:
      "Bodrum'da çocuklar için rüzgar sörfü eğitiminde oyunlaştırılmış teori, hafif çocuk ekipmanları, bel hizasında kum zeminli güvenli koy ve ailelerin tekne derslerine katılımı neden önemlidir?",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    author: "Akyarlar Windsurf hocaları",
    category: "Çocuk eğitimi",
    tags: ["çocuk rüzgar sörfü Bodrum", "çocuklar için windsurf", "Akyarlar çocuk eğitimi"],
    keywords:
      "çocuk rüzgar sörfü Bodrum, çocuklar için windsurf, Bodrum çocuk windsurf dersi, oyunlaştırılmış çocuk windsurf eğitimi, Akyarlar çocuk windsurf, hafif çocuk yelkeni, kum zeminli güvenli koy, çocuklar için rüzgar sörfü okulu, Bodrum çocuk aktivitesi, çocuk rüzgar sörfü dersi",
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
          "Akyarlar Windsurf olarak en güçlü taraflarımızdan biri çocuklarla çalışmak. Yıllardır çocukların denizle güvenli ilişki kurmasını, rüzgarı korkmadan tanımasını ve board üzerinde kendi başarısını hissetmesini önemsiyoruz.",
          "Çocuklarda rüzgar sörfüne başlama kararı sadece yaşa bakılarak verilmez. Yüzme bilgisi, denizdeki rahatlık, dikkat süresi, fiziksel uygunluk ve o günkü rüzgar koşulları birlikte değerlendirilir. Bazı çocuk çok hızlı adapte olur, bazı çocuk önce denge ve suya alışma için daha sakin bir tempo ister.",
          "İlk hedefimiz performans değil, güven duygusudur. Çocuk denizde kendini rahat hissettiğinde yelken ve board zaten daha doğal şekilde öğrenilir. Bu yüzden dersi çocuğun enerjisine göre şekillendiririz; sıkıldığı, yorulduğu veya dikkati dağıldığı noktada anlatımı değiştiririz."
        ]
      },
      {
        heading: "Küçük ekipman, oyunlaştırılmış anlatım",
        paragraphs: [
          "Çocuklar için hafif yelken ve uygun board seçimi çok önemlidir. Büyük ekipman çocuğu gereksiz zorlar; doğru ekipman ise ilk dakikalarda bile başarma hissi verir. Akyarlar'da çocukların rahatlıkla kaldırabileceği farklı yelken ve board seçeneklerimiz bulunur.",
          "Teorik eğitimi oyunlaştırmak çocuk derslerinin kalbidir. Rüzgar yönünü yalnızca tarif etmeyiz; çocuğun yüzüne gelen esintiyi, yelkenin dolmasını, board'un burnunun dönmesini küçük görevlerle hissettiririz.",
          "Bazen bir denge oyunu, bazen yelkeni doğru zamanda yakalama denemesi, bazen de kısa bir hedefe gidip dönme çalışması yaparız. Çocuk için ders bir sınav gibi değil, denizin içinde keşif gibi hissetmelidir."
        ]
      },
      {
        heading: "Güvenli koy ve kum zemin çocuklar için büyük avantaj",
        paragraphs: [
          "Koyumuz çocuk eğitimi için çok güvenlidir. Eğitim yaptığımız alan bel hizasına gelen, tamamen kum zeminli ve kontrollü bir sudur. Çocuk düştüğünde ayağını zemine rahatça basabildiği için panik azalır.",
          "Sığ, kum zeminli ve dalgası düşük bir alanda çalışmak hem çocuk hem aile için rahatlatıcıdır. Çocuk denizde kendini güvende hissettiğinde yeni bir hareket denemeye daha istekli olur.",
          "Akyarlar'ın korunaklı yapısı sayesinde ilk deneyim daha yumuşak geçer. Çocuk için iyi bir ilk deneyim, sonraki yıllarda deniz sporlarına bakışını tamamen değiştirebilir."
        ]
      },
      {
        heading: "Ailenin güveni de sürecin parçası",
        paragraphs: [
          "Aileler genellikle ilk derste çocuğun ne kadar açıkta kalacağını, düşerse ne olacağını ve yorulursa nasıl döneceğini merak eder. Bu soruları ders başlamadan netleştiririz.",
          "Üçüncü dersten sonra tekne destekli çalışmalara geçtiğimizde öğrencinin yakını da tekneye gelebilir. Çocuğun açığa çıkışını, ip olmadan sörf yapmaya başlamasını ve güven kazanmasını yakından izleyebilir.",
          "Teknede ailelerin fotoğraf ve video çekebilmesi de güzel bir hatıra olur. Çocuk çoğu zaman kendi gelişimini sonradan izlediğinde daha fazla motive olur; aile de sürecin ne kadar kontrollü ilerlediğini görür."
        ]
      },
      {
        heading: "Yediden yetmişe aynı sabırla çalışıyoruz",
        paragraphs: [
          "Ağırlıklı olarak çocuklarla çalışsak da yediden yetmişe her yaştan insanla rahatlıkla ders yapabiliyoruz. Çocukta oyunlaştırma öne çıkar; yetişkinde ise korkuyu azaltmak, dengeyi bulmak ve rüzgarı sakin anlatmak daha önemli hale gelir.",
          "Bazı yetişkin öğrenciler denize çocuklardan daha çekingen yaklaşabilir. Bu durumda aynı güvenli koy, aynı kum zemin ve aynı sabırlı anlatım yetişkinler için de çok işe yarar.",
          "Bizim yaklaşımımız yaşa göre değişir ama temel aynı kalır: öğrenciyi zorlamadan, güven vererek, rüzgarı hissettirerek ve denizde keyif almasını sağlayarak öğretmek."
        ]
      },
      {
        heading: "Çocuk ekipmanı doğru seçilmezse ders zorlaşır",
        paragraphs: [
          "Çocuk rüzgar sörfü dersinde ekipman seçimi dersin kalitesini doğrudan etkiler. Çocuğun kaldıramadığı bir yelkenle başlamak hem yorucu olur hem de çocuğun özgüvenini düşürür.",
          "Bu yüzden çocukların rahatlıkla kaldırabileceği hafif yelkenler, dengeli boardlar ve yaşa uygun ekipmanlarla çalışırız. Çocuk ilk dakikalarda yelkeni kendi kaldırabildiğini görünce derse bakışı değişir.",
          "Aileler için de bu çok önemlidir. Çocuğun zorlanmadığını, kontrollü alanda çalıştığını ve ekipmanın çocuğa uygun olduğunu görmek aileye güven verir."
        ]
      },
      {
        heading: "Tekne dersi çocuk için özgürlük hissi verir",
        paragraphs: [
          "Temel denge, yelken kontrolü ve güvenli dönüş oturduktan sonra tekne destekli dersler başlar. Bu aşama çocuk için çok heyecan vericidir; çünkü artık kıyıya bağlı kalmadan, ip olmadan ve daha geniş bir alanda sörf yapmayı dener.",
          "Tekne yakında olduğu için çocuk yalnız kalmaz. Hoca yönlendirmeye devam eder, aile isterse tekneden izler ve çocuğun gelişimini yakından görür.",
          "Bu anlar çoğu çocuk için dersin en unutulmaz kısmıdır. İlk kez kendi başına ilerlediğini görmek, hem denize hem kendine güvenini büyütür."
        ]
      },
      {
        heading: "Akyarlar çocuklu aileler için neden doğru yer?",
        paragraphs: [
          "Akyarlar yalnızca rüzgar sörfü için değil, çocuklu ailelerin gün boyu rahat vakit geçirmesi için de uygun bir koydur. Sakin sahil yapısı, berrak deniz ve korunaklı su alanı ders öncesi ve sonrası zamanı kolaylaştırır.",
          "Çocuk dersteyken aile sahilden izleyebilir, tekne derslerinde sürece daha yakından dahil olabilir veya ders sonrası sahilde dinlenebilir.",
          "Bu bütünlük bizim için önemli. Çocuk rüzgar sörfü dersi yalnızca bir saatlik aktivite değil; ailenin birlikte güvenli, keyifli ve hatırlanacak bir deniz günü yaşamasıdır."
        ]
      }
    ]
  },
  {
    title: "Akyarlar'da Sabah Paddle, Öğleden Sonra Windsurf Neden Mantıklı?",
    slug: "akyarlarda-sabah-paddle-ogleden-sonra-windsurf",
    description:
      "Akyarlar'da sabah paddle, öğleden sonra Bodrum rüzgar sörfü dersi, çocuklar için güvenli kum zeminli koy ve tekne destekli windsurf eğitimleriyle günü nasıl planladığımızı okuyun.",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    author: "Akyarlar Windsurf hocaları",
    category: "Rüzgar ve planlama",
    tags: ["Akyarlar paddle", "Bodrum windsurf zamanı", "Akyarlar rüzgar"],
    keywords:
      "Akyarlar paddle, Bodrum windsurf zamanı, Akyarlar rüzgar, Bodrum paddle, Akyarlar SUP, Bodrum rüzgar sörfü saatleri, Akyarlar tekne dersi, sabah paddle öğleden sonra windsurf, çocuklar için güvenli koy, Bodrum su sporları planı",
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
          "Elbette her gün aynı olmaz; rüzgar tahminine ve koydaki gerçek koşula bakmak gerekir. Yine de yaz aylarında bu ritim, günü verimli planlamak için güçlü bir başlangıç noktasıdır.",
          "Biz dersleri yalnızca saat boşluğuna göre değil, öğrencinin yaşı, deneyimi, enerjisi ve o günkü rüzgara göre planlarız. Çocuk derslerinde sabahın sakinliği bazen ilk alışma için daha iyi olur; rüzgar sörfünde ise yelkenin anlamlı şekilde dolduğu saatleri seçmek gerekir."
        ]
      },
      {
        heading: "Sabah paddle için neden güzel?",
        paragraphs: [
          "Sabah saatlerinde deniz daha cam gibi olduğunda SUP ve paddle board daha keyifli olur. Yeni başlayanlar, çocuklar ve sakin deniz isteyen aileler için bu saatler daha rahat geçer.",
          "Paddle sırasında amaç rüzgarla mücadele etmek değil, koyu yavaşça hissetmektir. Kos manzarası, berrak su ve sessiz sahil bu deneyimi Akyarlar'da daha özel yapar.",
          "Çocuklar için sabah saatleri suya alışma, denge denemesi ve aileyle sakin bir başlangıç için de uygundur. Bazen windsurf dersinden önce kısa bir denge çalışması bile öğrencinin board üzerinde daha rahat hissetmesini sağlar."
        ]
      },
      {
        heading: "Öğleden sonra windsurf zamanı",
        paragraphs: [
          "Meltem kendini göstermeye başladığında rüzgar sörfü için daha anlamlı bir ortam oluşur. Öğrenci yelkenin dolduğunu, board'un ilerlediğini ve dönüşlerin neden çalıştığını daha iyi hisseder.",
          "Bu yüzden ders saatini sadece takvime göre değil, rüzgarın o günkü davranışına göre düşünürüz. Doğru saat seçimi bazen dersin kalitesini ekipmandan bile fazla etkiler.",
          "İlk derslerde bel hizasına gelen kum zeminli güvenli alanda çalışırız. Öğrenci dengeyi, yelkeni ve rüzgarı anladıktan sonra üçüncü dersten itibaren çoğu öğrencimizle açığa çıkmaya başlarız."
        ]
      },
      {
        heading: "Tekneyle açığa çıkınca güven başka bir seviyeye gelir",
        paragraphs: [
          "Üçüncü dersten sonra tekne destekli dersler öğrencinin özgüvenini çok artırır. Kıyıya bağlı kalmadan, ip olmadan ve daha geniş bir alanda sörf yapmayı öğrenmek öğrencinin gerçek ilerlemesini gösterir.",
          "Tekne yanımızda olduğu için öğrenci kendini yalnız hissetmez. Hoca yönlendirme yapar, gerektiğinde yaklaşır, öğrencinin dönüşlerini ve rota seçimini güvenle takip eder.",
          "Bu derslere öğrencinin yakını da katılabilir. Aileden biri teknede süreci izleyebilir, fotoğraf çekebilir ve öğrencinin gelişimini yakından görebilir. Özellikle çocuklarda bu destek hem aileyi rahatlatır hem öğrencinin motivasyonunu artırır."
        ]
      },
      {
        heading: "Günün planı öğrencinin yaşına ve enerjisine göre değişir",
        paragraphs: [
          "Yediden yetmişe her yaşla çalışabildiğimiz için tek bir ders kalıbımız yok. Küçük çocukta kısa ve oyunlu anlatım, genç öğrencide daha hareketli tekrarlar, yetişkinde ise daha sakin ve güven veren bir tempo kurarız.",
          "Akyarlar'ın güvenli koyu bu esnekliği mümkün kılar. Kum zeminli sığ alanda temel güveni kurar, rüzgar doğru olduğunda windsurf dersini ilerletir, sakin saatlerde paddle veya denge çalışmasıyla günü destekleriz.",
          "Bizim için iyi ders, öğrencinin yalnızca teknik öğrenmesi değil; denizi sevmesi, rüzgarı anlaması ve tekrar çıkmak istemesidir."
        ]
      },
      {
        heading: "Aileler için tek günlük pratik plan",
        paragraphs: [
          "Çocuklu bir aile için gün genellikle şöyle daha rahat ilerler: sabah sakin denizde kısa paddle veya denge çalışması, öğle saatlerinde dinlenme, rüzgarın anlamlı hale geldiği saatlerde windsurf dersi.",
          "Bu plan çocuğu yormadan denize alıştırır. Sabah paddle sırasında çocuk suyun üstünde dengeyi ve koyu tanır; öğleden sonra windsurf dersinde yelkenin dolmasını ve rüzgarla ilerlemeyi daha rahat kabul eder.",
          "Yetişkin öğrencilerde de benzer bir plan işe yarar. Sabah sakin deniz özgüven verir, öğleden sonra rüzgar sörfü gerçek ilerleme hissini getirir."
        ]
      },
      {
        heading: "Rüzgar tahmini tek başına yeterli değildir",
        paragraphs: [
          "Akyarlar rüzgar durumuna Windguru veya Windy üzerinden bakmak faydalıdır; ancak ders kararı yalnızca tahmin ekranına göre verilmez. Koydaki gerçek rüzgar, öğrencinin seviyesi, yaş ve o günkü deniz davranışı birlikte değerlendirilir.",
          "Başlangıç seviyesinde fazla sert rüzgar iyi ders anlamına gelmez. Çocuklarda ve ilk kez deneyen yetişkinlerde kontrollü, anlaşılır ve tekrar yapmaya izin veren rüzgar daha değerlidir.",
          "Bu yüzden Bodrum windsurf zamanı sorulduğunda tek bir saat söylemek yerine, o günkü koşula göre gerçekçi bir ders planı yapmayı tercih ederiz."
        ]
      },
      {
        heading: "Sakin koy, oyunlu eğitim ve tekne desteği bir araya gelince",
        paragraphs: [
          "Akyarlar'ın avantajı sadece rüzgar alması değildir. Kum zeminli güvenli su, çocukların kaldırabileceği ekipmanlar, oyunlaştırılmış teori ve tekne desteği bir araya geldiğinde öğrenme süreci çok daha keyifli olur.",
          "Öğrenci önce güvenli alanda dengeyi ve rüzgarı anlar, sonra doğru zamanda açığa çıkar. Aile de bu sürecin dışında kalmaz; özellikle tekne derslerinde öğrenciyi izleyerek ve fotoğraf çekerek deneyime dahil olabilir.",
          "Bu bütünlük Akyarlar Windsurf'ün ders yaklaşımını anlatır: acele etmeden, öğrencinin yaşına ve seviyesine göre, denizi sevdire sevdire öğretmek."
        ]
      }
    ]
  }
];

export const getNotePath = (note: Pick<TeacherNote, "slug">) => `${notesIndexPath}${note.slug}/`;

export const latestNotes = [...teacherNotes].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
