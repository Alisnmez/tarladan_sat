import { ROUTES } from "../../../app/routes";
import type { FooterSection, FooterSocialLink } from "./SiteFooter";

export const GLOBAL_FOOTER_CLASS_NAME = "site-footer--global";

export const globalFooterBrandDescription =
  "Yerel üretimin gücünü dijital dünyanın imkanlarıyla birleştiriyoruz.";

export const globalFooterSocialLinks: FooterSocialLink[] = [
  { href: ROUTES.home, label: "Web sitesi", icon: "public" },
  { href: ROUTES.home, label: "E-posta", icon: "alternate_email" },
];

export const globalFooterSections: FooterSection[] = [
  {
    title: "Kurumsal",
    links: [
      { href: ROUTES.howItWorks, label: "Hakkımızda" },
      { href: ROUTES.howItWorks, label: "Güven ve Doğrulama" },
      { href: ROUTES.howItWorks, label: "Blog" },
    ],
  },
  {
    title: "Yardım",
    links: [
      { href: ROUTES.howItWorks, label: "Kullanım Koşulları" },
      { href: ROUTES.howItWorks, label: "KVKK" },
      { href: ROUTES.howItWorks, label: "İletişim" },
    ],
  },
  {
    title: "Bülten",
    description: "Yeni hasat dönemlerinden ve özel indirimlerden haberdar olun.",
    newsletter: {
      placeholder: "E-posta adresi",
      buttonLabel: "Katıl",
    },
  },
];

export const globalFooterBottomText = "© 2024 Tarladan Sat. Yerel Üretimin Gücü.";
