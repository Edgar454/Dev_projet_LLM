import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

// Unlike AppLayout, the chat/feedback screens manage their own header
// and don't want the centered max-w-[1200px] content wrapper, since the
// chat view needs full-bleed height (h-screen flex) for the message list.
export default function ChatLayout() {
  return (
    <div className="bg-surface text-on-surface">
      <Sidebar />
      <Outlet />
    </div>
  );
}
