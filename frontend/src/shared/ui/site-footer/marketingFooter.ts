import { ROUTES } from "../../../app/routes";
import type { FooterSection } from "./SiteFooter";

export const MARKETING_FOOTER_CLASS_NAME = "site-footer--marketing";

export const marketingFooterBrandDescription =
  "© 2024 Tarladan Sat. Anadolu'nun bereketi, sofranızın lezzeti.";

export const marketingFooterSections: FooterSection[] = [
  {
    title: "Platform",
    links: [
      { href: ROUTES.howItWorks, label: "Hakkımızda" },
      { href: ROUTES.howItWorks, label: "Sürdürülebilirlik" },
      { href: ROUTES.register, label: "Üretici Ol" },
      { href: ROUTES.howItWorks, label: "İletişim" },
      { href: ROUTES.howItWorks, label: "Kullanım Koşulları" },
    ],
  },
];
