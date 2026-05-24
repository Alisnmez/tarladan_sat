function AuthTopbar() {
  return (
    <header className="login-topbar">
      <div className="login-topbar__inner">
        <div className="login-topbar__brand-group">
          <a href="#/login" className="login-topbar__brand">
            Tarladan Sat
          </a>
          <nav className="login-topbar__nav">
            <a href="#/discover">Ürün Keşfet</a>
            <a href="#/discover">Üreticiler</a>
            <a href="#/how-it-works">Nasıl Çalışır?</a>
          </nav>
        </div>

        <div className="login-topbar__actions">
          <a href="#/login" className="login-topbar__link">
            Giriş Yap
          </a>
          <a href="#/register" className="login-topbar__button">
            Kayıt Ol
          </a>
        </div>
      </div>
    </header>
  );
}

export default AuthTopbar;
