import { isAuthenticated } from "../auth/authSession";
import "./SiteNavbar.css";

export type NavPage = "home" | "discover" | "producers" | "how-it-works";

type SiteNavbarProps = {
  activePage?: NavPage;
};

function SiteNavbar({ activePage }: SiteNavbarProps) {
  const loggedIn = isAuthenticated();

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <div className="site-nav__brand-group">
          <a href={loggedIn ? "#/home" : "#/login"} className="site-nav__brand">
            Tarladan Sat
          </a>
          <nav className="site-nav__links">
            {loggedIn && (
              <a
                href="#/home"
                className={
                  activePage === "home"
                    ? "site-nav__link site-nav__link--active"
                    : "site-nav__link"
                }
              >
                Anasayfa
              </a>
            )}
            <a
              href="#/discover"
              className={
                activePage === "discover"
                  ? "site-nav__link site-nav__link--active"
                  : "site-nav__link"
              }
            >
              Ürün Keşfet
            </a>
            <a
              href="#/discover"
              className={
                activePage === "producers"
                  ? "site-nav__link site-nav__link--active"
                  : "site-nav__link"
              }
            >
              Üreticiler
            </a>
            <a
              href="#/how-it-works"
              className={
                activePage === "how-it-works"
                  ? "site-nav__link site-nav__link--active"
                  : "site-nav__link"
              }
            >
              Nasıl Çalışır?
            </a>
          </nav>
        </div>

        <div className="site-nav__actions">
          {loggedIn ? (
            <a href="#/login" className="site-nav__login">
              Hesabım
            </a>
          ) : (
            <>
              <a href="#/login" className="site-nav__login">
                Giriş Yap
              </a>
              <a href="#/register" className="site-nav__register">
                Kayıt Ol
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default SiteNavbar;
