import { useState } from "react";
import "../../../App.css";
import { ROUTES, getRedirectTargetFromLocation, navigateTo } from "../../../app/routes";
import { setAuthSession } from "../authSession";
import { forgotPasswordRequest, loginRequest, meRequest } from "../api";
import type { ForgotPasswordResponse, LoginResponse } from "../types";

type LoginErrors = NonNullable<LoginResponse["errors"]>;
type ForgotPasswordErrors = NonNullable<ForgotPasswordResponse["errors"]>;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<LoginErrors>({});
  const [forgotErrors, setForgotErrors] = useState<ForgotPasswordErrors>({});
  const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");
    setErrors({});

    try {
      const data = await loginRequest({
        email,
        password,
        remember,
      });

      if (data.data?.user) {
        setAuthSession(data.data.user);
      } else {
        const meData = await meRequest();

        if (meData.data?.user) {
          setAuthSession(meData.data.user);
        }
      }

      navigateTo(getRedirectTargetFromLocation() ?? ROUTES.home);
    } catch (err) {
      const apiError = err as LoginResponse;

      if (apiError.errors) {
        setErrors(apiError.errors);
        setError("Lütfen giriş bilgilerinizi kontrol edin.");
      } else {
        setError(apiError.message || "Giriş sırasında hata oluştu.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");
    setForgotErrors({});

    try {
      const data = await forgotPasswordRequest({ email });
      setMessage(data.message);
    } catch (err) {
      const apiError = err as ForgotPasswordResponse;

      if (apiError.errors) {
        setForgotErrors(apiError.errors);
        setError("Lütfen e-posta adresinizi kontrol edin.");
      } else {
        setError(apiError.message || "Şifre sıfırlama sırasında hata oluştu.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-template">
      <main className="login-layout">
        <section className="login-showcase">
          <div className="login-showcase__image" />
          <div className="login-showcase__overlay" />
          <div className="login-showcase__content">
            <div className="login-showcase__copy">
              <h2>Hasatın bereketine ortak olmaya devam edin.</h2>
              <p>
                Yerel üreticilerle doğrudan bağ kurun, sofranıza en taze ve doğal
                ürünleri getirin. Tarladan Sat topluluğuna tekrar hoş geldiniz.
              </p>
            </div>

            <div className="login-showcase__proof">
              <div className="login-showcase__avatars" aria-hidden="true">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl_K1CQogFJEkvJdG8eALZWHShYH8DsS0rXgnHedDMOiJPmcy-wUPXRe4H4xNStut5k1vghGFf4RclKY6aETnOlw96hu4k6fTQ7Vtgofo6FFwLVDxRFxEra8GzhIJ-LY2CYSc4E4G_5hA7j_tC2C7O5xv-77JMg1lmpWdQuNycnThN-JCmT2mQ6drULz9sg7ZEgN8G0jGd7ByV9tjpIRvyu0XHT_qDEZuoIF9Z8hmIDqI5F93RLngzSUmX4bnonL3eoxt0T5UdrbE"
                  alt=""
                />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASmOc_Ngr18BoneID6xuTM_MWgmFhbzYlSaYr2xqVYM6RlxDvFO_l4q-zNCbFnKR5RGBiqpE4obmK0bcwddJGOWsrr9jeEzL3GdzXHRbFKTSFtD58au-WvRKuTH9qEs7LvzQfUIE3LfMWPtT4kkjXc4LhANGklupiEfBhZAo0Zbdf39omhXQVyoVy8Fxfpc8JF7QjC-fBY1EZwUeUYF6VWhQLo_AW_6iKLVrSlV3AXRKNSzXchhcpEK8ymP_9bR24L5z6hi9Sm41k"
                  alt=""
                />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY3ppTzDrOJPY7AKX7dpx70SyNS5qY8U2N2tZmBF3aPr258PE_2J2v5LY_3p_BhjdkVdZWz2OvANqMGGIp01pky0tUEPj9j8rwWJD10SCOFxIObws_1VGcg7Wp77Hf2zbVuqq3wIthF6xnzc8YUYHqHlCzaNJsW6kfAnOoCJsz54cyeV7RAf5WpXHgRZdkh1reSxMCsf4GRZIteHS5mnFBTPtkx-fDEVA-xrNswDLAEA9DlJDXkiLGEPISis8QblONto-id9wr4Z4"
                  alt=""
                />
              </div>
              <span>+2k Aktif Üretici</span>
            </div>
          </div>
        </section>

        <section className="login-panel">
          <div className="login-panel__inner login-panel__inner--spacious">
            <div className="login-panel__header">
              <h1>{isForgotPasswordMode ? "Şifrenizi Sıfırlayın" : "Giriş Yap"}</h1>
              <p>
                {isForgotPasswordMode
                  ? "E-posta adresinizi girin, şifre sıfırlama bağlantısını size gönderelim."
                  : "Tarladan en taze ürünlere ulaşmak için hesabınıza erişin."}
              </p>
            </div>

            <form
              className="login-form"
              onSubmit={isForgotPasswordMode ? handleForgotPassword : handleLogin}
            >
              <label className="login-field">
                <span className="login-field__label">E-posta Adresi</span>
                <div className="login-field__control">
                  <span className="login-field__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 6h16v12H4z" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="ornek@tarladansat.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {(isForgotPasswordMode ? forgotErrors.email : errors.email) && (
                  <small className="field-error">
                    {(isForgotPasswordMode ? forgotErrors.email : errors.email)?.[0]}
                  </small>
                )}
              </label>

              {!isForgotPasswordMode && (
                <>
                  <label className="login-field">
                    <span className="login-field__label">Şifre</span>
                    <div className="login-field__control">
                      <span className="login-field__icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <rect x="5" y="11" width="14" height="10" rx="2" />
                          <path d="M8 11V8a4 4 0 1 1 8 0v3" />
                        </svg>
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        className="login-field__toggle"
                        onClick={() => setShowPassword((value) => !value)}
                      >
                        {showPassword ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                            <path d="M3 3l18 18" />
                            <path d="M10.6 10.7a2 2 0 0 0 2.8 2.8" />
                            <path d="M9.4 5.5A10.7 10.7 0 0 1 12 5c5.5 0 9.5 5.5 9.5 7s-1.6 3.7-4.1 5.2" />
                            <path d="M6.2 6.2C3.9 7.8 2.5 10.2 2.5 12c0 1.5 4 7 9.5 7 1.7 0 3.2-.5 4.5-1.2" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                            <path d="M2.5 12S6.5 5 12 5s9.5 7 9.5 7-4 7-9.5 7S2.5 12 2.5 12Z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <div className="login-field__meta">
                      <button
                        type="button"
                        className="login-field__help login-field__help-button"
                        onClick={() => {
                          setIsForgotPasswordMode(true);
                          setError("");
                          setMessage("");
                          setErrors({});
                          setForgotErrors({});
                        }}
                      >
                        Şifremi Unuttum
                      </button>
                    </div>
                    {errors.password && (
                      <small className="field-error">{errors.password[0]}</small>
                    )}
                  </label>

                  <label className="login-remember">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <span>Beni hatırla</span>
                  </label>
                </>
              )}

              {(message || error) && (
                <div
                  className={`signup-status ${
                    error ? "signup-status--error" : "signup-status--success"
                  }`}
                >
                  <span aria-hidden="true">{error ? "!" : "✓"}</span>
                  <span>{error || message}</span>
                </div>
              )}

              <div className="login-form__actions">
                <button
                  type="submit"
                  className="login-submit-button"
                  disabled={loading}
                >
                  <span>
                    {loading
                      ? isForgotPasswordMode
                        ? "Gönderiliyor..."
                        : "Giriş Yapılıyor..."
                      : isForgotPasswordMode
                        ? "Sıfırlama Bağlantısı Gönder"
                        : "Giriş Yap"}
                  </span>
                  <span aria-hidden="true" className="login-submit-button__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </button>

                {!isForgotPasswordMode && (
                  <>
                    <div className="login-divider">
                      <span />
                      <p>veya şununla devam et</p>
                      <span />
                    </div>

                    <div className="login-socials login-socials--single">
                      <button type="button" className="login-social-button">
                        <img
                          src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                          alt=""
                        />
                        Google
                      </button>
                    </div>
                  </>
                )}
              </div>
            </form>

            <div className="login-panel__footer login-panel__footer--spacious">
              {isForgotPasswordMode ? (
                <p>
                  Şifrenizi hatırladınız mı?
                  <button
                    type="button"
                    className="login-panel__text-button"
                    onClick={() => {
                      setIsForgotPasswordMode(false);
                      setError("");
                      setMessage("");
                      setForgotErrors({});
                    }}
                  >
                    Giriş Ekranına Dön
                  </button>
                </p>
              ) : (
                <p>
                  Henüz hesabınız yok mu?
                  <a href={ROUTES.register}>Kayıt Ol</a>
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="login-mobile-footer">
        <div className="login-mobile-footer__inner">
          <span className="login-mobile-footer__brand">Tarladan Sat</span>
          <p>© 2024 Tarladan Sat. Yerel Üretimin Gücü.</p>
          <div className="login-mobile-footer__links">
            <a href={ROUTES.howItWorks}>Hakkımızda</a>
            <a href={ROUTES.howItWorks}>Güven ve Doğrulama</a>
            <a href={ROUTES.howItWorks}>İletişim</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;
