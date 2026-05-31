import { ROUTES } from "../../../app/routes";
import { InputShell, MobileBottomNav, SiteFooter } from "../../../shared/ui";
import {
  GLOBAL_FOOTER_CLASS_NAME,
  globalFooterBottomText,
  globalFooterBrandDescription,
  globalFooterSections,
  globalFooterSocialLinks,
} from "../../../shared/ui/site-footer/globalFooter";
import "../MyRequestsPage.css";

type BuyerRequest = {
  id: string;
  tag?: string;
  product: string;
  producer: string;
  quantity: string;
  location: string;
  status: "Üretici Yanıt Bekliyor" | "Fiyat Teklifi Geldi" | "Talep İptal Edildi";
  image: string;
  actionLabel: string;
};

const requests: BuyerRequest[] = [
  {
    id: "#TR-5542",
    tag: "Taze Mahsul",
    product: "Köy Havucu (Beypazarı)",
    producer: "Ahmet Yılmaz (Yılmaz Çiftliği)",
    quantity: "500 KG",
    location: "Ankara, Türkiye",
    status: "Üretici Yanıt Bekliyor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8oTgEs6Ziz4EI19Yh8epk2OrkJa4cMNZT2TUOuiQd2rz5bvp1tXDmo2WtHiqQkAx6SB0nA_tDh8DaEpTSZryf6muFBC4sSXakH_VCKJtk97dnWsFV57RJSiTRjEzNkkp4hYBzz8Agdt0Lomby67s8aRn1pK0PKTYicUoAe_zU9UQ8hrQWLBHLoF0B8TxtgfN-ZFdVpKRz15tRSii8SfebPFuNHrKhRce_idJKwS2-Uag2avlSlo8UvSgYkwAQO-qWn7KxWNLolkw",
    actionLabel: "Detaylar",
  },
  {
    id: "#TR-5539",
    tag: "Organik",
    product: "Salkım Domates",
    producer: "Fatma Ana Yerel Üretim",
    quantity: "200 KG",
    location: "İzmir, Türkiye",
    status: "Fiyat Teklifi Geldi",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQx0e9GB7ZFhUAqVnuV-OUU3dvTfvMbSdFjHjztdVhpEpWtq6-ndD-soKI7K0D3JxM__Ys-AojBpNp2OEjyTGuDC_-yxD94msIM88JfL3rNB5p75Z6qgqC7NAHCX5p6669UDN1ECLlgLDhbtqg_l64NPKsNXH0dD1cICdgfXicPmAklgrVnGkPueqxCfX7WvluO6SxYwBqIsHccchgmrjhiNaBuYDHzI16dMdPQbpu9xzpr6ZGMzlv2VdVZ4WCDM8l5Mybc9G2Ag4",
    actionLabel: "Teklifi Gör",
  },
  {
    id: "#TR-5421",
    product: "Karışık Ege Yeşilliği",
    producer: "Menderes Ovası Kooperatifi",
    quantity: "50 KG",
    location: "İzmir, Türkiye",
    status: "Talep İptal Edildi",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBg7v9MvimGV4i3zLdlGVk3RnBKhpXh9RLViLErFy6x8QHwPOVoJJQfzj8K71NW7udQlyOG3PHGOGFgaWSKNOpWCr4OfVtAZyNk-Yfry5UHDE3k_QCwo6XUSw4Py9Z8bHjsnS-6X9BsEz_MCAQ95p5Hs6Nl1IxHZDX-hNZpkG_xyJFilSpxsyq2dCsjLbyYTRvMA-IPgvrA_9b9ih6Ho-3s5LqQ41kaMz1OUReQhEEql0sNcg0Mis1QVJQv4Pm0q_GE1jLiDKXkJzo",
    actionLabel: "Yeniden Talep Et",
  },
];

function MyRequestsPage() {
  return (
    <div className="my-requests-shell ui-page-shell ui-page-shell--column">
      <main className="my-requests-main ui-page-main ui-page-main--compact">
        <div className="my-requests-header ui-page-header">
          <div>
            <h1>Taleplerim</h1>
            <p>
              Üreticilere gönderdiğiniz alım taleplerini ve süreçlerini buradan takip edin.
            </p>
          </div>

          <label className="my-requests-search">
            <InputShell icon="search">
              <input type="text" placeholder="Talep ara..." />
            </InputShell>
          </label>
        </div>

        <div className="my-requests-layout">
          <aside className="my-requests-sidebar">
            <nav>
              <button type="button" className="my-requests-tab my-requests-tab--active">
                <span className="material-symbols-outlined">pending_actions</span>
                <span>Bekleyen Talepler</span>
                <span className="my-requests-tab__count">4</span>
              </button>
              <button type="button" className="my-requests-tab">
                <span className="material-symbols-outlined">check_circle</span>
                <span>Onaylananlar</span>
                <span className="my-requests-tab__count my-requests-tab__count--muted">12</span>
              </button>
              <button type="button" className="my-requests-tab">
                <span className="material-symbols-outlined">archive</span>
                <span>Tamamlananlar</span>
              </button>
              <div className="my-requests-sidebar__divider" />
              <button type="button" className="my-requests-tab my-requests-tab--desktop">
                <span className="material-symbols-outlined">chat</span>
                <span>Mesajlarım</span>
              </button>
              <button type="button" className="my-requests-tab my-requests-tab--desktop">
                <span className="material-symbols-outlined">settings</span>
                <span>Ayarlar</span>
              </button>
            </nav>
          </aside>

          <section className="my-requests-list">
            {requests.map((request) => (
              <article
                key={request.id}
                className={
                  request.status === "Talep İptal Edildi"
                    ? "request-item ui-card request-item--muted"
                    : "request-item ui-card"
                }
              >
                {request.status !== "Talep İptal Edildi" && <div className="request-item__rail" />}

                <div className="request-item__image">
                  <img src={request.image} alt={request.product} loading="lazy" />
                </div>

                <div className="request-item__body">
                  <div className="request-item__meta">
                    <div className="request-item__tags">
                      {request.tag ? <span className="request-item__tag">{request.tag}</span> : null}
                      <span className="request-item__id">{request.id}</span>
                    </div>
                    <h2>{request.product}</h2>
                    <div className="request-item__details">
                      <span>
                        <span className="material-symbols-outlined">person</span>
                        {request.producer}
                      </span>
                      <span>
                        <span className="material-symbols-outlined">shopping_basket</span>
                        Talep: {request.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="request-item__aside">
                    <div
                      className={
                        request.status === "Fiyat Teklifi Geldi"
                          ? "request-item__status request-item__status--offer"
                          : request.status === "Talep İptal Edildi"
                            ? "request-item__status request-item__status--cancelled"
                            : "request-item__status"
                      }
                    >
                      {request.status === "Fiyat Teklifi Geldi" ? (
                        <span className="request-item__status-dot request-item__status-dot--pulse" />
                      ) : request.status === "Talep İptal Edildi" ? (
                        <span className="material-symbols-outlined request-item__status-icon">history</span>
                      ) : (
                        <span className="request-item__status-dot" />
                      )}
                      <span>{request.status}</span>
                    </div>

                    <div className="request-item__actions">
                      {request.status !== "Talep İptal Edildi" && (
                        <button type="button" className="request-item__ghost">
                          Mesaj Gönder
                        </button>
                      )}
                      <button
                        type="button"
                        className={
                          request.status === "Talep İptal Edildi"
                            ? "request-item__outline"
                            : "request-item__primary"
                        }
                      >
                        {request.actionLabel}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
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
          { href: ROUTES.discover, icon: "explore", label: "Keşfet" },
          { href: ROUTES.myRequests, icon: "assignment", label: "Taleplerim", active: true },
          { href: ROUTES.myRequests, icon: "chat", label: "Mesajlar" },
          { href: ROUTES.home, icon: "person", label: "Profil" },
        ]}
      />
    </div>
  );
}

export default MyRequestsPage;
