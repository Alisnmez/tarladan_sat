import "../PublicLandingPage.css";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_wRjj9lDMPmFYfw1oNRl92aKi208HZqaT08q3gi1-np7Q7OQQNvdxEGtiYS2_TITNoM_wQPlTWFHxDh9Kfz0HPeL6d280DCKsbU4emrHj98YFWMYPUxb3sDMdOH-5UiCpaRTRdg-5enA_RdkdIz4sjiYD17YeM5DX1oWizkDP_CiS90KAm7iatK4wx9mQmGPXJygepQg1BM3bZUHld_2oWKRD93XYyuQyUr4TXKoLI3k7unFUyF1f6KarzOI8OQKckVoHwmNttg0";

const CTA_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmfUqpVf8y8EugnbAfONFgSkB6u8bBxkZ7EYkaeDYzLYC66iJpD89NsfDen85mCvm3ki5ND80So4X7_4ZMrRz9so1Ung_J6RfFmuf-Rde0xL9qxlbh2q6r4M8c8tUXhApQ9NQqJaDXnkDTucGdKQ-z5YX3izj5okOHNglIPuapkQyxwiC-6vNAP98DKWUHVirXINCjYQ8CPncdBHQWrRX1NVRAkn807LNlvXQocS-Y3jKkid0KX6PwH9-Emh9hm8ETqPMuCep2iuk";

const buyerSteps = [
  {
    icon: "search",
    title: "Keşfet",
    description:
      "Kategorilere veya haritaya göz atarak size en yakın üreticileri ve mevsimlik ürünleri bulun.",
  },
  {
    icon: "send",
    title: "Talep Gönder",
    description:
      "İhtiyacınız olan ürün miktarını belirleyin ve doğrudan üreticiye talebinizi iletin.",
  },
  {
    icon: "local_shipping",
    title: "Anlaş ve Takip Et",
    description:
      "Fiyat ve teslimat detaylarında anlaşın, siparişinizin hazırlık sürecini anlık izleyin.",
  },
  {
    icon: "eco",
    title: "Taze Ürüne Kavuş",
    description:
      "Dalından yeni koparılmış ürünlerin tadını çıkarın ve yerel ekonomiye destek olun.",
  },
];

const producerSteps = [
  {
    icon: "add_business",
    title: "Ürünlerini Ekle",
    description:
      "Hasat zamanı yaklaşan ürünlerinizi fotoğrafları ve detaylarıyla sisteme yükleyin.",
  },
  {
    icon: "inventory",
    title: "Talepleri Yönet",
    description:
      "Müşterilerden gelen toplu veya perakende talepleri tek bir panelden kolayca görün.",
  },
  {
    icon: "point_of_sale",
    title: "Doğrudan Satış Yap",
    description:
      "Aracıları devreden çıkararak ürünlerinizi gerçek değerinde tüketicilerle buluşturun.",
  },
  {
    icon: "trending_up",
    title: "İşini Büyüt",
    description:
      "Düzenli müşteri kitlesi oluşturun ve üretim kapasitenizi pazar verilerine göre optimize edin.",
  },
];

const trustFeatures = [
  {
    icon: "verified_user",
    title: "Onaylı Üreticiler",
    description:
      "Sistemimizdeki tüm üreticiler, tarım sertifikaları ve saha ziyaretleri ile doğrulanmış gerçek çiftçilerdir.",
  },
  {
    icon: "workspace_premium",
    title: "Kalite Kontrol",
    description:
      'Ürünler, paketleme ve lojistik aşamasında "Tazelik Standartları" protokolümüze göre denetlenir.',
  },
  {
    icon: "shield",
    title: "Güvenli Ödeme",
    description:
      "Ürün elinize ulaşıp onay verene kadar ödemeniz Tarladan Sat güvencesinde bekletilir.",
  },
];

type ProcessStep = {
  icon: string;
  title: string;
  description: string;
};

function StepColumn({
  title,
  badge,
  variant,
  steps,
}: {
  title: string;
  badge: string;
  variant: "buyer" | "producer";
  steps: ProcessStep[];
}) {
  return (
    <div className="landing-process__column">
      <div className="landing-process__heading">
        <span className={`landing-process__badge landing-process__badge--${variant}`}>
          {badge}
        </span>
        <h2>{title}</h2>
      </div>

      <div className="landing-process__steps">
        {steps.map((step) => (
          <div className="landing-process__step" key={step.title}>
            <div className={`landing-process__icon landing-process__icon--${variant}`}>
              <span className="material-symbols-outlined">{step.icon}</span>
            </div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PublicLandingPage() {
  return (
    <div className="landing-page">
      <main className="landing-page__main">
        <section className="landing-hero">
          <div className="landing-hero__media">
            <img src={HERO_IMAGE} alt="Güneş ışığında verimli tarla" />
            <div className="landing-hero__overlay" />
          </div>

          <div className="landing-hero__content">
            <h1>Tarladan Sofraya En Kısa Yol</h1>
            <p>
              Yerel üreticilerle doğrudan bağ kurun. Anadolu&apos;nun en taze, doğal
              ve güvenilir ürünlerini aracısız keşfedin, toprağın bereketini
              destekleyin.
            </p>

            <div className="landing-hero__actions">
              <a className="landing-hero__cta landing-hero__cta--primary" href="/urun-kesfet">
                Hemen Alışverişe Başla
              </a>
              <a className="landing-hero__cta landing-hero__cta--ghost" href="/kayit-ol">
                Üretici Olarak Katıl
              </a>
            </div>
          </div>
        </section>

        <section className="landing-process">
          <div className="landing-process__inner">
            <StepColumn
              title="Nasıl Alırım?"
              badge="Tüketiciler İçin"
              variant="buyer"
              steps={buyerSteps}
            />

            <div className="landing-process__divider" aria-hidden="true" />

            <StepColumn
              title="Nasıl Satarım?"
              badge="Üreticiler İçin"
              variant="producer"
              steps={producerSteps}
            />
          </div>
        </section>

        <section className="landing-trust">
          <div className="landing-trust__inner">
            <div className="landing-trust__intro">
              <h2>Güven ve Doğrulama</h2>
              <p>
                Tarladan Sat olarak, her aşamada kalite ve şeffaflığı garanti altına
                alan bir denetim mekanizması işletiyoruz.
              </p>
            </div>

            <div className="landing-trust__grid">
              {trustFeatures.map((feature) => (
                <article className="landing-trust__card" key={feature.title}>
                  <span className="material-symbols-outlined landing-trust__card-icon">
                    {feature.icon}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-cta">
          <div className="landing-cta__banner">
            <div className="landing-cta__copy">
              <h2>Yerel Üretimin Gücüne Katılın</h2>
              <p>
                İster taze ürün arayan bir aile olun, ister emeğini değerlendirmek
                isteyen bir üretici. Hemen bugün topluluğumuza dahil olun.
              </p>

              <div className="landing-cta__actions">
                <a className="landing-cta__button landing-cta__button--primary" href="/kayit-ol">
                  Alıcı Olarak Kaydol
                </a>
                <a className="landing-cta__button landing-cta__button--outline" href="/kayit-ol">
                  Üretici Başvurusu Yap
                </a>
              </div>
            </div>

            <div className="landing-cta__image">
              <img src={CTA_IMAGE} alt="Hasat sepeti taşıyan üretici" />
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-footer__inner">
          <div className="landing-footer__brand">
            <div className="landing-footer__logo">Tarladan Sat</div>
            <p>© 2024 Tarladan Sat. Anadolu&apos;nun bereketi, sofranızın lezzeti.</p>
          </div>

          <div className="landing-footer__links">
            <a href="/nasil-calisir">Hakkımızda</a>
            <a href="/nasil-calisir">Sürdürülebilirlik</a>
            <a href="/kayit-ol">Üretici Ol</a>
            <a href="/nasil-calisir">İletişim</a>
            <a href="/nasil-calisir">Kullanım Koşulları</a>
          </div>
        </div>
      </footer>

      <nav className="landing-mobile-nav" aria-label="Mobil menü">
        <a href="/urun-kesfet">
          <span className="material-symbols-outlined">search</span>
          <span>Keşfet</span>
        </a>
        <a href="/urun-kesfet">
          <span className="material-symbols-outlined">agriculture</span>
          <span>Üreticiler</span>
        </a>
        <a href="/nasil-calisir">
          <span className="material-symbols-outlined">help</span>
          <span>Nasıldır?</span>
        </a>
        <a href="/giris-yap">
          <span className="material-symbols-outlined">login</span>
          <span>Giriş</span>
        </a>
      </nav>
    </div>
  );
}

export default PublicLandingPage;
