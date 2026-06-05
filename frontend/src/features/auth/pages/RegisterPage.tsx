import { useEffect, useRef, useState } from "react";
import "../../../App.css";
import { ROUTES, navigateTo } from "../../../app/routes";
import { registerRequest } from "../api";
import type { RegisterResponse } from "../types";

type RegisterErrors = NonNullable<RegisterResponse["errors"]>;

const CITY_OPTIONS = [
  { value: "istanbul", label: "İstanbul" },
  { value: "ankara", label: "Ankara" },
  { value: "izmir", label: "İzmir" },
  { value: "antalya", label: "Antalya" },
  { value: "bursa", label: "Bursa" },
];

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState<"buyer" | "seller">("buyer");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const redirectTimeoutRef = useRef<number | null>(null);

  const passwordsMatch =
    password.length > 0 &&
    passwordConfirmation.length > 0 &&
    password === passwordConfirmation;

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        window.clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, []);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");
    setErrors({});

    try {
      const data = await registerRequest({
        first_name: firstName,
        last_name: lastName,
        email,
        city,
        role,
        password,
        password_confirmation: passwordConfirmation,
      });

      setMessage(data.message || "Kayıt başarılı.");
      redirectTimeoutRef.current = window.setTimeout(() => {
        navigateTo(ROUTES.login);
      }, 1500);
    } catch (err) {
      const apiError = err as RegisterResponse;

      if (apiError.errors) {
        setErrors(apiError.errors);
        setError("Lütfen form alanlarını kontrol edin.");
      } else {
        setError(apiError.message || "Kayıt sırasında hata oluştu.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-template">
      <main className="signup-screen">
      <section className="signup-visual">
        <div className="signup-visual__image" />
        <div className="signup-visual__overlay" />
        <div className="signup-visual__content">
          <div className="signup-brand">Tarladan Sat</div>

          <div className="signup-visual__copy">
            <h1>Yerel üretimin parçası olun</h1>
            <p>
              Doğrudan tarladan sofraya bir köprü kuruyoruz. Toprağın
              bereketini paylaşan üretici ve bilinçli tüketiciler arasına
              katılın.
            </p>
          </div>

          <div className="signup-proof">
            <div className="signup-proof__avatars" aria-hidden="true">
              <span className="signup-proof__avatar signup-proof__avatar--one" />
              <span className="signup-proof__avatar signup-proof__avatar--two" />
              <span>+12k</span>
            </div>
            <p>Üreticilerimiz tarafından desteklenen topluluğa katılın</p>
          </div>
        </div>
      </section>

      <section className="signup-panel">
        <div className="signup-panel__inner">
          <a href={ROUTES.login} className="signup-back-link">
            <span aria-hidden="true">←</span>
            Ana Sayfaya Dön
          </a>

          <div className="signup-panel__header">
            <h2>Hesap Oluşturun</h2>
            <p>Tazeliğin yolculuğuna bugün başlayın.</p>
          </div>

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

          <form className="signup-form" onSubmit={handleRegister}>
            <div className="signup-form__row signup-form__row--double">
              <label className="signup-field">
                <span>Ad</span>
                <input
                  type="text"
                  placeholder="Örn: Ahmet"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.first_name && (
                  <small className="field-error">{errors.first_name[0]}</small>
                )}
              </label>

              <label className="signup-field">
                <span>Soyad</span>
                <input
                  type="text"
                  placeholder="Örn: Yılmaz"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.last_name && (
                  <small className="field-error">{errors.last_name[0]}</small>
                )}
              </label>
            </div>

            <label className="signup-field">
              <span>E-posta</span>
              <input
                type="email"
                placeholder="ahmet@ornek.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <small className="field-error">{errors.email[0]}</small>
              )}
            </label>

            <label className="signup-field">
              <span>Şehir</span>
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="" disabled>
                  Lütfen şehir seçin
                </option>
                {CITY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.city && (
                <small className="field-error">{errors.city[0]}</small>
              )}
            </label>

            <div className="signup-role-group">
              <span className="signup-role-group__label">Kullanıcı Tipi</span>
              <div className="signup-role-grid">
                <label
                  className={`signup-role-card ${
                    role === "buyer" ? "signup-role-card--active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="buyer"
                    checked={role === "buyer"}
                    onChange={() => setRole("buyer")}
                  />
                  <strong>Alıcı</strong>
                  <span>Ürünleri keşfet ve güvenle satın al.</span>
                </label>

                <label
                  className={`signup-role-card ${
                    role === "seller" ? "signup-role-card--active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value="seller"
                    checked={role === "seller"}
                    onChange={() => setRole("seller")}
                  />
                  <strong>Satıcı</strong>
                  <span>Ürünlerini listele ve topluluğa ulaş.</span>
                </label>
              </div>
              {errors.role && (
                <small className="field-error">{errors.role[0]}</small>
              )}
            </div>

            <div className="signup-form__row signup-form__row--double">
              <label className="signup-field">
                <span>Şifre</span>
                <input
                  type="password"
                  placeholder="En az 8 karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small className="field-error">
                  {errors.password?.[0] ?? "\u00A0"}
                </small>
              </label>

              <label className="signup-field">
                <span>Şifre Tekrar</span>
                <input
                  type="password"
                  placeholder="Şifrenizi yeniden girin"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <small className="field-error">
                  {errors.password_confirmation?.[0] ?? "\u00A0"}
                </small>
              </label>
            </div>

            <div className="signup-form__footer">
              <span
                className={`signup-password-hint ${
                  passwordsMatch ? "signup-password-hint--success" : ""
                }`}
              >
                {password.length === 0 && passwordConfirmation.length === 0
                  ? "Şifrenizi belirleyin"
                  : passwordsMatch
                  ? "Şifreler eşleşiyor"
                    : "Şifreler henüz eşleşmiyor"}
              </span>
            </div>

            <button
              type="submit"
              className="signup-submit-button"
              disabled={loading}
            >
              <span>{loading ? "İşleniyor..." : "Kaydı Tamamla"}</span>
              <span aria-hidden="true">→</span>
            </button>

            <p className="signup-switch">
              Zaten bir hesabın var mı?
              <a href={ROUTES.login}>Giriş Yap</a>
            </p>
          </form>

          <div className="signup-legal">
            <p>
              Kaydolurken Kullanım Koşullarını ve Gizlilik Politikasını kabul
              etmiş olursunuz.
            </p>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}

export default RegisterPage;
