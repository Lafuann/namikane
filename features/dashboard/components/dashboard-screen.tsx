import { MobileNav } from "@/components/layout/mobile-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { CashflowChart } from "@/features/reports/components/cashflow-chart";
import { RecentTransactions } from "@/features/transactions/components/recent-transactions";
import { BalanceCard } from "./balance-card";
import { MonthlySummary } from "./monthly-summary";
import { QuickActions } from "./quick-actions";

export default function DashboardScreen() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="dashboard-main" id="overview">
        <Topbar />
        <div className="dashboard-content">
          <section className="welcome-row">
            <div>
              <p className="eyebrow">KONNICHIWA, ADI <span>✳</span></p>
              <h1>Ringkasan <span>keuanganmu</span></h1>
              <p className="welcome-subtitle">Sedikit demi sedikit, jadi bukit.</p>
            </div>
            <a className="primary-button desktop-add" href="#transactions">
              <span aria-hidden="true">＋</span> Catat transaksi
            </a>
          </section>
          <BalanceCard />
          <QuickActions />
          <MonthlySummary />
          <div className="dashboard-columns">
            <RecentTransactions />
            <CashflowChart />
          </div>
          <footer className="dashboard-footer"><span>今日も、いい一日を。</span><span>NAMIKANE · CATAT DENGAN TENANG</span></footer>
        </div>
      </main>
      <MobileNav />
    </div>
  );
}