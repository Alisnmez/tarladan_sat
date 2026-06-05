import { useEffect, useMemo, useRef, useState } from "react";
import { clearAuthSession, getAuthSession, isAuthenticated } from "../auth/authSession";
import { logout } from "../auth/api";
import { ROUTES, navigateTo } from "../../app/routes";
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
  const authUser = getAuthSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const userInitials = useMemo(() => {
    if (!userDisplayName || userDisplayName === "Hesabım") {
      return "TS";
    }

    return userDisplayName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
  }, [userDisplayName]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      clearAuthSession();
      setMenuOpen(false);
      navigateTo(ROUTES.login);
    }
  };

  return (
    <header className="site-nav">
      <nav className="site-nav__inner">
        <a href={ROUTES.home} className="site-nav__brand">
          Tarladan Sat
        </a>

        <div className="site-nav__links">
          {!omitHomeLink && (
            <a
              href={ROUTES.home}
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
            href={ROUTES.discover}
            className={
              activePage === "discover"
                ? "site-nav__link site-nav__link--active"
                : "site-nav__link"
            }
          >
            Ürün Keşfet
          </a>
          <a
            href={ROUTES.producers}
            className={
              activePage === "producers"
                ? "site-nav__link site-nav__link--active"
                : "site-nav__link"
            }
          >
            Üreticiler
          </a>
          <a
            href={ROUTES.howItWorks}
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
            <div className="site-nav__user-menu" ref={menuRef}>
              <button
                type="button"
                className="site-nav__user"
                aria-label="Hesap menüsü"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
              >
                <span className="site-nav__user-avatar" aria-hidden="true">
                  <span className="site-nav__user-initials">{userInitials}</span>
                </span>
                <span className="site-nav__user-meta">
                  <span className="site-nav__user-name">{userDisplayName}</span>
                  <span className="site-nav__user-badge">
                    {authUser?.role === "seller" ? "Satıcı" : authUser?.role === "admin" ? "Yönetici" : "Premium Üye"}
                  </span>
                </span>
                <span className="material-symbols-outlined site-nav__user-chevron" aria-hidden="true">
                  keyboard_arrow_down
                </span>
              </button>

              {menuOpen && (
                <div className="site-nav__dropdown" role="menu" aria-label="Profil menüsü">
                  <a href={ROUTES.home} className="site-nav__dropdown-link" onClick={() => setMenuOpen(false)}>
                    <span className="material-symbols-outlined">person</span>
                    <span>Profilim</span>
                  </a>
                  <a href={ROUTES.settings} className="site-nav__dropdown-link" onClick={() => setMenuOpen(false)}>
                    <span className="material-symbols-outlined">settings</span>
                    <span>Ayarlar</span>
                  </a>
                  <a href={ROUTES.myRequests} className="site-nav__dropdown-link" onClick={() => setMenuOpen(false)}>
                    <span className="material-symbols-outlined">list_alt</span>
                    <span>Taleplerim</span>
                  </a>

                  <a href={ROUTES.stall} className="site-nav__dropdown-link" onClick={() => setMenuOpen(false)}>
                    <span className="material-symbols-outlined">storefront</span>
                    <span>Tezgahım</span>
                  </a>
                  
                  <a href={ROUTES.requestManagement} className="site-nav__dropdown-link" onClick={() => setMenuOpen(false)}>
                    <span className="material-symbols-outlined">manage_accounts</span>
                    <span>Talep Yönetimi</span>
                  </a>
                  <div className="site-nav__dropdown-divider" />
                  <button
                    type="button"
                    className="site-nav__dropdown-item site-nav__dropdown-item--danger"
                    onClick={handleLogout}
                  >
                    <span className="material-symbols-outlined">logout</span>
                    <span>Çıkış Yap</span>
                  </button>
                </div>
              )}
            </div>
          ) : loggedIn ? (
            <a href={ROUTES.home} className="site-nav__login">
              Hesabım
            </a>
          ) : (
            <>
              <a href={ROUTES.login} className="site-nav__login">
                Giriş Yap
              </a>
              <a href={ROUTES.register} className="site-nav__register">
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
