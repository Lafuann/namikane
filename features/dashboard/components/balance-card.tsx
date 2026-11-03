import { Icon } from "@/components/ui/icon";

export function BalanceCard() {
  return (
    <section className="balance-card" aria-labelledby="balance-title">
      <div className="balance-content">
        <div className="balance-card-top">
          <span className="balance-label" id="balance-title">TOTAL SALDO</span>
          <span className="balance-period">Per 2 November <span aria-hidden="true">⌄</span></span>
        </div>
        <p className="balance-amount">Rp 12.840.500</p>
        <div className="balance-change"><span className="change-icon"><Icon name="arrow-up" size={13} /></span><strong>12,8%</strong><span>dari bulan lalu</span></div>
        <a className="balance-link" href="#monthly">Lihat ringkasan bulan ini <Icon name="chevron" size={15} /></a>
      </div>
      <div className="balance-art" aria-hidden="true">
        <span className="art-ring ring-one" /><span className="art-ring ring-two" /><span className="art-ring ring-three" />
        <span className="art-sun" /><span className="art-wave">波</span>
      </div>
      <span className="balance-vertical" aria-hidden="true">穏やかな流れ</span>
    </section>
  );
}
