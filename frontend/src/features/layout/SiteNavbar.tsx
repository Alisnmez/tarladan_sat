import { isAuthenticated } from "../auth/authSession";
import "./SiteNavbar.css";

export type NavPage = "home" | "discover" | "producers" | "how-it-works";

type SiteNavbarProps = {
  activePage?: NavPage;
  omitHomeLink?: boolean;
  userAccountChip?: boolean;
  userDisplayName?: string;
};

function SiteNavbar({
  activePage,
  omitHomeLink = false,
  userAccountChip = false,
  userDisplayName = "Hesabım",
}: SiteNavbarProps) {
  const loggedIn = isAuthenticated();

  return (
    <header className="site-nav">
      <nav className="site-nav__inner">
        <a href={loggedIn ? "#/home" : "#/login"} className="site-nav__brand">
          Tarladan Sat
        </a>

        <div className="site-nav__links">
          {loggedIn && !omitHomeLink && (
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
        </div>

        <div className="site-nav__actions">
          {loggedIn && userAccountChip ? (
            <button type="button" className="site-nav__user" aria-label="Hesap menüsü">
              <span className="site-nav__user-avatar" aria-hidden="true">
                <span className="material-symbols-outlined">account_circle</span>
              </span>
              <span className="site-nav__user-name">{userDisplayName}</span>
              <span className="material-symbols-outlined site-nav__user-chevron" aria-hidden="true">
                keyboard_arrow_down
              </span>
            </button>
          ) : loggedIn ? (
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
      </nav>
    </header>
  );
}

export default SiteNavbar;
