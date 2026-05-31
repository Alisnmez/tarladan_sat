import { ROUTES } from "../../../app/routes";
import { InputShell, SiteFooter } from "../../../shared/ui";
import {
  GLOBAL_FOOTER_CLASS_NAME,
  globalFooterBottomText,
  globalFooterBrandDescription,
  globalFooterSections,
  globalFooterSocialLinks,
} from "../../../shared/ui/site-footer/globalFooter";
import "../HomePage.css";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBE61S58jaLjQruXgsF2xVeHPc7JMMBVlEQDsbDFq3GCFwI5PEeWDXGD1LPmHWz_tLa8VJuH2DUDYTV1wFHzi8OJB5vv-81-71hXmTS2an-8pLMWog4bGuEfdNyXAVtweu6ZRDKGSRFCh-gksOpNO-agyDyKjOqGh5YpywGUa3QG5ORLdUZLN8teNZQ5V3HbZvpqhON-Erwfb0hLBMBcuZve3H-xE9fbA_3vrddnyKR_yD-_wuaJPRPGq9eN9tHeUFpaFCQmNXs15w";

type BadgeVariant = "primary" | "secondary";

type FeaturedProduct = {
  badge: string;
  badgeVariant: BadgeVariant;
  title: string;
  producer: string;
  location: string;
  image: string;
};

const featuredProducts: FeaturedProduct[] = [
  {
    badge: "Organik",
    badgeVariant: "primary",
    title: "Köy Yumurtası",
    producer: "Ahmet Amca'nın Çiftliği",
    location: "Çatalca, İstanbul",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDX0_lBaDT4Y2BiqqKZZgNWmMrJIJ5BiTZh85W1TcWtdLVSrTTzkamM2HTcw7sfTu1kV2yeSQsWzhcWECfW37rO5iwYE6x5Vy2NTITn2P8fySQR1aqbjfKSYOLIRxbsppPvmeAQVNRH9ZvZ7finbuSPm3OjEvxWHLngSqjHenrdTbY455_ucjEQvu7buDiHJqVK2RcrB2MlYcWJMfOwcHsbcBIXYgapNPIMZD9U9ur5-IoVG3Y_ik3MCu5Cb8srXr55qsz1BzIylBo",
  },
  {
    badge: "Yeni Hasat",
    badgeVariant: "secondary",
    title: "Taze Domates",
    producer: "Güneşli Bahçeler",
    location: "Torbalı, İzmir",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6XW7FlmrnXxJnnReUMSyMC9948SXoFbV5DOTyx5mfHmLQzBB0AOEkPvur_sR7kF4lNH8rfOIKHFP2ZtYNieknw8nNxQqcvRvUrK5lxh8nW8vLU3-iWrSnifMknkFNM0t-wsCSTf4PGYII2nMK9DXL5boDJjEiR4nCuwr1DSVudu3tyzQB7lURe_kGAf6MREQDXVNWrH7IXqEDEYE9qm8uo7x1_zQJe0gYSyPvZhnvCiVih37GPFu4d8ApouQuo71f8uo5C4uaZZI",
  },
  {
    badge: "Soğuk Sıkım",
    badgeVariant: "primary",
    title: "Zeytinyağı",
    producer: "Ege Esintisi Kooperatifi",
    location: "Edremit, Balıkesir",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvu0g5T-ZvbxpLrAg_g3m4XVaJi2yCcI1W6X4ukYDgH5FCHysQOuXKn5WBY8ePmarfDYlMROjqV-ZZwjnIydqUnNsNmKxZ4GkAMvb0sCRoa3wWj3xDc0bWdl9ZjaEsPkRms4jOSFD0wpz_6hd2a54FRJ4b8J8Q2gUoAtYlpktkPxqwb_ebVtqS3PmIK7HvJmLtN9DfMICvbwWlYGAivngGIn0UeYjUDnaZ02n2h-FtwT9XsKjjpN0qyd2iYhAP9CmfGPkIa0KiegM",
  },
  {
    badge: "Tatlı",
    badgeVariant: "secondary",
    title: "Mandalina",
    producer: "Yeşil Vadi Çiftliği",
    location: "Bodrum, Muğla",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApGfdnW8SXFEDAWfYzdxQ7wGNumAREwKft0adTiUshkISSmHnDUiO_74MpJyQGZY9GIAegNfsAcRxZ7yhgym4qs9CGddCqid4gIpOITqP7mSiAPGGEZlaTAVVwCuuEfnmtVrdI4sJ19Q_0z-w0EVxMIoDK9KGTYxaAWHn0PbBd9piYaC-xhUT-JawyKyX1YzWJF8GVuLZa5Ukn_ZUI5nC_y5eKt3lkWwyMJ425knvEngzN6M2x-PZPfmdfh038klog8JjS1xfPjEg",
  },
];

const steps = [
  {
    icon: "search",
    title: "1. Keşfet",
    description:
      "Konumunuza en yakın üreticileri ve taze ürünlerini listelerden kolayca bulun.",
  },
  {
    icon: "forward_to_inbox",
    title: "2. Talep Gönder",
    description:
      "İstediğiniz miktarı belirtin ve üreticiye doğrudan satın alma talebi iletin.",
  },
  {
    icon: "handshake",
    title: "3. Anlaşmayı Tamamla",
    description:
      "Üretici ile detayları netleştirin, güvenli takip sistemi ile süreci yönetin.",
  },
];

const buyerBenefits = [
  {
    icon: "verified",
    title: "Doğrudan Temas",
    description: "Aracıları devreden çıkararak taze ürüne gerçek fiyatıyla ulaşın.",
  },
  {
    icon: "distance",
    title: "Yerel Güç",
    description:
      "Kendi bölgenizdeki üreticileri destekleyerek karbon ayak izinizi azaltın.",
  },
  {
    icon: "inventory_2",
    title: "Toptan & Perakende",
    description: "İster bir sepet, ister bir kamyon; ihtiyacınız kadarını talep edin.",
  },
];

const producerBenefits = [
  {
    icon: "trending_up",
    title: "Pazar Genişliği",
    description: "Ürünlerinizi sadece yerel pazara değil, tüm Türkiye'ye sergileyin.",
  },
  {
    icon: "chat",
    title: "Kolay İletişim",
    description: "Talepleri panel üzerinden yönetin, müşterilerinizle doğrudan anlaşın.",
  },
  {
    icon: "assignment_turned_in",
    title: "Ücretsiz İlan",
    description: "Karmaşık süreçlerle uğraşmadan dakikalar içinde ürünlerinizi ekleyin.",
  },
];

const trustStats = [
  { value: "10k+", label: "Doğrulanmış Üretici" },
  { value: "50k+", label: "Başarılı İşlem" },
  { value: "4", label: "Şehirde Hizmet" },
  { value: "%98", label: "Memnuniyet" },
];

function HomePage() {
  return (
    <div className="home ui-page-shell">
      <main className="home-main">
        <section className="home-hero">
          <div className="home-hero__media" aria-hidden="true">
            <img className="home-hero__image" src={HERO_IMAGE} alt="" />
            <div className="home-hero__overlay" />
          </div>

          <div className="home-hero__copy">
            <h1>Ürünü halden değil, doğrudan üreticiden keşfet.</h1>
            <p>
              Yakınındaki üreticileri bul, ürünleri incele, talep gönder ve anlaşma
              sürecini kolayca takip et.
            </p>
          </div>

          <form className="home-search" onSubmit={(e) => e.preventDefault()}>
            <InputShell className="home-search__field" icon="search">
              <input
                type="text"
                placeholder="Ne aramıştınız? (Domates, Zeytinyağı...)"
              />
            </InputShell>
            <InputShell className="home-search__field" icon="location_on">
              <input type="text" placeholder="Şehir veya ilçe seçin" />
            </InputShell>
            <InputShell className="home-search__field" icon="store">
              <select defaultValue="all">
                <option value="all">Tüm Satış Tipleri</option>
                <option value="wholesale">Toptan</option>
                <option value="retail">Perakende</option>
              </select>
            </InputShell>
            <button className="home-search__submit" type="submit">
              Ara
            </button>
          </form>
        </section>

        <section className="home-featured">
          <div className="home-featured__header">
            <div>
              <span className="home-featured__eyebrow">Sezonun En İyileri</span>
              <h2>Öne Çıkan Ürünler</h2>
            </div>
            <a className="home-featured__more" href={ROUTES.discover}>
              Tümünü Gör
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="home-featured__grid">
            {featuredProducts.map((product) => (
              <article className="home-card ui-card ui-card--interactive" key={product.title}>
                <div className="home-card__image">
                  <img src={product.image} alt={product.title} loading="lazy" />
                  <span
                    className={`home-card__badge home-card__badge--${product.badgeVariant}`}
                  >
                    {product.badge}
                  </span>
                </div>
                <div className="home-card__body">
                  <h3>{product.title}</h3>
                  <div className="home-card__meta">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      person
                    </span>
                    <span>{product.producer}</span>
                  </div>
                  <div className="home-card__meta home-card__meta--location">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      location_on
                    </span>
                    <span>{product.location}</span>
                  </div>
                  <button className="home-card__cta" type="button">
                    Talep Gönder
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-steps">
          <div className="home-steps__inner">
            <h2>Sadece 3 Adımda Tarladan Kapınıza</h2>
            <div className="home-steps__grid">
              <div className="home-steps__connector" aria-hidden="true" />
              {steps.map((step) => (
                <div className="home-steps__item" key={step.title}>
                  <div className="home-steps__icon">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      {step.icon}
                    </span>
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-benefits">
          <div className="home-benefits__grid">
            <div className="home-benefits__panel home-benefits__panel--buyer">
              <h3>
                <span className="material-symbols-outlined" aria-hidden="true">
                  shopping_bag
                </span>
                Alıcılar İçin
              </h3>
              <ul>
                {buyerBenefits.map((item) => (
                  <li key={item.title}>
                    <div className="home-benefits__icon home-benefits__icon--buyer">
                      <span className="material-symbols-outlined" aria-hidden="true">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="home-benefits__panel home-benefits__panel--producer">
              <h3>
                <span className="material-symbols-outlined" aria-hidden="true">
                  agriculture
                </span>
                Üreticiler İçin
              </h3>
              <ul>
                {producerBenefits.map((item) => (
                  <li key={item.title}>
                    <div className="home-benefits__icon home-benefits__icon--producer">
                      <span className="material-symbols-outlined" aria-hidden="true">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="home-trust">
          <div className="home-trust__inner">
            <div className="home-trust__badge">
              <span
                className="material-symbols-outlined home-trust__badge-icon"
                aria-hidden="true"
              >
                verified_user
              </span>
              Güvenli Alışveriş Altyapısı
            </div>
            <h2>Doğrulanmış Üreticiler, Şeffaf Süreç</h2>
            <p>
              Tarladan Sat platformu üzerinde yer alan üreticiler, kimlik ve üretim yeri
              doğrulamasından geçer. Tüm talep ve anlaşma süreci sistem üzerinden kayıt
              altına alınarak hem alıcı hem satıcı korunur.
            </p>
            <div className="home-trust__stats">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <div className="home-trust__stat-value">{stat.value}</div>
                  <div className="home-trust__stat-label">{stat.label}</div>
                </div>
              ))}
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
    </div>
  );
}

export default HomePage;
