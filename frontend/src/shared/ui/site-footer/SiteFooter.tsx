import type { ReactNode } from "react";

export type FooterLink = {
  href: string;
  label: string;
};

export type FooterSocialLink = {
  href: string;
  label: string;
  icon: string;
};

export type FooterNewsletter = {
  description?: string;
  placeholder: string;
  buttonLabel?: string;
  buttonIcon?: string;
};

export type FooterSection = {
  title: string;
  description?: string;
  links?: FooterLink[];
  newsletter?: FooterNewsletter;
  content?: ReactNode;
};

type SiteFooterProps = {
  brandTitle?: string;
  brandDescription: string;
  socialLinks?: FooterSocialLink[];
  sections?: FooterSection[];
  bottomText?: string;
  className?: string;
};

function SiteFooter({
  brandTitle = "Tarladan Sat",
  brandDescription,
  socialLinks = [],
  sections = [],
  bottomText,
  className = "",
}: SiteFooterProps) {
  return (
    <footer className={`site-footer ui-footer ${className}`.trim()}>
      <div className="site-footer__container ui-footer__container">
        <div className="site-footer__brand">
          <span className="ui-footer__brand-title">{brandTitle}</span>
          <p>{brandDescription}</p>
          {socialLinks.length > 0 ? (
            <div className="site-footer__socials">
              {socialLinks.map((link) => (
                <a key={`${link.label}-${link.icon}`} href={link.href} aria-label={link.label}>
                  <span className="material-symbols-outlined">{link.icon}</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {sections.length > 0 ? (
          <div className="site-footer__sections">
            {sections.map((section) => (
              <div key={section.title} className="site-footer__section">
                <h4>{section.title}</h4>
                {section.description ? <p>{section.description}</p> : null}

                {section.links?.length ? (
                  <div className="site-footer__links">
                    {section.links.map((link) => (
                      <a key={`${section.title}-${link.label}`} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}

                {section.newsletter ? (
                  <form
                    className="site-footer__newsletter"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <input
                      type="email"
                      placeholder={section.newsletter.placeholder}
                      aria-label={section.newsletter.placeholder}
                    />
                    <button type="submit" aria-label={section.newsletter.buttonLabel ?? "Gönder"}>
                      {section.newsletter.buttonIcon ? (
                        <span className="material-symbols-outlined">
                          {section.newsletter.buttonIcon}
                        </span>
                      ) : (
                        section.newsletter.buttonLabel ?? "Gönder"
                      )}
                    </button>
                  </form>
                ) : null}

                {section.content}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {bottomText ? (
        <div className="site-footer__bottom ui-footer__bottom">
          <p>{bottomText}</p>
        </div>
      ) : null}
    </footer>
  );
}

export default SiteFooter;
