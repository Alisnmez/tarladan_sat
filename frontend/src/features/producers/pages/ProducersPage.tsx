import { ROUTES } from "../../../app/routes";
import { InputShell, SiteFooter } from "../../../shared/ui";
import {
  GLOBAL_FOOTER_CLASS_NAME,
  globalFooterBottomText,
  globalFooterBrandDescription,
  globalFooterSections,
  globalFooterSocialLinks,
} from "../../../shared/ui/site-footer/globalFooter";
import "../ProducersPage.css";

type Producer = {
  title: string;
  location: string;
  rating: string;
  description: string;
  tags: string[];
  image: string;
};

const producers: Producer[] = [
  {
    title: "Yılmaz Organik Çiftliği",
    location: "Seferihisar, İzmir",
    rating: "4.9",
    description:
      "3 kuşaktır devam eden aile geleneğimizle, ilaçsız ve tamamen doğal yöntemlerle Ege'nin en taze sebzelerini yetiştiriyoruz.",
    tags: ["Domates", "Zeytinyağı", "+4 Ürün"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0OhlPNbIYwvJWn3kwk2hYCxKY9unlpYN8gcPvkDbk1Dp71rtJ_qZ_5IMqTkZXN7OP2nlHLFulN_f-sD6M-72-DdDlujxs8IuYekfgIOG4pMMMMqB4Okj6J9ecer2lO80gEN96TfikIMvG4nIAWyc3D73ZK8eXBZ3-kfK87u9t-nw05ApQj0YBDoAG7tm7E_GRfGDdsh0YnrybsyvXCfqjGvVXHt2MguQdIbU38cJgNTndIzZKrjYB8ahhvdm5MAXxWOaj_Dr-RJE",
  },
  {
    title: "Güneşli Mandıra",
    location: "Ezine, Çanakkale",
    rating: "4.8",
    description:
      "Kaz Dağları'nın eteklerinde, serbest gezen hayvanlarımızdan elde ettiğimiz sütlerle geleneksel Ezine peyniri üretiyoruz.",
    tags: ["Peynir", "Tereyağı", "Yoğurt"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmqZWYFHFrOmnhxBxTx8clxkaBgLy2q28IKbvQMsehRvPrZLVFZMInMeSC6qb765bEu6Cz9ikQKaKd4CVWwNYLUdnJXbl7ivl4buISx3mRvxW9_iDQMCOkfmQnecY4fOQKw6PkqyDrHxnQqtDdnFHlZIP0eIVX9Yj1mixu3K430gI5MyckB44XzCx-FQycttKe-YyqCdO9J9Ufbi8g0erARSfyudPwC5ryOOVAeZmvoIfG16kZACKmkB4UR93dy7ExhPvcRym-dYI",
  },
  {
    title: "Arı Dostu Bahçeler",
    location: "Muğla, Marmaris",
    rating: "5.0",
    description:
      "Arı popülasyonunu koruyarak gerçekleştirdiğimiz arıcılık faaliyetlerimizde, dünyanın en saf çam ballarını üretiyoruz.",
    tags: ["Çam Balı", "Polen", "Propolis"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbbyVVx3Vj5AWyhgy22sJawZ3Y6octhCgYb7E5d2FQ-2xj4wJ7vuJXOxCjOjsoWJCKmdEhOi5hR3RHbN_gMDD2zNCw2izjOW8gX3WlVVejAcRzzL0Ubz_oqauxGVuQCIDiVS7yMASwip1vHeAuV2kWTGW_MVAtB5pdKJ-33lHS2SAXvxdtZBDCqTkq-6Y4zuOEeXdnnlPOMzT0GfFLzUsFK_-rOnGIYREMMQ6l_WlgvLJTq7jiuGoHVydjOewDTBkfOy2CpfZFDXM",
  },
];

function ProducersPage() {
  return (
    <div className="producers-shell ui-page-shell">
      <main className="producers-content ui-page-main">
        <section className="producers-heading ui-page-header">
          <div className="producers-heading__copy">
            <span className="producers-heading__eyebrow">Topluluğumuz</span>
            <h1>Yerel Üreticilerimiz</h1>
            <p>
              Toprağa değer katan, emeğiyle sofralarımızı zenginleştiren yerel
              çiftçilerimizle doğrudan bağ kurun. Her bir üreticimiz sürdürülebilir
              tarım ilkeleriyle özenle seçilmiştir.
            </p>
          </div>
        </section>

        <section className="producers-toolbar">
          <div className="producers-toolbar__filters">
            <div className="producers-toolbar__select">
              <select defaultValue="all-regions">
                <option value="all-regions">Tüm Bölgeler</option>
                <option>Ege</option>
                <option>Marmara</option>
                <option>Akdeniz</option>
                <option>İç Anadolu</option>
              </select>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>

            <div className="producers-toolbar__select">
              <select defaultValue="all-categories">
                <option value="all-categories">Tüm Kategoriler</option>
                <option>Sebze</option>
                <option>Meyve</option>
                <option>Süt Ürünleri</option>
                <option>Arıcılık</option>
              </select>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>

            <button type="button" className="producers-toolbar__more">
              <span className="material-symbols-outlined">filter_list</span>
              Daha Fazla Filtre
            </button>
          </div>

          <label className="producers-toolbar__search">
            <InputShell icon="search">
              <input
                type="text"
                placeholder="Üretici veya çiftlik adı ile ara..."
              />
            </InputShell>
          </label>
        </section>

        <section className="producers-grid">
          {producers.map((producer) => (
            <article className="producer-card ui-card ui-card--interactive" key={producer.title}>
              <a href={ROUTES.producerDetail} className="producer-card__link">
                <div className="producer-card__media">
                  <img src={producer.image} alt={producer.title} loading="lazy" />
                  <span className="producer-card__badge">
                    <span className="material-symbols-outlined">verified</span>
                    Doğrulanmış
                  </span>
                </div>

                <div className="producer-card__body">
                  <div className="producer-card__header">
                    <div>
                      <h2>{producer.title}</h2>
                      <div className="producer-card__location">
                        <span className="material-symbols-outlined">location_on</span>
                        <span>{producer.location}</span>
                      </div>
                    </div>

                    <div className="producer-card__rating">
                      <span className="material-symbols-outlined">star</span>
                      <span>{producer.rating}</span>
                    </div>
                  </div>

                  <p className="producer-card__description">{producer.description}</p>

                  <div className="producer-card__tags">
                    {producer.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <span className="producer-card__button">Profili Gör</span>
                </div>
              </a>
            </article>
          ))}
        </section>

        <section className="producers-pagination" aria-label="Sayfalama">
          <button type="button" className="producers-pagination__arrow">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <div className="producers-pagination__pages">
            <span className="producers-pagination__page producers-pagination__page--active">
              1
            </span>
            <span className="producers-pagination__page">2</span>
            <span className="producers-pagination__page">3</span>
            <span className="producers-pagination__page producers-pagination__page--dots">
              ...
            </span>
            <span className="producers-pagination__page">12</span>
          </div>

          <button type="button" className="producers-pagination__arrow">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
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

export default ProducersPage;
