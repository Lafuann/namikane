import { Icon } from "@/components/ui/icon";
import { navigation } from "@/features/dashboard/data/dashboard-data";

export function MobileNav() {
  return (
    <nav className="mobile-nav" aria-label="Navigasi bawah">
      {navigation.map((item, index) => (
        <a className={`mobile-nav-link${index === 0 ? " active" : ""}`} href={item.href} key={item.label}>
          <Icon name={item.icon} size={20} />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
