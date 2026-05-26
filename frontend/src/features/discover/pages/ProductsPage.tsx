import { ROUTES } from "../../../app/routes";
import "../ProductsPage.css";

type Product = {
  title: string;
  price: string;
  location: string;
  producer: string;
  badge?: string;
  badgeVariant?: "primary" | "secondary" | "accent";
  image: string;
  avatar: string;
};

const products: Product[] = [
  {
    title: "Agria Patates",
    price: "₺18/kg",
    location: "Afyonkarahisar",
    producer: "Mehmet Demir",
    badge: "Yeni Hasat",
    badgeVariant: "primary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2MQ7bNHx8Resw7HOoB3ovdw8HVspelXKv24n2g8ugcuy7sejTAnMWtc01QvbBRGfebNFnDe7WP29xhRWyRcPyqWDMfUdAUJUdY5WmCg8mxqKF_JT0WIryhynGAHntd_Mvc_cZl6jQIMXtcyM6OdEZ2gLYNUtGmry93BUM84F5-vHZgSpKhw9npDHjfbuzrNHkX0KE1MSoRQ232nXIzIXiFi4kd3rlXIy0U0CZlmYuuNe_7sGbcnjEUrSBImK95Ts56j8onDyjjiw",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAoxWrBxs7COz5RtLZbGcdFiChbDeJcr7Mra2pUZDw-EXykCuyCFIh2OnKfhntrTNdpYee34KLFkICe3poteijQfdIiE62kRQf8HTAWwwV7FFfsdHuBvsTVfgoZbxuo7RSf6tCjuqbAT-5ImWz05QGDYFz3iFkGKLovO-slm0tU7KCh8M_7eJ4-3zVefqyuj29iVVbh2aN7CNOwQkCts_5NxijmcjcykDI8p9ltH53NxUwUYqtuaBBZU0Rev3D_VO6kOZeqNFzKJI",
  },
  {
    title: "Çiğ İnek Sütü",
    price: "₺25/lt",
    location: "Kırklareli",
    producer: "Ayşe Yılmaz",
    badge: "Günlük",
    badgeVariant: "secondary",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxctFJPqCojy8zcQfrAAjERvUmbKG1L-6Rnqsr-sJg6E1ft-qfE1DHA2sriwmovFNjgJyzATO4-ApSNcNUBNA0Ev3schEHUwp-qd4AFOGwfPlYV7-J4bhzokxYM7fwhehc4sjjGlS_i177f2mfoFOe6ROp-pmnUBraYs9VjKg8jf3dfO5gEEYCd8Yv3qS1NUsuWT_P-gXpLpNM2aorjCbSyB_Y3zSMukwOrta6vryxieVMpqJ7BLe0npHP3yH_AFuAr5g2UL7dcho",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcerDzI2i0v7oAkB8WKUYpfmU6LGXsJHPMmNg_uNCgW_ODPcWVPO7U60W1ZKMGjEi1tm6FgBE1Y8H1OEX9Nvauf4_NoGahgPS1P6FsflijQpWsoDn3jOR82QufgGJ8a4BOSga_DuBuYIpIWDmeQuD53_Za6kQzLgK4jQTrs75Q5BYd6zdAAMwmFXnkFH4odhyuMfyfbUj-Jev71QqvYbYkq6IZ_RmPazooWRFVkGU5SRVElODuSt8-sWEa6OWnfkCc25sdmOsA1pU",
  },
  {
    title: "Köy Biberi",
    price: "₺45/kg",
    location: "Antalya",
    producer: "Caner Yıldız",
    badge: "Organik",
    badgeVariant: "accent",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCC4lXz8yo8G9_yhNM2TXKuziPG7M5phcH_EUmZo1_S8lcSFkAgYfFvguOOJRHk1lfRBqTo9IdJ4_U-aQtcrIyKp_ysbeCYJ36jxz00ZRZjAVF22XS-OlPEELvGsljcgvephUWromwNO6Tjc0dG-GE5OBBDHkiImCYxXQt3Jl76FcKM0GRHCy8MPz5aVnc8SD1isIQgk82WNhMj8pDSREuk_9EHrIFs9RjjBvn0MwPNrCYYPlUn5h2PouQVj7dYFx0X7K2plJCoExc",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqSSJ8fY5kw0IkyI3Hm8KXACq6jqHi0ios7Y-jxx7D5mHUKc1QLU4F_gCXLKxb-U0IWsQ3sUx7gyW_XduoIuuBzc92sXGMwm2mUmrKZbIuEe2Ftm9AH1uPyg5xZqptM_g9gHxs3k2LfQn73Rtym8e70T6-9usTeTiGgH8Cf_aXuQyk7wSaF-394IRqwajbcGknnakasWP6LKFztTewYYGeSNtYlJET98HwDp3CbVbg658wUOBffws7W-xZolrZ9JZWHxhjVFmCZYg",
  },
  {
    title: "Kırmızı Soğan",
    price: "₺12/kg",
    location: "Amasya",
    producer: "Fatma Ak",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACTNrG9Xk6GSJjQMK5WuxE-9wGBq2bCxgIj8iUB-XP5AMa5toVjhXJPxnmqgBxGGWi18RHIM4VvNHYNqK_wlXUc72n6YKjZbb-8MOlnYHxWa0zCJqNl_SGLtKalYyfgexUdA5Knks14yany1LeKgtsu3rWyp8waQtaFYQNqU6jFzd7t0XcNUb8rg-8yeTcADblt8qmwPm8APiOdORfjaIhyD3oSIcbG_PHfHYFnMqJulWHUfHm0YLcaLlhH8cZILtE2B32nolALW0",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDS2vVZlg8VmYOvN_I8zwdYjV73MHIw1-infC2xpoMAs6T04obROhavZAuTkJRB1yuFozwUeKRrx-BmjoaGYdmTcH3WeOB-RLb6RcXQU9neu4gnxzHSToOM7aVEVnhcqsKPSRbLcU53Z9JYxLpnEhVYkd2HIYznVrqvWTi9uROwQvA5mwCbuZiwb99hBZb7DMLjU4N45rsV93CbEV78iFDQk4r3vfXnxQilbPiEoCHA6Gn2ncciY8g59e5U0fHcTAAxsg8ErEwT-EM",
  },
];

function ProductsPage() {
  return (
    <div className="discover-shell ui-page-shell">
      <main className="discover-content ui-page-main">
        <section className="discover-heading ui-page-header">
          <h1>Şehrindeki Taze Ürünleri Keşfet</h1>
          <p>
            Doğrudan tarladan, aracı olmadan en taze yerel mahsullere ulaşın.
            Çiftçilerimizle tanışın ve sağlıklı beslenin.
          </p>
        </section>

        <div className="discover-layout">
          <aside className="discover-filters">
            <div className="discover-filters__panel ui-card">
              <section className="discover-filter-group">
                <h3>
                  <span className="material-symbols-outlined">category</span>
                  Kategori
                </h3>
                <label><input type="checkbox" defaultChecked />Sebze</label>
                <label><input type="checkbox" />Meyve</label>
                <label><input type="checkbox" />Süt ve Şarküteri</label>
                <label><input type="checkbox" />Bakliyat</label>
              </section>

              <section className="discover-filter-group">
                <h3>
                  <span className="material-symbols-outlined">location_on</span>
                  Şehir
                </h3>
                <select defaultValue="all">
                  <option value="all">Tüm Şehirler</option>
                  <option>İstanbul</option>
                  <option>İzmir</option>
                  <option>Ankara</option>
                  <option>Antalya</option>
                </select>
              </section>

              <section className="discover-filter-group">
                <h3>
                  <span className="material-symbols-outlined">sell</span>
                  Satış Tipi
                </h3>
                <div className="discover-filter-tags">
                  <button type="button" className="discover-filter-tags__item discover-filter-tags__item--active">
                    Perakende
                  </button>
                  <button type="button" className="discover-filter-tags__item">
                    Toptan
                  </button>
                </div>
              </section>

              <section className="discover-filter-group">
                <h3>
                  <span className="material-symbols-outlined">weight</span>
                  Miktar
                </h3>
                <input type="range" min="1" max="500" defaultValue="80" />
                <div className="discover-range-labels">
                  <span>1 kg</span>
                  <span>500+ kg</span>
                </div>
              </section>

              <button type="button" className="discover-clear-button">
                Filtreleri Temizle
              </button>
            </div>
          </aside>

          <section className="discover-products">
            <div className="discover-products__grid">
              {products.map((product) => (
                <article className="discover-product-card ui-card ui-card--interactive" key={`${product.title}-${product.producer}`}>
                  <a href={ROUTES.productDetail} className="discover-product-card__link">
                    <div className="discover-product-card__media">
                      <img src={product.image} alt={product.title} loading="lazy" />
                      {product.badge ? (
                        <div
                          className={`discover-product-card__badge discover-product-card__badge--${product.badgeVariant ?? "primary"}`}
                        >
                          {product.badge}
                        </div>
                      ) : null}
                    </div>

                    <div className="discover-product-card__body">
                      <div className="discover-product-card__title-row">
                        <h3>{product.title}</h3>
                        <span>{product.price}</span>
                      </div>

                      <div className="discover-product-card__location">
                        <span className="material-symbols-outlined">location_on</span>
                        <span>{product.location}</span>
                      </div>

                      <div className="discover-product-card__producer">
                        <div className="discover-product-card__producer-avatar">
                          <img src={product.avatar} alt={product.producer} loading="lazy" />
                        </div>
                        <div>
                          <strong>{product.producer}</strong>
                          <small>
                            <span className="material-symbols-outlined">verified</span>
                            Onaylı Üretici
                          </small>
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>

            <div className="discover-load-more">
              <button type="button">
                Daha Fazla Ürün Yükle
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="discover-footer ui-footer">
        <div className="discover-footer__grid ui-footer__container">
          <div className="discover-footer__brand">
            <div>Tarladan Sat</div>
            <p>
              Yerel üreticileri destekleyerek daha sağlıklı bir gelecek inşa
              ediyoruz. Topraktan sofranıza en kısa yol.
            </p>
          </div>

          <div>
            <h4>Kurumsal</h4>
            <a href={ROUTES.howItWorks}>Hakkımızda</a>
            <a href={ROUTES.howItWorks}>Güven ve Doğrulama</a>
            <a href={ROUTES.howItWorks}>Kullanım Koşulları</a>
          </div>

          <div>
            <h4>Topluluk</h4>
            <a href={ROUTES.register}>Üretici Ol</a>
            <a href={ROUTES.discover}>Başarı Hikayeleri</a>
            <a href={ROUTES.howItWorks}>Sıkça Sorulan Sorular</a>
          </div>

          <div>
            <h4>İletişim</h4>
            <a href={ROUTES.discover}>
              <span className="material-symbols-outlined">mail</span>
              destek@tarladansat.com
            </a>
            <a href={ROUTES.discover}>
              <span className="material-symbols-outlined">call</span>
              0850 123 45 67
            </a>
          </div>
        </div>

        <div className="discover-footer__bottom ui-footer__bottom">
          <span>© 2024 Tarladan Sat. Yerel Üretimin Gücü.</span>
          <div>
            <span className="material-symbols-outlined">language</span>
            <span className="material-symbols-outlined">share</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProductsPage;
