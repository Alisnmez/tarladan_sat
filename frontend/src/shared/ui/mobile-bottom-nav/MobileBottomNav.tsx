export type MobileBottomNavItem = {
  href: string;
  label: string;
  icon: string;
  active?: boolean;
};

type MobileBottomNavProps = {
  items: MobileBottomNavItem[];
  className?: string;
};

function MobileBottomNav({ items, className = "" }: MobileBottomNavProps) {
  return (
    <nav className={`mobile-bottom-nav ${className}`.trim()} aria-label="Mobil alt menü">
      {items.map((item) => (
        <a
          key={`${item.href}-${item.label}`}
          href={item.href}
          className={item.active ? "mobile-bottom-nav__item mobile-bottom-nav__item--active" : "mobile-bottom-nav__item"}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

export default MobileBottomNav;
