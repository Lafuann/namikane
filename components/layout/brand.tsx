import Image from "next/image";

export function BrandMark() {
  return (
    <Image
      className="brand-mark"
      src="/logos/nmkn-logo.png"
      alt=""
      width={36}
      height={36}
      priority
    />
  );
}

export function Brand({ mobile = false }: { mobile?: boolean }) {
  return (
    <a className={`${mobile ? "mobile-brand " : ""}brand`} href="#overview" aria-label="Namikane, ringkasan">
      <BrandMark />
      <span className="brand-name">Namikane<span>なみかね</span></span>
    </a>
  );
}
