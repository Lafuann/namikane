import { Icon } from "@/components/ui/icon";
import { Brand } from "./brand";

export function Topbar() {
  return (
    <header className="topbar">
      <Brand mobile />
      <div className="topbar-date"><span className="date-indicator" /> Senin, 2 November 2026</div>
      <div className="topbar-actions">
        <button className="icon-button notification-button" type="button" aria-label="Notifikasi">
          <Icon name="bell" size={19} /><span />
        </button>
        <div className="topbar-avatar" aria-label="Profil Adi">A</div>
      </div>
    </header>
  );
}
