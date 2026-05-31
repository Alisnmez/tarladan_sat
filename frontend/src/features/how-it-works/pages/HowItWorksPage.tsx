import { ROUTES } from "../../../app/routes";
import { MobileBottomNav, SiteFooter } from "../../../shared/ui";
import {
  GLOBAL_FOOTER_CLASS_NAME,
  globalFooterBottomText,
  globalFooterBrandDescription,
  globalFooterSections,
  globalFooterSocialLinks,
} from "../../../shared/ui/site-footer/globalFooter";
import "../HowItWorksPage.css";

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

function ProcessStepList({
  steps,
  variant,
}: {
  steps: ProcessStep[];
  variant: "buyer" | "producer";
}) {
  return (
    <div className="how-process__steps">
      {steps.map((step) => (
        <div className="how-process__step" key={step.title}>
          <div
            className={`how-process__step-icon how-process__step-icon--${variant}`}
          >
            <span className="material-symbols-outlined">{step.icon}</span>
          </div>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function HowItWorksPage() {
  return (
    <div className="how-it-works">
      <main className="how-main how-main--with-site-nav">
        <section className="how-hero">
          <div className="how-hero__media">
            <img src={HERO_IMAGE} alt="Gün doğumunda Türk tarlası manzarası" />
            <div className="how-hero__gradient" />
          </div>
          <div className="how-hero__content">
            <h1>Tarladan Sofraya Güvenli Yolculuk</h1>
            <p>
              Yerel üreticilerle tüketicileri aracısız buluşturuyor, Anadolu&apos;nun
              en taze ürünlerini kapınıza kadar getiriyoruz.
            </p>
          </div>
        </section>

        <section className="how-process">
          <div className="how-process__inner">
            <div className="how-process__column">
              <div className="how-process__heading">
                <span className="how-process__badge how-process__badge--buyer">
                  Tüketiciler İçin
                </span>
                <h2>Nasıl Alırım?</h2>
              </div>
              <ProcessStepList steps={buyerSteps} variant="buyer" />
            </div>

            <div className="how-process__divider" aria-hidden="true" />

            <div className="how-process__column">
              <div className="how-process__heading">
                <span className="how-process__badge how-process__badge--producer">
                  Üreticiler İçin
                </span>
                <h2 className="how-process__title--secondary">Nasıl Satarım?</h2>
              </div>
              <ProcessStepList steps={producerSteps} variant="producer" />
            </div>
          </div>
        </section>

        <section className="how-trust">
          <div className="how-trust__inner">
            <div className="how-trust__intro">
              <h2>Güven ve Doğrulama</h2>
              <p>
                Tarladan Sat olarak, her aşamada kalite ve şeffaflığı garanti altına
                alan bir denetim mekanizması işletiyoruz.
              </p>
            </div>
            <div className="how-trust__grid">
              {trustFeatures.map((feature) => (
                <article className="how-trust__card" key={feature.title}>
                  <span className="material-symbols-outlined how-trust__card-icon">
                    {feature.icon}
                  </span>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="how-cta">
          <div className="how-cta__inner">
            <div className="how-cta__banner">
              <div className="how-cta__copy">
                <h2>Yerel Üretimin Gücüne Katılın</h2>
                <p>
                  İster taze ürün arayan bir aile olun, ister emeğini değerlendirmek
                  isteyen bir üretici. Bugün başlayın.
                </p>
                <div className="how-cta__actions">
                  <a className="how-cta__btn how-cta__btn--primary" href="/kayit-ol">
                    Alıcı Olarak Kaydol
                  </a>
                  <a
                    className="how-cta__btn how-cta__btn--outline"
                    href="/kayit-ol"
                  >
                    Üretici Başvurusu Yap
                  </a>
                </div>
              </div>
              <div className="how-cta__image">
                <img
                  src={CTA_IMAGE}
                  alt="Hasat sepeti tutan yerel üretici"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        className={GLOBAL_FOOTER_CLASS_NAME}
        brandDescription={globalFooterBrandDescription}
        socialLinks={globalFooterSocialLinks}
        sections={globalFooterSections}
        bottomText={globalFooterBottomText}
      />

      <MobileBottomNav
        items={[
          { href: ROUTES.discover, icon: "search", label: "Keşfet" },
          { href: ROUTES.producers, icon: "agriculture", label: "Üreticiler" },
          { href: ROUTES.howItWorks, icon: "help", label: "Nasıldır?", active: true },
          { href: ROUTES.home, icon: "person", label: "Profil" },
        ]}
      />
    </div>
  );
}

export default HowItWorksPage;
