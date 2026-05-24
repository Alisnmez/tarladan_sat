import SiteNavbar from "../../layout/SiteNavbar";

function ProductsPage() {
  return (
    <div style={{ minHeight: "100svh", background: "#fcf9f8" }}>
      <SiteNavbar activePage="discover" />
      <main style={{ paddingTop: 100, padding: "100px 24px 48px", maxWidth: 720, margin: "0 auto" }}>
        <h1 style={{ color: "#154212", marginBottom: 12 }}>Ürün Keşfet</h1>
        <p style={{ color: "#42493e", lineHeight: 1.6 }}>
          Ürün listeleme sayfası yakında burada olacak. Anasayfadan arama yaparak
          öne çıkan ürünleri inceleyebilirsiniz.
        </p>
        <a href="#/home" style={{ color: "#154212", fontWeight: 700 }}>
          ← Anasayfaya dön
        </a>
      </main>
    </div>
  );
}

export default ProductsPage;
