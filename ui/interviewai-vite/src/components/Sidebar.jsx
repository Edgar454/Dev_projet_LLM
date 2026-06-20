import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarUserCard from "./sidebar/SidebarUserCard";
import SidebarNav from "./sidebar/SidebarNav";
import SidebarCTA from "./sidebar/SidebarCTA";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-lowest dark:bg-inverse-surface shadow-sm flex flex-col py-stack-md px-gutter z-50">
      <SidebarHeader />

      <SidebarUserCard />

      <SidebarNav />

      <SidebarCTA />
    </aside>
  );
}
