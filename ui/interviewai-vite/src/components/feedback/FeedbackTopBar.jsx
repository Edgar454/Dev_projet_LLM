export default function FeedbackTopBar() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface flex justify-between items-center px-margin-desktop z-40">
      <div className="flex items-center gap-stack-sm">
        <h2 className="text-headline-md font-headline-md text-primary">Interview Feedback</h2>
        <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-caption font-bold">
          LIVE REPORT
        </span>
      </div>

      <div className="flex items-center gap-stack-md">
        <div className="relative group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
            search
          </span>
          <input
            className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-caption focus:ring-2 focus:ring-secondary/50 w-64"
            placeholder="Search analytics..."
            type="text"
          />
        </div>
        <div className="flex gap-stack-sm text-on-surface-variant">
          <button className="hover:text-secondary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="hover:text-secondary transition-colors">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
      </div>
    </header>
  );
}
