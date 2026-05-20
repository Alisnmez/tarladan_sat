import { useState, useEffect } from "react";
import type {
  ContactResponse,
  ContactValidationErrorResponse,
  ContactValidationErrors,
  Contact,
} from "./shared/types/api";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [veri, setVeri] = useState<ContactResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<ContactValidationErrors | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [contactsError, setContactsError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [isContactsLoading, setIsContactsLoading] = useState(false);

  useEffect(() => {
    async function getContacts() {
  setIsContactsLoading(true);
  setContactsError(null);

  await new Promise((resolve) => setTimeout(resolve, 600));

  try {
    const response = await fetch("http://127.0.0.1:8000/api/contacts");

    if (!response.ok) {
      setContactsError("Veriler yüklenirken bir hata oluştu");
      return;
    }

    const data: Contact[] = await response.json();

    setContacts(data);
  } catch {
    setContactsError("Sunucuya bağlanırken bir hata oluştu");
  }

  setIsContactsLoading(false);
}

    getContacts();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError(null);
    setErrors(null);
    setVeri(null);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
      const errorData: ContactValidationErrorResponse = data;
      setError(errorData.message || "Bir hata oluştu");
      setErrors(errorData.errors || null);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setVeri(data);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Tarladan Sat</h1>

      <form onSubmit={handleSubmit}>
        {isContactsLoading && <p>Yükleniyor...</p>}
        {contactsError && <p>{contactsError}</p>}
        {contacts.map((contact) => (
          <div key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.message}</p>

            <br />
          </div>
        ))}
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

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Gönderiliyor..." : "Gönder"}
        </button>
      </form>

      <br />

      <p>{veri?.data?.name}</p>
      <p>{veri?.data?.message}</p>

      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
