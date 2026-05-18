import { useState } from "react";
import type {
  ContactResponse,
  ContactValidationErrorResponse,
  ContactValidationErrors,
} from "./shared/types/api";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [veri, setVeri] = useState<ContactResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<ContactValidationErrors | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    setError(null);
    setErrors(null);
    setVeri(null);
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        message,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      const errorData:ContactValidationErrorResponse = data;
      setError(errorData.message || "Bir hata oluştu");
      setErrors(errorData.errors || null);
      return;
    }
    setVeri(data);



  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Tarladan Sat</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="İsim"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
{errors?.name && <p>{errors.name[0]}</p>}
        <br />
        <br />

        <textarea
          placeholder="Mesaj"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
{errors?.message && <p>{errors.message[0]}</p>}
        <br />
        <br />

        <button type="submit">Gönder</button>
      </form>

      <br />

      <p>{veri?.data?.name}</p>
      <p>{veri?.data?.message}</p>

      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
