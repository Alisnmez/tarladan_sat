import { FormField, SiteFooter } from "../../../shared/ui";
import {
  GLOBAL_FOOTER_CLASS_NAME,
  globalFooterBottomText,
  globalFooterBrandDescription,
  globalFooterSections,
  globalFooterSocialLinks,
} from "../../../shared/ui/site-footer/globalFooter";
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
              <FormField label="Ad Soyad">
                <input type="text" defaultValue="Ahmet Yılmaz" />
              </FormField>
              <FormField label="Telefon">
                <input type="tel" defaultValue="+90 532 123 45 67" />
              </FormField>
              <FormField label="Şehir" fullWidth className="settings-form__full">
                <select defaultValue="Muğla">
                  <option>İstanbul</option>
                  <option>Ankara</option>
                  <option>İzmir</option>
                  <option>Bursa</option>
                  <option>Antalya</option>
                  <option>Muğla</option>
                </select>
              </FormField>
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

export default SettingsPage;
