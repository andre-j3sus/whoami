export interface UsesItem {
  label: string;
  value: string;
  url?: string;
}

export interface UsesCategory {
  title: string;
  emoji: string;
  items: UsesItem[];
}

export const usesCategories: UsesCategory[] = [
  {
    title: "Hardware",
    emoji: "💻",
    items: [
      { label: "Work Laptop", value: "MacBook Pro 14\"" },
      { label: "Personal Laptop", value: "Lenovo Legion 5" },
      {
        label: "Monitor",
        value: "Dell 27 Monitor - P2722H",
        url: "https://www.dell.com/en-us/shop/dell-27-monitor-p2722h/apd/210-bbck/monitors-monitor-accessories"
      },
      {
        label: "Keyboard",
        value: "Keychron Q1 Max",
        url: "https://www.keychron.com/products/keychron-q1-max-qmk-via-wireless-custom-mechanical-keyboard",
      },
      {
        label: "Switches",
        value: "Gateron G Pro 3.0 Yellow",
        url: "https://www.gateron.com/products/gateron-g-pro-30-switch-set?VariantsId=10623",
      },
      { label: "Mouse", value: "Logitech G402" },
      { label: "Phone", value: "Google Pixel 10", url: "https://store.google.com/product/pixel_10" },
    ],
  },
  {
    title: "Development",
    emoji: "🛠️",
    items: [
      {
        label: "IDE",
        value: "IntelliJ IDEA",
        url: "https://www.jetbrains.com/idea/",
      },
      {
        label: "AI Coding",
        value: "OpenCode",
        url: "https://opencode.ai",
      },
      {
        label: "Browser",
        value: "Google Chrome",
        url: "https://www.google.com/chrome/",
      },
    ],
  },
  {
    title: "Software",
    emoji: "📱",
    items: [
      {
        label: "Communication",
        value: "Discord",
        url: "https://discord.com",
      },
      {
        label: "Notes",
        value: "Notion",
        url: "https://www.notion.com",
      },
      {
        label: "Calendar",
        value: "Google Calendar",
        url: "https://calendar.google.com",
      },
      {
        label: "Music",
        value: "Spotify",
        url: "https://open.spotify.com",
      },
    ],
  },
  {
    title: "Desk Setup",
    emoji: "🪑",
    items: [
      {
        label: "Chair",
        value: "Herman Miller Mirra 2",
        url: "https://www.hermanmiller.com/products/seating/office-chairs/mirra-2-chairs/",
      },
    ],
  },
];
