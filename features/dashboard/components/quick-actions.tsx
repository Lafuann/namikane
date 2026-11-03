import { Icon } from "@/components/ui/icon";

export function QuickActions() {
  return (
    <section className="quick-actions" aria-label="Aksi cepat">
      <a className="quick-action income-action" href="#transactions">
        <span className="quick-icon"><Icon name="arrow-down" size={18} /></span>
        <span><strong>Pemasukan</strong><small>Tambah uang masuk</small></span>
        <Icon name="chevron" size={16} />
      </a>
      <span className="quick-divider" />
      <a className="quick-action expense-action" href="#transactions">
        <span className="quick-icon"><Icon name="arrow-up" size={18} /></span>
        <span><strong>Pengeluaran</strong><small>Catat uang keluar</small></span>
        <Icon name="chevron" size={16} />
      </a>
    </section>
  );
}
