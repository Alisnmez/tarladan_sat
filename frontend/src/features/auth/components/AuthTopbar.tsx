function AuthTopbar() {
  return (
    <header className="login-topbar">
      <div className="login-topbar__inner">
        <div className="login-topbar__brand-group">
          <a href="#/anasayfa" className="login-topbar__brand">
            Tarladan Sat
          </a>
          <nav className="login-topbar__nav">
            <a href="#/anasayfa">Anasayfa</a>
            <a href="#/urun-kesfet">Ürün Keşfet</a>
            <a href="#/urun-kesfet">Üreticiler</a>
            <a href="#/nasil-calisir">Nasıl Çalışır?</a>
          </nav>
        </div>

        <div className="login-topbar__actions">
          <a href="#/giris-yap" className="login-topbar__link">
            Giriş Yap
          </a>
          <a href="#/kayit-ol" className="login-topbar__button">
            Kayıt Ol
          </a>
        </div>
      </div>
    </header>
  );
}

export default AuthTopbar;
