export const ROUTES = {
  landing: "/",
  home: "/anasayfa",
  discover: "/urun-kesfet",
  register: "/kayit-ol",
  login: "/giris-yap",
  producers: "/ureticiler",
  producerDetail: "/satici/mehmet-yilmaz-ciftligi",
  howItWorks: "/nasil-calisir",
  requestManagement: "/talep-yonetimi",
  myRequests: "/taleplerim",
  stall: "/tezgahim",
  settings: "/ayarlar",
  productDetail: "/urun/domates-izmir-123",
} as const;

export function normalizePath(pathname: string) {
  if (!pathname || pathname === "") {
    return "/";
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function pathFromLegacyHash(hash: string) {
  const legacyMap: Record<string, string> = {
    "#/": ROUTES.landing,
    "#/anasayfa": ROUTES.home,
    "#/home": ROUTES.home,
    "#/urun-kesfet": ROUTES.discover,
    "#/discover": ROUTES.discover,
    "#/urun-detayi": ROUTES.productDetail,
    "#/product-detail": ROUTES.productDetail,
    "#/kayit-ol": ROUTES.register,
    "#/register": ROUTES.register,
    "#/giris-yap": ROUTES.login,
    "#/ureticiler": ROUTES.producers,
    "#/producers": ROUTES.producers,
    "#/satici-detayi": ROUTES.producerDetail,
    "#/producer-detail": ROUTES.producerDetail,
    "#/nasil-calisir": ROUTES.howItWorks,
    "#/how-it-works": ROUTES.howItWorks,
    "#/talep-yonetimi": ROUTES.requestManagement,
    "#/request-management": ROUTES.requestManagement,
    "#/taleplerim": ROUTES.myRequests,
    "#/my-requests": ROUTES.myRequests,
    "#/tezgahim": ROUTES.stall,
    "#/magaza-paneli": ROUTES.stall,
    "#/store-panel": ROUTES.stall,
    "#/ayarlar": ROUTES.settings,
    "#/settings": ROUTES.settings,
  };

  return legacyMap[hash] ?? null;
}

export function navigateTo(path: string, replace = false) {
  const method = replace ? "replaceState" : "pushState";
  window.history[method]({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function buildLoginRedirectPath(targetPath: string) {
  const safeTarget = normalizePath(targetPath);
  return `${ROUTES.login}?redirect=${encodeURIComponent(safeTarget)}`;
}

export function getRedirectTargetFromLocation() {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");

  if (!redirect || !redirect.startsWith("/")) {
    return null;
  }

  return normalizePath(redirect);
}
