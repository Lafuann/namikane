import { Icon } from "@/components/ui/icon";
import { transactions } from "@/features/dashboard/data/dashboard-data";
import type { Transaction } from "@/features/transactions/types";

function TransactionRow({ transaction }: { transaction: Transaction }) {
  return (
    <li className="transaction-row">
      <span className={`transaction-icon ${transaction.category}`}><Icon name={transaction.icon} size={19} /></span>
      <span className="transaction-copy"><strong>{transaction.title}</strong><span>{transaction.detail}</span></span>
      <span className="transaction-amount-wrap">
        <strong className={`transaction-amount ${transaction.type}`}>{transaction.amount}</strong>
        <span className="transaction-time">{transaction.time}</span>
      </span>
    </li>
  );
}

export function RecentTransactions() {
  return (
    <section className="panel transactions-panel" id="transactions" aria-labelledby="transactions-title">
      <div className="panel-heading">
        <div><p className="eyebrow panel-eyebrow">AKTIVITAS TERBARU</p><h2 id="transactions-title">Transaksi terakhir</h2></div>
        <a className="text-link" href="#transactions">Lihat semua <Icon name="chevron" size={15} /></a>
      </div>
      <ul className="transaction-list">{transactions.map((transaction) => <TransactionRow key={transaction.title} transaction={transaction} />)}</ul>
    </section>
  );
}
