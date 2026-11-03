import { Icon } from "@/components/ui/icon";
import { navigation } from "@/features/dashboard/data/dashboard-data";
import { Brand } from "./brand";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <Brand />
      <p className="sidebar-label">MENU UTAMA</p>
      <nav className="sidebar-nav" aria-label="Navigasi utama">
        {navigation.map((item, index) => (
          <a className={`nav-link${index === 0 ? " active" : ""}`} href={item.href} key={item.label}>
            <Icon name={item.icon} size={19} />
            <span>{item.label}</span>
            {index === 0 && <span className="nav-active-dot" />}
          </a>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="sidebar-note">
          <span className="note-kana">今日</span>
          <p>Pelan-pelan, yang penting tercatat.</p>
          <span className="note-caption">Satu langkah kecil setiap hari</span>
        </div>
        <a className="nav-link settings-link" href="#settings">
          <Icon name="settings" size={19} />
          <span>Pengaturan</span>
        </a>
        <div className="profile-row">
          <div className="avatar">A</div>
          <div><strong>Adi Pratama</strong><span>Personal</span></div>
          <button className="icon-button profile-more" type="button" aria-label="Menu profil">
            <Icon name="dots" size={19} />
          </button>
        </div>
      </div>
    </aside>
  );
}
