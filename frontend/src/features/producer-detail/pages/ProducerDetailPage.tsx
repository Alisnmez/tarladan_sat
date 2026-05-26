import { ROUTES } from "../../../app/routes";
import "../ProducerDetailPage.css";

const producerProducts = [
  {
    title: "Organik Bahce Havucu",
    price: "₺35",
    unit: "/ Kg",
    description: "Taze toplanmis, ilacsiz ve dogal kutur kutur havuc.",
    badge: "Mevsiminde",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU1jAVEeZK1QQX0-11zHYRdMNbKWJVaqfu2W17drJHtAubWDJI-mxb4g6OIOF2WT_fYXOi-ruxjiEyF0szBG0ZztkmGTM_LAsxGEFb3qlqdugA_lPfDoCDXfQtxpPZ9NGenH0MtkSdVHZPgiJ-b6BNQ-PPQJwfOlbkq6mm1ewJGZMB8pyEE_M7mCo4JZ8G1bLbHoNhdyZ9ORjcLtpjvEpk6lrAhMWPwtBs8a6kmtsiBbZlmxBL6cO-hjWhEz48-ic3O4Lult2HBLk",
  },
  {
    title: "Atalik Pembe Domates",
    price: "₺55",
    unit: "/ Kg",
    description: "Yogun aromali, ince kabuklu gercek koy domatesi.",
    badge: "Ozel Secim",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlZ0ua_BA_nrFU9nPkBSxZ37VYEAMVmSSopjURu_nmMXt41EPx45xPcO724UAn0qmrIHimH2MZwR1n8ZS_dwBMD8u8syeeWVYMtNIeMgP8d3JgozScc6JWa6bj92l4LS8U0tRh-VEIj_8mAGLdqrt9vjoNowWy9bW4wh8AaROQR7-gFxhmJ3-vAk1HWE2P9VMPLu6nDysyW0htId218KqjUqu1tXa_eMtIHsJNiXUj_8xALcg4_8GVVsDAxN-zG1I7ag7e3oM0S7c",
  },
  {
    title: "Kekik Cicegi Bali",
    price: "₺240",
    unit: "/ 500g",
    description: "Seferihisar yamaclarindan, katkısız ham suzme bal.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-Sm7H3KWrOd9dZYok-yb8hy8NVFKD_LPzXU9e3DENLckLj_LkXi8nKOkOL29DP7XkL3oDQkV-fS95KIlbqhiZeFwmMHJbQDgHVcivioGSq_dWt4RCdQ1bv_JOqmAxuaTNqeI-aC5kmuE4AEyDpaN37YV8fNY0EP60DqCFuSf91fM4ctMjsd5ir0-96lTL4_YahbNFfmJX8lbOgcGzD6SEzcl6WGvAQ_lVEkc_yOdfnzwTfR4q_VUmUskylItK2CGnyhdA_wVMNF4",
  },
  {
    title: "Erken Hasat Zeytinyagi",
    price: "₺380",
    unit: "/ 1L",
    description: "Soguk sikim, asit orani 0.3'ten dusuk sifa niyetine.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3i6QSa8Zam_S7_KMg1XVU5hi71DgsQ4GDfmhmoIqckAPJX36jHkqOSO1VRBkpERVGMKDM1sKjL35X1P-5tHBKdc0AQ_h6sSOdhY-iYAO0HHBXjrK26bLd5Uxj9YrOLcHS0-SaK0oClAaw1O2iTJxMvUSjiHtrWjDi5iPOjaG07OGi1_w622l_hh5VVylKw1o-_xTqlsPfjIxll6NPeabYZ7ay-3MaghIuDTXW_uV2bPB-sr8qXVngp-QXakO65LKKiNSBLp_OZFQ",
  },
];

function ProducerDetailPage() {
  return (
    <div className="producer-detail-shell ui-page-shell">
      <section className="producer-detail-cover">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_yCxnBVmCyOkY5lmGtqFRNsxDYnqhJ7mtnbcne4maP88V9JUvf00MdxrmSBr0WCq7wOQwTwkk5k6oEXOj5J4nxBkDvU3TBN4yS9lC-XiNdUdA01ufZrow6sO3KZUcdEt_WVAdpiOXDjfdHqhQ8Cy9NZlA85r1buSEwORIz23_rTJ7KmI48N3wvNQOaDpxQgbnyG3f00ILGek_Nf-WmspSYtgf9rldowA0gRLzHGTd8ginx2H4Tmk3evEzlKkgz9inSMm4lgiqcmw"
          alt="Mehmet Yılmaz Çiftliği kapak görseli"
        />
        <div className="producer-detail-cover__overlay" />
      </section>

      <main className="producer-detail-main ui-page-main">
        <div className="producer-detail-layout">
          <aside className="producer-detail-sidebar">
            <section className="producer-detail-card ui-card">
              <div className="producer-detail-card__avatar">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC0PdFUcdveFuvGkBIK_Lb2P6C1K3akUSPMq2GdOgNx7tbSfVx-m48hoNiF6GsohG1HFMyERQ7tynT0Ax7dQBkVg1uwzBsRP1XrdHihGFQl9HdMGPLKyLGKIS4eltuKxBltGdQPrGoJQqNm5RtnpXuVAmlP1zL9PQXG7EvGptcmxZ5QxglJapPaMMsbWKL8tTA9R7JumoKE05dljJ9OgYo-my6I_r_rFAt6oOMXQEmvqyaevds_vhFnYqFKbEDcsxw_j_DmK0Gt9w"
                  alt="Mehmet Yılmaz Çiftliği profil fotoğrafı"
                />
              </div>

              <div className="producer-detail-card__header">
                <h1>Mehmet Yilmaz Ciftligi</h1>
                <p>
                  <span className="material-symbols-outlined">location_on</span>
                  Seferihisar, Izmir
                </p>
              </div>

              <div className="producer-detail-card__chips">
                <span className="ui-chip ui-chip--primary">
                  <span className="material-symbols-outlined">verified</span>
                  Onayli Uretici
                </span>
                <span className="ui-chip ui-chip--secondary">
                  <span className="material-symbols-outlined">star</span>
                  4.8 Yildiz
                </span>
              </div>

              <blockquote className="producer-detail-card__quote">
                "Topragin bereketine inanarak 30 yildir atalik tohumlarla uretim
                yapiyoruz. Sofraniza gelen her urun bizim tarlamizda sevgiyle yetisti."
              </blockquote>

              <div className="producer-detail-card__stats">
                <div>
                  <strong>45</strong>
                  <span>Basarili Islem</span>
                </div>
                <div>
                  <strong>12</strong>
                  <span>Aktif Urun</span>
                </div>
              </div>

              <button type="button" className="ui-button ui-button--primary producer-detail-card__cta">
                <span className="material-symbols-outlined">chat_bubble</span>
                Ureticiye Soru Sor
              </button>
            </section>

            <section className="producer-detail-secure ui-card">
              <span className="material-symbols-outlined">shield_with_heart</span>
              <div>
                <h4>Guvenli Alisveris</h4>
                <p>
                  Tarladan Sat platformu odemenizi urun teslimatina kadar korur.
                </p>
              </div>
            </section>
          </aside>

          <section className="producer-detail-products">
            <div className="producer-detail-products__header">
              <h2>Aktif Urunler</h2>
              <div>
                <button type="button" className="ui-icon-button" aria-label="Filtrele">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <button type="button" className="ui-icon-button" aria-label="Izgara gorunumu">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
              </div>
            </div>

            <div className="producer-detail-products__grid">
              {producerProducts.map((product) => (
                <article key={product.title} className="producer-product-card ui-card ui-card--interactive">
                  <div className="producer-product-card__media">
                    <img src={product.image} alt={product.title} />
                    {product.badge ? (
                      <span className="producer-product-card__badge">{product.badge}</span>
                    ) : null}
                  </div>
                  <div className="producer-product-card__body">
                    <div className="producer-product-card__title">
                      <h3>{product.title}</h3>
                      <div>
                        <strong>{product.price}</strong>
                        <span>{product.unit}</span>
                      </div>
                    </div>
                    <p>{product.description}</p>
                    <a href={ROUTES.productDetail} className="producer-product-card__button">
                      <span className="material-symbols-outlined">shopping_basket</span>
                      Sepete Ekle
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="producer-detail-products__footer">
              <a href={ROUTES.discover} className="producer-detail-products__all">
                Tum Urunleri Gor (12)
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="producer-detail-footer ui-footer">
        <div className="producer-detail-footer__grid ui-footer__container">
          <div>
            <span className="ui-footer__brand-title">Tarladan Sat</span>
            <p>Yerel uretimin gucunu dijital dunyaya tasiyoruz. Dogrudan ureticiden, taptaze sofraniza.</p>
          </div>
          <div>
            <h5>Hakkimizda</h5>
            <a href={ROUTES.howItWorks}>Hikayemiz</a>
            <a href={ROUTES.howItWorks}>Guven ve Dogrulama</a>
            <a href={ROUTES.howItWorks}>Surdurulebilirlik</a>
          </div>
          <div>
            <h5>Yardim</h5>
            <a href={ROUTES.howItWorks}>Kullanim Kosullari</a>
            <a href={ROUTES.howItWorks}>Iletisim</a>
            <a href={ROUTES.howItWorks}>Sikca Sorulan Sorular</a>
          </div>
          <div>
            <h5>Bizi Takip Edin</h5>
            <div className="producer-detail-footer__socials">
              <span className="material-symbols-outlined">language</span>
              <span className="material-symbols-outlined">park</span>
              <span className="material-symbols-outlined">group</span>
            </div>
          </div>
        </div>
        <div className="producer-detail-footer__bottom ui-footer__bottom">
          <p>© 2024 Tarladan Sat. Yerel Uretimin Gucu.</p>
        </div>
      </footer>
    </div>
  );
}

export default ProducerDetailPage;
