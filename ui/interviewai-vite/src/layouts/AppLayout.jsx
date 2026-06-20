import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <div className="bg-surface text-on-surface">
      <Sidebar />
      <Header />

      <main className="ml-64 pt-16 min-h-screen">
        <div className="max-w-[1200px] mx-auto px-margin-desktop py-stack-lg">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
