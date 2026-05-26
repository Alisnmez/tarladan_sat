import { ROUTES } from "../../../app/routes";
import "../StorePanelPage.css";

function StorePanelPage() {
  return (
    <div className="store-panel-shell ui-page-shell ui-page-shell--column">
      <div className="store-panel-layout">
        <aside className="store-panel-sidebar">
          <div className="store-panel-sidebar__profile">
            <h2>Ciftci Ahmet</h2>
            <p>Onaylı Üretici</p>
          </div>

          <nav className="store-panel-sidebar__nav">
            <a href={ROUTES.stall} className="store-panel-sidebar__link">
              <span className="material-symbols-outlined">dashboard</span>
              Tezgahim
            </a>
            <a href={ROUTES.discover} className="store-panel-sidebar__link">
              <span className="material-symbols-outlined">potted_plant</span>
              Urunlerim
            </a>
            <a href={ROUTES.myRequests} className="store-panel-sidebar__link">
              <span className="material-symbols-outlined">shopping_basket</span>
              Siparisler
            </a>
            <a
              href={ROUTES.stall}
              className="store-panel-sidebar__link store-panel-sidebar__link--active"
            >
              <span className="material-symbols-outlined">person_edit</span>
              Profil Duzenle
            </a>
            <a href={ROUTES.howItWorks} className="store-panel-sidebar__link">
              <span className="material-symbols-outlined">contact_support</span>
              Destek
            </a>
          </nav>

          <button type="button" className="ui-button ui-button--primary store-panel-sidebar__cta">
            Yeni Urun Ekle
          </button>
        </aside>

        <main className="store-panel-main ui-page-main">
          <div className="store-panel-content">
            <section className="store-panel-hero">
              <div className="store-panel-cover ui-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl0Rsg_I9WYAF1ixhdRd8hwkuxg5r2Cjf3KEwMAeYEjD4PvtKJ9PLVhfdrI3AaoB6XjamRiq4Jm01pq_bGjwpC_HfIUl6FCyUhG3t1H4IBLU-RGhjXVozLKlDM0f7Cm8IWvC3t1W_dwTxT4T5PO7KhZjyrhpXxsjtSh2nkNfRKr2CUldjJUmatlWlB6BkeGEetZBija9wIEcffmhQr92oqcD_YUgkkOmadqDjW6pAiOa6O1yVIn70LfSiOW5AVJTj2e90YxPBxsWE"
                  alt="Çiftlik kapak görseli"
                />
                <div className="store-panel-cover__overlay">
                  <button type="button" className="store-panel-cover__button">
                    <span className="material-symbols-outlined">edit</span>
                    Kapak Fotografini Duzenle
                  </button>
                </div>
              </div>

              <div className="store-panel-avatar ui-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRv0Hma0TVS6N_3ir9jhgYqn6aZXC-dLC2B6J4UtA5LOp-jkkRrr_XBK1anQJp6I60s7Y3COd4KTydT5KFJFk7tG8ptt52_l7y49xn30-lyXTwTY9sVAEEFmxXJNihkjUQZ0rcGRQ2KkyXRUxYXK-SS2GGWSEnVu1W2efyGbsG2hMoMOsFJMKI6pVBWTl9LctEPqQN__pT6Dv24K7vXDt0uPuAA2E9uMOw9uArk-F-ErsgKgqtiJMG0BUYlGdClZhU3Aqj3RC2G5I"
                  alt="Üretici profil görseli"
                />
                <button type="button" className="store-panel-avatar__button" aria-label="Profil fotoğrafını değiştir">
                  <span className="material-symbols-outlined">photo_camera</span>
                </button>
              </div>
            </section>

            <div className="store-panel-grid">
              <section className="store-panel-card ui-card">
                <div className="store-panel-card__header">
                  <span className="material-symbols-outlined">storefront</span>
                  <h3>Magaza Bilgileri</h3>
                </div>

                <div className="store-panel-form">
                  <label>
                    <span>Magaza Adi</span>
                    <input type="text" defaultValue="Mehmet Yilmaz Ciftligi" />
                  </label>

                  <label>
                    <span>Konum / Sehir</span>
                    <div className="store-panel-input-icon">
                      <span className="material-symbols-outlined">location_on</span>
                      <input type="text" defaultValue="Efes, Selcuk, Izmir" />
                    </div>
                  </label>

                  <label>
                    <span>Magaza Aciklamasi (Hakkimizda)</span>
                    <textarea
                      rows={6}
                      defaultValue="Biz 3 kusaktir Izmir'in verimli topraklarinda organik tarim yapan bir aileyiz. Hicbir kimyasal kullanmadan yetistirdigimiz urunlerimizi dogrudan sofraniza ulastiriyoruz. Bahcemizden taze toplanan zeytin, incir ve mevsim sebzeleri ile doganin tadini sunuyoruz."
                    />
                  </label>
                </div>
              </section>

              <div className="store-panel-side">
                <section className="store-panel-card ui-card">
                  <div className="store-panel-card__header">
                    <span className="material-symbols-outlined">contact_page</span>
                    <h3>Iletisim</h3>
                  </div>

                  <div className="store-panel-form">
                    <label>
                      <span>Telefon Numarasi</span>
                      <input type="tel" defaultValue="+90 532 000 00 00" />
                    </label>

                    <div className="store-panel-socials">
                      <p>Sosyal Medya</p>

                      <label className="store-panel-socials__item">
                        <span className="store-panel-socials__icon">IG</span>
                        <input type="text" placeholder="instagram.com/kullaniciadi" />
                      </label>

                      <label className="store-panel-socials__item">
                        <span className="store-panel-socials__icon">FB</span>
                        <input type="text" placeholder="facebook.com/kullaniciadi" />
                      </label>
                    </div>
                  </div>
                </section>

                <section className="store-panel-verified ui-card">
                  <span className="material-symbols-outlined">verified_user</span>
                  <strong>Profiliniz Dogrulandi</strong>
                  <p>Bu rozet musterilerinize guven verir ve satislarinizi artirir.</p>
                </section>
              </div>
            </div>

            <div className="store-panel-actions">
              <button type="button" className="ui-button ui-button--secondary">
                Degisiklikleri Iptal Et
              </button>
              <button type="button" className="ui-button ui-button--primary">
                Profili Guncelle
              </button>
            </div>
          </div>
        </main>
      </div>

      <footer className="store-panel-footer ui-footer">
        <div className="store-panel-footer__inner ui-footer__container">
          <div>
            <span className="ui-footer__brand-title">Tarladan Sat</span>
            <p>© 2024 Tarladan Sat - Yerel Ureticiyi Destekliyoruz</p>
          </div>

          <div className="store-panel-footer__links">
            <a href={ROUTES.howItWorks}>Kullanim Kosullari</a>
            <a href={ROUTES.howItWorks}>Gizlilik Politikasi</a>
            <a href={ROUTES.howItWorks}>Satici Rehberi</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default StorePanelPage;
