import { useEffect, useState } from "react";
import RegisterPage from "../features/auth/pages/RegisterPage";
import LoginPage from "../features/auth/pages/LoginPage";
import HowItWorksPage from "../features/how-it-works/pages/HowItWorksPage";
import HomePage from "../features/home/pages/HomePage";
import ProductsPage from "../features/discover/pages/ProductsPage";
import ProductDetailPage from "../features/product-detail/pages/ProductDetailPage";
import PublicLandingPage from "../features/landing/pages/PublicLandingPage";
import ProducersPage from "../features/producers/pages/ProducersPage";
import ProducerDetailPage from "../features/producer-detail/pages/ProducerDetailPage";
import RequestManagementPage from "../features/requests/pages/RequestManagementPage";
import MyRequestsPage from "../features/my-requests/pages/MyRequestsPage";
import StorePanelPage from "../features/store-panel/pages/StorePanelPage";
import SettingsPage from "../features/settings/pages/SettingsPage";
import { getAuthSession, isAuthenticated , getAuthRole } from "../features/auth/authSession";
import { checkAuth } from "../features/auth/services/checkAuth";
import SiteNavbar from "../features/layout/SiteNavbar";
import type { NavPage } from "../features/layout/SiteNavbar";
import {
  ROUTES,
  buildLoginRedirectPath,
  navigateTo,
  normalizePath,
  pathFromLegacyHash,
} from "./routes";

type AppPage =
  | "landing"
  | "login"
  | "register"
  | "how-it-works"
  | "home"
  | "discover"
  | "product-detail"
  | "producers"
  | "producer-detail"
  | "request-management"
  | "my-requests"
  | "stall"
  | "settings";

function getCurrentPage(): AppPage {
  const legacyPath = pathFromLegacyHash(window.location.hash);
  const path = normalizePath(legacyPath ?? window.location.pathname);

  const role = getAuthRole();

  if(path == ROUTES.stall){
    if(!isAuthenticated()){
      return "login";
    }
    if(role !== "seller"){
      return "home";
    }

    return "stall";
  }

  console.log(role);

  if (path === ROUTES.login) {
    return "login";
  }

  if (path === ROUTES.home) {
    return isAuthenticated() ? "home" : "landing";
  }

  if (path === ROUTES.discover) {
    return "discover";
  }

  if (path.startsWith("/urun/")) {
    return "product-detail";
  }

  if (path === ROUTES.register) {
    return "register";
  }

  if (path === ROUTES.producers) {
    return "producers";
  }

  if (path.startsWith("/satici/")) {
    return "producer-detail";
  }

  if (path === ROUTES.howItWorks) {
    return "how-it-works";
  }

  if (path === ROUTES.requestManagement) {
    return "request-management";
  }

  if (path === ROUTES.myRequests) {
    return "my-requests";
  }

  if (path === ROUTES.settings) {
    return "settings";
  }

  if (path === ROUTES.landing) {
    return isAuthenticated() ? "home" : "landing";
  }

  return isAuthenticated() ? "home" : "landing";
}

function guardProtectedDetailRoutes() {
  const path = normalizePath(window.location.pathname);

  if (isAuthenticated()) {
    return false;
  }

  if (path.startsWith("/urun/") || path.startsWith("/satici/")) {
    navigateTo(buildLoginRedirectPath(path), true);
    return true;
  }

  return false;
}

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>(getCurrentPage());
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const legacyPath = pathFromLegacyHash(window.location.hash);

    if (legacyPath) {
      window.history.replaceState({}, "", legacyPath);
    }

    async function bootstrapAuth() {
      await checkAuth();

      if (guardProtectedDetailRoutes()) {
        setAuthChecked(true);
        return;
      }

      setCurrentPage(getCurrentPage());

      setAuthChecked(true);
    }

    bootstrapAuth();
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      if (guardProtectedDetailRoutes()) {
        setCurrentPage("login");
        return;
      }

      setCurrentPage(getCurrentPage());
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  const authUser = getAuthSession();
  const userDisplayName = authUser
    ? `${authUser.first_name} ${authUser.last_name}`
    : "Hesabım";

  const activePageMap: Partial<Record<AppPage, NavPage>> = {
    landing: "home",
    home: "home",
    discover: "discover",
    "product-detail": "discover",
    producers: "producers",
    "producer-detail": "producers",
    "how-it-works": "how-it-works",
  };

  let pageContent = <PublicLandingPage />;

  if (currentPage === "landing") {
    pageContent = <PublicLandingPage />;
  } else if (currentPage === "login") {
    pageContent = <LoginPage />;
  } else if (currentPage === "home") {
    pageContent = <HomePage />;
  } else if (currentPage === "discover") {
    pageContent = <ProductsPage />;
  } else if (currentPage === "product-detail") {
    pageContent = <ProductDetailPage />;
  } else if (currentPage === "producers") {
    pageContent = <ProducersPage />;
  } else if (currentPage === "producer-detail") {
    pageContent = <ProducerDetailPage />;
  } else if (currentPage === "request-management") {
    pageContent = <RequestManagementPage />;
  } else if (currentPage === "my-requests") {
    pageContent = <MyRequestsPage />;
  } else if (currentPage === "stall") {
    pageContent = <StorePanelPage />;
  } else if (currentPage === "settings") {
    pageContent = <SettingsPage />;
  } else if (currentPage === "how-it-works") {
    pageContent = <HowItWorksPage />;
  } else if (currentPage === "register") {
    pageContent = <RegisterPage />;
  }

  return (
    <>
      <SiteNavbar
        activePage={activePageMap[currentPage]}
        userAccountChip
        userDisplayName={userDisplayName}
      />
      {pageContent}
    </>
  );
}

export default App;
