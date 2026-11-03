import type { IconName } from "@/components/ui/icon";

export type Transaction = {
  title: string;
  detail: string;
  time: string;
  amount: string;
  type: "expense" | "income";
  icon: IconName;
  category: string;
};
