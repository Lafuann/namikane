import type { IconName } from "@/components/ui/icon";
import type { Transaction } from "@/features/transactions/types";

export const navigation: { label: string; icon: IconName; href: string }[] = [
  { label: "Ringkasan", icon: "overview", href: "#overview" },
  { label: "Transaksi", icon: "transactions", href: "#transactions" },
  { label: "Laporan", icon: "reports", href: "#monthly" },
  { label: "Kategori", icon: "categories", href: "#categories" },
];

export const transactions: Transaction[] = [
  { title: "Kopi & roti", detail: "Kopi Senja · Jajan", time: "09.41", amount: "−Rp 38.000", type: "expense", icon: "coffee", category: "food" },
  { title: "Belanja mingguan", detail: "Pasar Pagi · Kebutuhan", time: "Kemarin", amount: "−Rp 245.500", type: "expense", icon: "shopping", category: "shopping" },
  { title: "Perjalanan kantor", detail: "KRL Commuter Line · Transportasi", time: "Kemarin", amount: "−Rp 16.000", type: "expense", icon: "train", category: "transport" },
  { title: "Gaji bulanan", detail: "Kantor · Pemasukan", time: "1 Nov", amount: "+Rp 8.500.000", type: "income", icon: "home", category: "income" },
];

export const monthlyBars = [
  { month: "Jun", income: 66, expense: 40 },
  { month: "Jul", income: 78, expense: 48 },
  { month: "Agu", income: 70, expense: 44 },
  { month: "Sep", income: 91, expense: 54 },
  { month: "Okt", income: 74, expense: 49 },
  { month: "Nov", income: 84, expense: 38 },
];
