export default function DashboardFooter({
  versionLabel = "AI Interviewer V2.4 Active",
  streak = 5,
}) {
  return (
    <footer className="mt-stack-lg border-t border-outline-variant pt-stack-md flex flex-wrap justify-between items-center text-on-surface-variant">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span className="text-caption">{versionLabel}</span>
        </div>
        <div className="text-caption">Current Streak: {streak} Days</div>
      </div>
      <div className="text-caption">© 2024 InterviewAI Simulator. All rights reserved.</div>
    </footer>
  );
}
