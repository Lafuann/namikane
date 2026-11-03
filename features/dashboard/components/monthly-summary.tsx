import { Icon } from "@/components/ui/icon";

export function MonthlySummary() {
  return (
    <section className="stats-grid" aria-label="Ringkasan bulanan">
      <article className="stat-card">
        <div className="stat-top"><span className="stat-icon income-stat"><Icon name="arrow-down" size={17} /></span><span className="stat-trend positive">↗ 8,2%</span></div>
        <span className="stat-label">Pemasukan bulan ini</span>
        <strong className="stat-amount">Rp 8.750.000</strong>
        <span className="stat-footnote">Dari 3 sumber pemasukan</span>
      </article>
      <article className="stat-card">
        <div className="stat-top"><span className="stat-icon expense-stat"><Icon name="arrow-up" size={17} /></span><span className="stat-trend neutral">↘ 4,1%</span></div>
        <span className="stat-label">Pengeluaran bulan ini</span>
        <strong className="stat-amount">Rp 3.240.500</strong>
        <span className="stat-footnote">37% dari pemasukan</span>
      </article>
    </section>
  );
}
