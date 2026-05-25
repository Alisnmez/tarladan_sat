import { useEffect, useState } from "react";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import HowItWorksPage from "../features/how-it-works/pages/HowItWorksPage";
import HomePage from "../features/home/pages/HomePage";
import ProductsPage from "../features/discover/pages/ProductsPage";
import { isAuthenticated } from "../features/auth/authSession";
import { checkAuth } from "../features/auth/services/checkAuth";

type AppPage = "login" | "register" | "how-it-works" | "home" | "discover";

function getCurrentPage(): AppPage {
  const hash = window.location.hash;

  if (hash === "#/home") {
    return isAuthenticated() ? "home" : "login";
  }

  if (hash === "#/discover") {
    return "discover";
  }

  if (hash === "#/register") {
    return "register";
  }

  if (hash === "#/how-it-works") {
    return "how-it-works";
  }

  if (hash === "" || hash === "#/") {
    return isAuthenticated() ? "home" : "login";
  }

  return "login";
}

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>(getCurrentPage());
  const [authChecked, setAuthChecked] = useState(false);
  useEffect(() => {
    async function bootstrapAuth() {
      await checkAuth();
  
      setCurrentPage(getCurrentPage());
  
      setAuthChecked(true);
    }
  
    bootstrapAuth();
  }, []);
 
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getCurrentPage());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  
  if (!authChecked) {
    return <div>Loading...</div>;
  }
  if (currentPage === "home") {
    return <HomePage />;
  }

  if (currentPage === "discover") {
    return <ProductsPage />;
  }

  if (currentPage === "how-it-works") {
    return <HowItWorksPage />;
  }

  if (currentPage === "register") {
    return <RegisterPage />;
  }

  return <LoginPage />;
}

export default App;
