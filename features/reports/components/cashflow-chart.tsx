import { Icon } from "@/components/ui/icon";
import { monthlyBars } from "@/features/dashboard/data/dashboard-data";

function MonthlyChart() {
  return (
    <div className="chart-wrap" role="img" aria-label="Grafik pemasukan dan pengeluaran dari Juni hingga November. Pemasukan lebih tinggi dari pengeluaran setiap bulan.">
      <div className="chart-y-labels" aria-hidden="true"><span>10 jt</span><span>5 jt</span><span>0</span></div>
      <div className="chart-main">
        <div className="chart-grid" aria-hidden="true"><span /><span /><span /></div>
        <div className="chart-bars">
          {monthlyBars.map((bar) => (
            <div className="bar-group" key={bar.month}>
              <div className="bar-pair">
                <span className="bar income-bar" style={{ height: `${bar.income}%` }} />
                <span className={`bar expense-bar${bar.month === "Nov" ? " current" : ""}`} style={{ height: `${bar.expense}%` }} />
              </div>
              <span className={`bar-label${bar.month === "Nov" ? " current-label" : ""}`}>{bar.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CashflowChart() {
  return (
    <section className="panel monthly-panel" id="monthly" aria-labelledby="monthly-title">
      <div className="panel-heading monthly-heading">
        <div><p className="eyebrow panel-eyebrow">ARUS KAS</p><h2 id="monthly-title">Perjalanan uangmu</h2></div>
        <button className="period-select" type="button">6 bulan <span>⌄</span></button>
      </div>
      <div className="chart-legend"><span><i className="legend-dot income-dot" />Pemasukan</span><span><i className="legend-dot expense-dot" />Pengeluaran</span></div>
      <MonthlyChart />
      <div className="chart-insight"><span className="insight-mark"><Icon name="arrow-up" size={13} /></span><p><strong>Bagus sekali!</strong> Pemasukanmu lebih besar dari pengeluaran bulan ini.</p></div>
    </section>
  );
}
