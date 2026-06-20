import { NavLink } from "react-router-dom";

const items = [
  { label: "Dashboard", icon: "dashboard", to: "/" },
  { label: "Interviews", icon: "forum", to: "/interviews" },
  { label: "Analytics", icon: "leaderboard", to: "/analytics" },
  { label: "Settings", icon: "settings", to: "/settings" },
];

export default function SidebarNav() {
  return (
    <nav className="flex-1 space-y-2">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? "text-primary dark:text-primary-fixed-dim font-bold border-r-4 border-secondary bg-surface-container-low"
                : "text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-low"
            }`
          }
        >
          <span className="material-symbols-outlined">{item.icon}</span>

          <span className="text-label-md">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
