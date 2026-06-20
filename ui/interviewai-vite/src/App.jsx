import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ChatLayout from "./layouts/ChatLayout";
import DashboardPage from "./pages/DashboardPage";
import InterviewsPage from "./pages/InterviewsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import ChatPage from "./pages/ChatPage";
import FeedbackPage from "./pages/FeedbackPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="interviews" element={<InterviewsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Chat & feedback use a slimmer layout (no centered content wrapper) */}
        <Route element={<ChatLayout />}>
          <Route path="interviews/chat/:sessionId" element={<ChatPage />} />
          <Route path="interviews/:sessionId/feedback" element={<FeedbackPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
