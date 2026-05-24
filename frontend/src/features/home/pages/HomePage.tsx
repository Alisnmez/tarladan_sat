import SiteNavbar from "../../layout/SiteNavbar";
import "../HomePage.css";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBE61S58jaLjQruXgsF2xVeHPc7JMMBVlEQDsbDFq3GCFwI5PEeWDXGD1LPmHWz_tLa8VJuH2DUDYTV1wFHzi8OJB5vv-81-71hXmTS2an-8pLMWog4bGuEfdNyXAVtweu6ZRDKGSRFCh-gksOpNO-agyDyKjOqGh5YpywGUa3QG5ORLdUZLN8teNZQ5V3HbZvpqhON-Erwfb0hLBMBcuZve3H-xE9fbA_3vrddnyKR_yD-_wuaJPRPGq9eN9tHeUFpaFCQmNXs15w";

type FeaturedProduct = {
  badge: string;
  title: string;
  producer: string;
  location: string;
  image: string;
};

const featuredProducts: FeaturedProduct[] = [
  {
    badge: "Organik",
    title: "Köy Yumurtası",
    producer: "Ahmet Amca'nın Çiftliği",
    location: "Çatalca, İstanbul",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDX0_lBaDT4Y2BiqqKZZgNWmMrJIJ5BiTZh85W1TcWtdLVSrTTzkamM2HTcw7sfTu1kV2yeSQsWzhcWECfW37rO5iwYE6x5Vy2NTITn2P8fySQR1aqbjfKSYOLIRxbsppPvmeAQVNRH9ZvZ7finbuSPm3OjEvxWHLngSqjHenrdTbY455_ucjEQvu7buDiHJqVK2RcrB2MlYcWJMfOwcHsbcBIXYgapNPIMZD9U9ur5-IoVG3Y_ik3MCu5Cb8srXr55qsz1BzIylBo",
  },
  {
    badge: "Yeni Hasat",
    title: "Taze Domates",
    producer: "Güneşli Bahçeler",
    location: "Torbalı, İzmir",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6XW7FlmrnXxJnnReUMSyMC9948SXoFbV5DOTyx5mfHmLQzBB0AOEkPvur_sR7kF4lNH8rfOIKHFP2ZtYNieknw8nNxQqcvRvUrK5lxh8nW8vLU3-iWrSnifMknkFNM0t-wsCSTf4PGYII2nMK9DXL5boDJjEiR4nCuwr1DSVudu3tyzQB7lURe_kGAf6MREQDXVNWrH7IXqEDEYE9qm8uo7x1_zQJe0gYSyPvZhnvCiVih37GPFu4d8ApouQuo71f8uo5C4uaZZI",
  },
  {
    badge: "Soğuk Sıkım",
    title: "Zeytinyağı",
    producer: "Ege Esintisi Kooperatifi",
    location: "Edremit, Balıkesir",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvu0g5T-ZvbxpLrAg_g3m4XVaJi2yCcI1W6X4ukYDgH5FCHysQOuXKn5WBY8ePmarfDYlMROjqV-ZZwjnIydqUnNsNmKxZ4GkAMvb0sCRoa3wWj3xDc0bWdl9ZjaEsPkRms4jOSFD0wpz_6hd2a54FRJ4b8J8Q2gUoAtYlpktkPxqwb_ebVtqS3PmIK7HvJmLtN9DfMICvbwWlYGAivngGIn0UeYjUDnaZ02n2h-FtwT9XsKjjpN0qyd2iYhAP9CmfGPkIa0KiegM",
  },
  {
    badge: "Tatlı",
    title: "Mandalina",
    producer: "Yeşil Vadi Çiftliği",
    location: "Bodrum, Muğla",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApGfdnW8SXFEDAWfYzdxQ7wGNumAREwKft0adTiUshkISSmHnDUiO_74MpJyQGZY9GIAegNfsAcRxZ7yhgym4qs9CGddCqid4gIpOITqP7mSiAPGGEZlaTAVVwCuuEfnmtVrdI4sJ19Q_0z-w0EVxMIoDK9KGTYxaAWHn0PbBd9piYaC-xhUT-JawyKyX1YzWJF8GVuLZa5Ukn_ZUI5nC_y5eKt3lkWwyMJ425knvEngzN6M2x-PZPfmdfh038klog8JjS1xfPjEg",
  },
];

function HomePage() {
  return (
    <div className="home">
      <SiteNavbar activePage="home" />

      <main className="home-main">
        <section className="home-hero">
          <div className="home-hero__media" aria-hidden="true">
            <img src={HERO_IMAGE} alt="" />
            <div className="home-hero__overlay" />
          </div>

          <div className="home-hero__content">
            <h1>Ürünü halden değil, doğrudan üreticiden keşfet.</h1>
            <p>
              Yakınındaki üreticileri bul, ürünleri incele, talep gönder ve anlaşma
              sürecini kolayca takip et.
            </p>

            <form className="home-search" onSubmit={(e) => e.preventDefault()}>
              <div className="home-search__field">
                <span className="material-symbols-outlined" aria-hidden="true">
                  search
                </span>
                <input placeholder="Ne aramıştınız? (Domates, Zeytinyağı...)" />
              </div>
              <div className="home-search__field">
                <span className="material-symbols-outlined" aria-hidden="true">
                  location_on
                </span>
                <input placeholder="Şehir veya ilçe seçin" />
              </div>
              <div className="home-search__field">
                <span className="material-symbols-outlined" aria-hidden="true">
                  store
                </span>
                <select defaultValue="all">
                  <option value="all">Tüm Satış Tipleri</option>
                  <option value="wholesale">Toptan</option>
                  <option value="retail">Perakende</option>
                </select>
              </div>
              <button className="home-search__submit" type="submit">
                Ara
              </button>
            </form>
          </div>
        </section>

        <section className="home-featured">
          <div className="home-featured__header">
            <div>
              <span>Sezonun En İyileri</span>
              <h2>Öne Çıkan Ürünler</h2>
            </div>
            <a className="home-featured__more" href="#/discover">
              Tümünü Gör
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="home-featured__grid">
            {featuredProducts.map((product) => (
              <article className="home-card" key={product.title}>
                <div className="home-card__image">
                  <img src={product.image} alt={product.title} loading="lazy" />
                  <span className="home-card__badge">{product.badge}</span>
                </div>
                <div className="home-card__body">
                  <h3>{product.title}</h3>
                  <div className="home-card__meta">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      person
                    </span>
                    <span>{product.producer}</span>
                  </div>
                  <div className="home-card__meta">
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

        <footer className="home-footer">
          <div className="home-footer__inner">
            <div>
              <div className="home-footer__brand">Tarladan Sat</div>
              <p>Yerel üretimin gücünü dijital dünyanın imkanlarıyla birleştiriyoruz.</p>
            </div>
            <div className="home-footer__links">
              <a href="#/how-it-works">Hakkımızda</a>
              <a href="#/how-it-works">Güven ve Doğrulama</a>
              <a href="#/how-it-works">Blog</a>
              <a href="#/how-it-works">İletişim</a>
            </div>
          </div>
          <div className="home-footer__bottom">
            <span>© 2024 Tarladan Sat. Yerel Üretimin Gücü.</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default HomePage;
