import type { ReactNode } from "react";

export type IconName =
  | "overview"
  | "transactions"
  | "reports"
  | "categories"
  | "settings"
  | "plus"
  | "bell"
  | "arrow-up"
  | "arrow-down"
  | "chevron"
  | "coffee"
  | "shopping"
  | "train"
  | "home"
  | "dots";

const iconPaths: Record<IconName, ReactNode> = {
  overview: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></>,
  transactions: <><path d="M4 7h16M4 12h16M4 17h10" /><circle cx="18" cy="17" r="3" /></>,
  reports: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 6-7" /></>,
  categories: <><path d="M4 7h16M4 12h16M4 17h16" /><circle cx="8" cy="7" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="10" cy="17" r="2" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.6.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.6-.9l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.9l-1.4-1.2 1.4-2.4 1.7.7a8 8 0 0 1 1.6-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.6.9l1.7-.7 1.4 2.4-1.4 1.2a7 7 0 0 1 0 1.9Z" transform="translate(-1 -1)" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  "arrow-up": <><path d="M12 19V5m-6 6 6-6 6 6" /></>,
  "arrow-down": <><path d="M12 5v14m6-6-6 6-6-6" /></>,
  chevron: <path d="m9 18 6-6-6-6" />,
  coffee: <><path d="M5 8h12v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8ZM17 10h1a3 3 0 1 1 0 6h-2M8 4v2m4-2v2" /></>,
  shopping: <><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
  train: <><rect x="5" y="3" width="14" height="16" rx="4" /><path d="M8 19v2m8-2v2M5 13h14M9 7h.01M15 7h.01m-6 9h6" /></>,
  home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z" /></>,
  dots: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
};

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[name]}
    </svg>
  );
}
