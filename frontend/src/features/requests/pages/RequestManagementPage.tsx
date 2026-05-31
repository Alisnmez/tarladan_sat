import { SiteFooter } from "../../../shared/ui";
import {
  GLOBAL_FOOTER_CLASS_NAME,
  globalFooterBottomText,
  globalFooterBrandDescription,
  globalFooterSections,
  globalFooterSocialLinks,
} from "../../../shared/ui/site-footer/globalFooter";
import "../RequestManagementPage.css";

type RequestCard = {
  company: string;
  location: string;
  status: "YENİ" | "BEKLEMEDE";
  product: string;
  quantity: string;
  message: string;
  image: string;
};

const requestCards: RequestCard[] = [
  {
    company: "Ege Restoran",
    location: "İzmir, Türkiye",
    status: "YENİ",
    product: "Domates (Salkım)",
    quantity: "250 KG",
    message:
      '"Haftalık menümüz için taze salkım domates arayışındayız. Ürünlerin kalibresi standart olursa çok seviniriz. Düzenli alım yapabiliriz."',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7QdPizGxhrJ7t9gLuAXtQqeu2F2nefbA7bcEKAQObrtcgTgZyoe72tbSNYGAF8uzwFi4fdN1HxbyQ4o5b7dhfN27CSvXQdx9Ly2YtLIYPVjLKJZrYLy0PRxmeLCllXLFiL0V_QtBNA9V9wFVc4N9nHCLeVK2yE1Qf0R1SSxC3dkGdSMDHpPgT_6KywJr8AgkMTmU6BpM2_CQyyDIUvHbUwgtot3j4S7HPGbEp1-MsRzx9b0zLE3zve44AVwyY7eM1XPyInYxmomA",
  },
  {
    company: "Doğa Gurme Market",
    location: "İstanbul, Türkiye",
    status: "BEKLEMEDE",
    product: "Zeytinyağı (Soğuk Sıkım)",
    quantity: "50 Litre",
    message:
      '"Butik rafımız için erken hasat soğuk sıkım zeytinyağı talep ediyoruz. 500ml şişeleme imkanınız var mıdır?"',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaGpSchK5SIdErOvBCYWTgMOtxOGOiqVr1ghIV-fdOTbvAUVz8jU7Kvy23r-69B8AIwpxMgB1jO0gLZCqXFpHdEeLeHpbc7ef2EbTkN7yZYu0ekfQNECiHYcQ3PrafjyknIrYsBZwchqONhnD26Box5rK_H8QnrCUulrK7sOT9H3Y_wCzgzZpKyGvx5WI4QfVbMap_X-LCN3RL-D7uU0MGZL5Fb_PwwQDnLmNZ5IBLxpYAYIiwookC4eE1W810l634qghAm46sypA",
  },
  {
    company: "Tech-Plus Yemekhane",
    location: "Ankara, Türkiye",
    status: "YENİ",
    product: "Köy Yumurtası",
    quantity: "30 Koli (900 Adet)",
    message:
      '"Çalışan kahvaltılarımız için günlük taze köy yumurtası tedarikçisi arıyoruz. Lojistik desteğiniz var mı?"',
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfM7Bz5_bE-79qSrht_8--Y5Y3UFLBBTfEp01_uAuYiJMZfrRCGN_3318urBecXEmI7Uk7735GP8i4vy_P765TyrhMMAfw6yXLrrTD9Xnj63vt6RmnkhmF8bvZUE7G6-WzUTrR8HrDBSuOZVtsY8KlazDieYpqpMKgobiiY6lzPfO8savI4TXWFSl4AgPW-L3Zd0q6dyn9VQqT8PULh_qGEudLnkzw5rYq6sfjnZ3OnxpgUzzjuUrpzKW6dX-aJSIb_vXbcbCC2Ds",
  },
];

function RequestManagementPage() {
  return (
    <div className="requests-shell ui-page-shell">
      <main className="requests-main ui-page-main ui-page-main--tall">
        <header className="requests-header ui-page-header ui-page-header--wide">
          <h1>Talep Yönetimi</h1>
          <p>
            Müşterilerinizden gelen alım taleplerini buradan takip edebilir,
            sipariş süreçlerini yönetebilirsiniz.
          </p>
        </header>

        <section className="requests-stats">
          <article className="requests-stat requests-stat--primary">
            <div>
              <span className="material-symbols-outlined">notifications_active</span>
              <h3>Bugün Gelen</h3>
            </div>
            <p>
              5 <span>Yeni Talep</span>
            </p>
          </article>

          <article className="requests-stat requests-stat--secondary">
            <div>
              <span className="material-symbols-outlined">pending_actions</span>
              <h3>Bekleyen Onay</h3>
            </div>
            <p>
              3 <span>İşlem Bekliyor</span>
            </p>
          </article>

          <article className="requests-stat requests-stat--neutral">
            <div className="requests-stat__copy">
              <span className="material-symbols-outlined">trending_up</span>
              <h3>Haftalık Performans</h3>
              <p>+%12 Artış</p>
            </div>
            <span className="material-symbols-outlined requests-stat__bg">agriculture</span>
          </article>
        </section>

        <section className="requests-list">
          <div className="requests-list__heading">
            <h2>Aktif Talepler</h2>
            <div className="requests-list__actions">
              <button type="button" className="ui-icon-button" aria-label="Filtrele">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
              <button type="button" className="ui-icon-button" aria-label="Sırala">
                <span className="material-symbols-outlined">sort</span>
              </button>
            </div>
          </div>

          <div className="requests-grid">
            {requestCards.map((request) => (
              <article className="request-card ui-card ui-card--interactive" key={`${request.company}-${request.product}`}>
                <div className="request-card__top">
                  <div className="request-card__company">
                    <div className="request-card__avatar">
                      <img src={request.image} alt={request.company} loading="lazy" />
                    </div>
                    <div>
                      <h3>{request.company}</h3>
                      <div className="request-card__location">
                        <span className="material-symbols-outlined">location_on</span>
                        <span>{request.location}</span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={
                      request.status === "YENİ"
                        ? "request-card__status request-card__status--new"
                        : "request-card__status request-card__status--waiting"
                    }
                  >
                    {request.status}
                  </span>
                </div>

                <div className="request-card__details">
                  <div>
                    <p>Ürün</p>
                    <strong>{request.product}</strong>
                  </div>
                  <div>
                    <p>Miktar</p>
                    <strong>{request.quantity}</strong>
                  </div>
                </div>

                <div className="request-card__message">
                  <p>Alıcı Mesajı</p>
                  <blockquote>{request.message}</blockquote>
                </div>

                <div className="request-card__buttons">
                  <button type="button" className="request-card__approve">
                    <span className="material-symbols-outlined">check_circle</span>
                    Onayla
                  </button>
                  <button type="button" className="request-card__message-btn">
                    <span className="material-symbols-outlined">mail</span>
                    Mesaj Gönder
                  </button>
                  <button type="button" className="request-card__reject" aria-label="Reddet">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              </article>
            ))}

            <div className="requests-placeholder">
              <span className="material-symbols-outlined">hourglass_top</span>
              <h3>Daha fazla talep yükleniyor...</h3>
              <p>Güncel veriler senkronize ediliyor.</p>
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

export default RequestManagementPage;
