import { ROUTES } from "../../../app/routes";
import { SiteFooter } from "../../../shared/ui";
import "../ProductDetailPage.css";

const galleryImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD1BGZm9GQSLk1Km4Olg0H64plsw1oDM0eF8TdSf0yb6PWv-vCUXSX8Zlm1ESXsG7gclzMn8FK68UxI_exEOecmlBKjc9o3lz6RA_V4z74dZc_6vaePzghQR9wuVwL01QpU8sNp7EXHtGb1ahsovn5DJiRplHbQbh0phOIYIis6kro8njQFtyyqdAS24l_jUh4kRvgmQDWQ9Vzz7WWgsG6vNjLNhe1LTqHklcJwoCnCMd1lJZ3kbje_G6WEy8PAzASWnxLQZnD0GEE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlR7PhVRwJ66LOIDZeW9_exgGAdDnDRRb1_wkcE8Q1l_qb35Y04xN68DlFccU_sUCACjRihWT568GsYuewuUDd31tZR4T6-4jIwsmHLod2MhAXmrX4nb5aCPYQwXO0AwOkXqAwKGPBD2kpC1CfgWOR2baYJu9xQtm5Ja18VrwvQ5wpySM7KNEVDUh11h8qGsvLTN0xOSPQ0t_aaB78Fp4ppSMhlYHf5xVKZ7aL5b7BZxo_cZOH0GSGZWqxN1EaaGLQXemCTkv82j0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD4glN-I1tC3cXJCXI6JaO_Buv819pTLsWVtIBs412-HE88JV-1UkZTcYDXjYaD00Oxiuixvlv1Y0CFiQ4cXibAVrWFCAkwdAwvEtoBI_CacdWop5sgd7Ns6D8nsLNrymfjN5tmyFlGoz8SKB7dr1gqNwnqR1GOf-bNLX-Greeb_HRACU9gekcmksKM3RFHo_Vu-b9KDrhpEcGAzzOg8OmQHDVMBYOrtLAVIq7L3kGUigsP40iLfSgn6fDGaaEZDz3aoZG2I_46UTU",
];

const relatedProducts = [
  {
    title: "Koy Biberi",
    price: "₺35/kg",
    location: "Torbalı, İzmir",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYJxJ06ov4IJWB9lh0x6BXiSXWqsnAPlwFPRqNWa806Bo__AJJzYNlFir2fUQ7GniIjXvsotkJO7ZPUMDEl9q-hijaUOhR9R4s0iCuuQE0VrN4bE8UZ_LKtxmvWu2cL5ZcHBLC2hmuJQuomIjVMfIkFIu79dBG5_v9Sv95L3RV-JxH1rnJ68UdjFoX9GbAhjOsMqCG54HogqtMgUX9BcCpvy7uWqenp1RRlSKbwWdvOk6lMbKzzLc7kes82wZ_84ydHvlPrOLrA84",
  },
  {
    title: "Kıtır Havuç",
    price: "₺25/kg",
    location: "Menderes, İzmir",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-P32GkFhv84AcCy-wd1O-QAcaXlA9tAmFWEhaGEoGDGu9xivz14PtfWKGyDSOK7_Xq8T8sRxy-vNcApWbYB7_WaAgmWa1yjIJFwqZWgVPAH_WDFB2kUKxh00UI9urhYFNLBo2OiPxmm6J5sDaC0qv1vXGIIxFAEfpea7E7UQbff0vaeZpjEhXqF_DBIBx5Mz8YaN_yO_e41Z-JcTsjubmtZ4GDRvWmZUueitlrJKF-Cjw5byCzBcK-Lhj_gQVndFYJW_VXJWG3MQ",
  },
  {
    title: "Kırmızı Soğan",
    price: "₺18/kg",
    location: "Bergama, İzmir",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJdUd9hH3QfQl_u_E0_UsMid_oB5t_iyQH9cl3WkrAP2an6eZaMy0V1AHRHmV38arDecz-8AdWcF0AgJRgmWivYqyZkTC76eKqtXGUGktBrd7vSSa4Wm53ksaTBcD6fuGp8M6ceUxJtGh0khqPO0u8yy4-LNELzSOYb4C4E9Aq7MX4hcCKyvSfDqImMbabEvoaG0ozM7L8GfscIyHxAqa5YLzU_dC0OrG3uIEsTj28hg8OqJWS5IOTLZY_yvsUldUugh3wMRxywes",
  },
  {
    title: "Taze Kuşkonmaz",
    price: "₺40/demet",
    location: "Urla, İzmir",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQPDnLhAjAtG6P0Cja-ApKEdp5uxH1PPyfSYYGtdg1TpC01BlLiC3GqvRjgLPTjTPmrecrnECfKX-F1zr05_rZ8jr42bRyfdm4SVi2iiU89w65jtJCJYLemqRmTyHGvYgMDD7mjZchtYc62A3q1flpzFxqDIiF9xQBW1I0HrBpXbgP8uTKetmD9KLRVz1E9JICMj3tYkxemSbvv9s29PdKJhq_SebFjmnFnJMoYN4xWxHdZAXD-3yp8o4EH8nP7mvba3_NzrKtbXE",
  },
];

function ProductDetailPage() {
  return (
    <div className="product-detail-shell ui-page-shell">
      <main className="product-detail-main ui-page-main">
        <section className="product-detail-hero">
          <div className="product-detail-gallery">
            <div className="product-detail-gallery__main">
              <img src={galleryImages[0]} alt="Geleneksel salkım domates" />
            </div>

            <div className="product-detail-gallery__thumbs">
              {galleryImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={index === 0 ? "product-detail-gallery__thumb product-detail-gallery__thumb--active" : "product-detail-gallery__thumb"}
                >
                  <img src={image} alt={`Ürün görseli ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-detail-summary">
            <div className="product-detail-summary__badges">
              <span>Sezonun Ürünü</span>
              <span>Sınırlı Stok</span>
            </div>

            <div className="product-detail-summary__copy">
              <h1>Geleneksel Salkım Domates</h1>
              <p>
                Organik sertifikalı, dalından yeni toplanmış, yoğun aromalı ve
                ince kabuklu yerli tohum domatesler.
              </p>
            </div>

            <section className="product-detail-price-card ui-card">
              <div className="product-detail-price-card__top">
                <div>
                  <span>Birim Fiyat</span>
                  <strong>
                    ₺45.00 <small>/ kg</small>
                  </strong>
                </div>
                <div className="product-detail-price-card__stock">
                  <span>Stok Durumu</span>
                  <strong>120 kg Mevcut</strong>
                </div>
              </div>

              <div className="product-detail-price-card__meta">
                <div>
                  <span>Satış Tipi</span>
                  <p>
                    <span className="material-symbols-outlined">local_shipping</span>
                    Toptan & Perakende
                  </p>
                </div>
                <div>
                  <span>Hasat Tarihi</span>
                  <p>
                    <span className="material-symbols-outlined">calendar_today</span>
                    Bugün
                  </p>
                </div>
              </div>

              <div className="product-detail-producer-card">
                <div className="product-detail-producer-card__avatar">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDibA9d7YQjv0OclcSnmJKLU5kzS5ilr4y3Dd7sZyrMP-zwbXYUHWE-M3YNM88goNkpvT_H0BlYE25s3-ERhU9lv4wvSlHXX3HX6Vwp5ukBMjfzLoAbYg5MaCWMfxFJ3l6wxeJu0SFINuogwgLIv-zneHRhLwwCCYksp3gISY4IkYtzdNeurBz_8w9uPEtWhjoGolCzSicshqd2cmY-Cman-JD1A7DjHSa1Anvcl4IIJaJi4fgw6_8BHrGE0ki2f1ZOedV4jue6uAk"
                    alt="Mehmet Yılmaz Çiftliği"
                  />
                </div>

                <div className="product-detail-producer-card__info">
                  <div className="product-detail-producer-card__name">
                    <h3>Mehmet Yılmaz Çiftliği</h3>
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <p>
                    <span className="material-symbols-outlined">location_on</span>
                    Bayındır, İzmir
                  </p>
                </div>

                <a href={ROUTES.producerDetail} className="product-detail-producer-card__link">
                  Profili Gör
                </a>
              </div>
            </section>
          </div>
        </section>

        <section className="product-detail-content">
          <div className="product-detail-story">
            <div className="product-detail-story__copy">
              <h2>Ürün Detayları ve Hikayesi</h2>
              <p>
                İzmir&apos;in bereketli topraklarında, atalık tohumlar
                kullanılarak yetiştirilen domateslerimiz, hiçbir kimyasal gübre
                veya ilaç kullanılmadan tamamen doğal yöntemlerle sofranıza
                ulaşıyor. Güneşin altında tam olgunluğa ulaştığında elle hasat
                edilir.
              </p>
            </div>

            <ul className="product-detail-story__features">
              <li>
                <span className="material-symbols-outlined">spa</span>
                <span>100% Organik Üretim</span>
              </li>
              <li>
                <span className="material-symbols-outlined">eco</span>
                <span>Atalık Yerli Tohum</span>
              </li>
              <li>
                <span className="material-symbols-outlined">water_drop</span>
                <span>Kaynak Suyu ile Sulama</span>
              </li>
              <li>
                <span className="material-symbols-outlined">local_shipping</span>
                <span>24 Saatte Kapınızda</span>
              </li>
            </ul>

            <div className="product-detail-story__map">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuZisTby2D9BV6uWzoDUN2j6V_laArctyjup0v5HndNlt8Za_YsoxmeQRfUwGd4m9eAiIbbGMNjgK-3gNkYbdWjwgnWOQFpuIFG2YA2oycf6-SYALI3Qr9r88MQjUMoeB769t6xlhOtDfgzRQmwSEgqkDLsqkq3zaYw1WH-d-8uSgLVEzXXP-iqtFczN_FItjb9fJFCIeJAEqMojELUmfKogU7PkqiyrHxTjYfWeM-t7PnkSAP889McaBFVJMfP0nDoGxANpvmres"
                alt="Ürünün yetiştiği bölge"
              />
            </div>
          </div>

          <aside className="product-detail-inquiry">
            <div className="product-detail-inquiry__card ui-card">
              <h2>Talep Gönder</h2>
              <form className="product-detail-inquiry__form">
                <label>
                  <span>Talep Edilen Miktar (kg)</span>
                  <input type="number" placeholder="Örn: 10" />
                </label>
                <label>
                  <span>Mesajınız</span>
                  <textarea
                    rows={4}
                    placeholder="Teslimat tercihi veya özel notlarınız..."
                  />
                </label>
                <button type="button">Teklif Al</button>
                <p>Üretici 2 saat içinde yanıt verecektir.</p>
              </form>
            </div>
          </aside>
        </section>

        <section className="product-detail-related">
          <div className="product-detail-related__intro">
            <div>
              <h2>Benzer Ürünler</h2>
              <p>Sizin için seçtiğimiz diğer taze hasatlar.</p>
            </div>
            <a href={ROUTES.discover}>Tümünü Gör</a>
          </div>

          <div className="product-detail-related__grid">
            {relatedProducts.map((product) => (
              <a
                key={product.title}
                href={ROUTES.productDetail}
                className="product-detail-related__card"
              >
                <div className="product-detail-related__media">
                  <img src={product.image} alt={product.title} />
                  <span>{product.price}</span>
                </div>
                <h3>{product.title}</h3>
                <p>
                  <span className="material-symbols-outlined">location_on</span>
                  {product.location}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter
        className="product-detail-footer"
        brandDescription="Yerel üreticileri doğrudan tüketicilerle buluşturan, sürdürülebilir tarım destekçisi bir pazar yeri."
        socialLinks={[
          { href: ROUTES.home, label: "Topluluk", icon: "social_leaderboard" },
          { href: ROUTES.home, label: "E-posta", icon: "alternate_email" },
          { href: ROUTES.home, label: "Sürdürülebilirlik", icon: "eco" },
        ]}
        sections={[
          {
            title: "Hakkımızda",
            links: [
              { href: ROUTES.howItWorks, label: "Hikayemiz" },
              { href: ROUTES.howItWorks, label: "Sertifikalarımız" },
              { href: ROUTES.howItWorks, label: "Güven ve Doğrulama" },
            ],
          },
          {
            title: "Destek",
            links: [
              { href: ROUTES.howItWorks, label: "Kullanım Koşulları" },
              { href: ROUTES.howItWorks, label: "İletişim" },
              { href: ROUTES.howItWorks, label: "Yardım Merkezi" },
            ],
          },
        ]}
        bottomText="© 2024 Tarladan Sat. Yerel Üretimin Gücü."
      />
    </div>
  );
}

export default ProductDetailPage;
