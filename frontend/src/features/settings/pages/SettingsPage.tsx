import "../SettingsPage.css";

function SettingsPage() {
  return (
    <div className="settings-shell ui-page-shell ui-page-shell--column">
      <main className="settings-main ui-page-main">
        <div className="settings-intro ui-page-header">
          <h1>Hesap Ayarları</h1>
          <p>Profilinizi güncelleyebilir ve güvenlik tercihlerinizi yönetebilirsiniz.</p>
        </div>

        <div className="settings-grid">
          <section className="settings-card settings-card--photo ui-card">
            <h2>Profil Fotoğrafı</h2>
            <div className="settings-avatar">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr6lcRHor-o-Rqf5tpTxEDfG9O3OMmBaDjrhVhfBD1aDoHfhRlmRK_oMfD1rpHjS2Y0bmBMRS24mi-lkDeUgWwRAuD8jDUeb-aqJsi1iTY87ALXfigMkvSX-C_vH3uZbEpaEnnGwmwv1mosRZ1v_ohlEUSo4kgznpMJfLUZMS3NxGC4ByNeGoSp7LrVzRHH-Bbew-DUkayOBlGx9OF-E7yOjo6vLbzvjGsS2D55v8L-kE25iCZR41NziiL6IdIn4oZMOJgbdkV4p8"
                alt="Ahmet Yılmaz profil fotoğrafı"
              />
              <div className="settings-avatar__button">
                <span className="material-symbols-outlined">photo_camera</span>
              </div>
            </div>
            <p>En az 400x400px boyutunda bir fotoğraf önerilir.</p>
            <button type="button" className="settings-secondary-button">
              Fotoğrafı Değiştir
            </button>
          </section>

          <section className="settings-card settings-card--form ui-card">
            <h2>Kişisel Bilgiler</h2>
            <form className="settings-form">
              <label>
                <span>Ad Soyad</span>
                <input type="text" defaultValue="Ahmet Yılmaz" />
              </label>
              <label>
                <span>Telefon</span>
                <input type="tel" defaultValue="+90 532 123 45 67" />
              </label>
              <label className="settings-form__full">
                <span>Şehir</span>
                <select defaultValue="Muğla">
                  <option>İstanbul</option>
                  <option>Ankara</option>
                  <option>İzmir</option>
                  <option>Bursa</option>
                  <option>Antalya</option>
                  <option>Muğla</option>
                </select>
              </label>
            </form>
          </section>

          <section className="settings-card settings-card--security ui-card">
            <div className="settings-security">
              <div className="settings-security__icon">
                <span className="material-symbols-outlined">security</span>
              </div>
              <div className="settings-security__copy">
                <h2>Şifre Değiştir</h2>
                <p>
                  Hesabınızı güvende tutmak için periyodik olarak şifrenizi yenileyin.
                </p>
              </div>
            </div>
            <button type="button" className="settings-tertiary-button">
              Şifreyi Güncelle
            </button>
          </section>

          <div className="settings-actions">
            <button type="button" className="settings-cancel-button">
              Değişiklikleri İptal Et
            </button>
            <button type="button" className="settings-save-button">
              <span className="material-symbols-outlined">save</span>
              Değişiklikleri Kaydet
            </button>
          </div>
        </div>
      </main>

      <footer className="settings-footer ui-footer">
        <div className="settings-footer__inner ui-footer__container">
          <div className="settings-footer__brand">
            <span>Tarladan Sat</span>
            <p>© 2024 Tarladan Sat. Supporting local agriculture through digital transparency.</p>
          </div>

          <div className="settings-footer__links">
            <a href="/nasil-calisir">Our Mission</a>
            <a href="/ureticiler">Farmer Stories</a>
            <a href="/nasil-calisir">Sustainability</a>
            <a href="/nasil-calisir">Shipping Policy</a>
            <a href="/nasil-calisir">Contact Support</a>
            <a href="/nasil-calisir">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SettingsPage;
