import { useState } from "react";
import "../../../App.css";
import { registerRequest } from "../api";
import type { RegisterResponse } from "../types";

type RegisterErrors = NonNullable<RegisterResponse["errors"]>;

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<RegisterErrors>({});

  const passwordsMatch =
    password.length > 0 &&
    passwordConfirmation.length > 0 &&
    password === passwordConfirmation;

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
        password,
        password_confirmation: passwordConfirmation,
      });

      setMessage(data.message || "Kayıt başarılı.");
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
    <main className="register-shell">
      <section className="register-hero">
        <span className="register-badge">Tarladan Sat</span>
        <h1>Üreticiden sofraya uzanan yolculuğa katılın.</h1>
        <p>
          Satıcı hesabınızı oluşturun, ürünlerinizi yönetin ve doğal üretiminizi
          daha fazla kişiye ulaştırın.
        </p>

        <div className="hero-points">
          <div>
            <strong>Hızlı başlangıç</strong>
            <span>Birkaç adımda hesabınızı oluşturup yayına geçin.</span>
          </div>
          <div>
            <strong>Güvenli hesap</strong>
            <span>Şifre doğrulamasıyla daha güvenli bir kayıt akışı.</span>
          </div>
        </div>
      </section>

      <section className="register-card">
        <div className="register-card__header">
          <h2>Kayıt Ol</h2>
          <p>Yeni hesabınızı oluşturmak için bilgilerinizi girin.</p>
        </div>

        <form className="register-form" onSubmit={handleRegister}>
          <label className="field">
            <span>Ad</span>
            <input
              type="text"
              placeholder="Örn. Ayşe"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.first_name && (
              <small className="field-error">{errors.first_name[0]}</small>
            )}
          </label>

          <label className="field">
            <span>Soyad</span>
            <input
              type="text"
              placeholder="Örn. Yılmaz"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.last_name && (
              <small className="field-error">{errors.last_name[0]}</small>
            )}
          </label>

          <label className="field">
            <span>E-posta</span>
            <input
              type="email"
              placeholder="ornek@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <small className="field-error">{errors.email[0]}</small>
            )}
          </label>

          <label className="field">
            <span>Şifre</span>
            <input
              type="password"
              placeholder="En az 8 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <small className="field-error">{errors.password[0]}</small>
            )}
          </label>

          <label className="field">
            <span>Şifre Tekrar</span>
            <input
              type="password"
              placeholder="Şifrenizi yeniden girin"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </label>

          <div className="form-meta">
            <span
              className={passwordsMatch ? "status status--success" : "status"}
            >
              {password.length === 0 && passwordConfirmation.length === 0
                ? "Şifrenizi belirleyin"
                : passwordsMatch
                  ? "Şifreler eşleşiyor"
                  : "Şifreler henüz eşleşmiyor"}
            </span>
            <span className="meta-note">
              Bilgileriniz güvenli biçimde saklanır.
            </span>
          </div>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="register-button" disabled={loading}>
            {loading ? "Kaydediliyor..." : "Hesap Oluştur"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default RegisterPage;
