export default function ChatTopBar({ title = "Interview Session" }) {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface flex justify-between items-center px-margin-desktop z-40 border-b border-outline-variant">
      <h1 className="text-headline-md font-headline-md text-primary">{title}</h1>

      <div className="flex items-center gap-6">
        <div className="relative flex items-center bg-surface-container rounded-full px-4 py-1.5 w-64 border border-outline-variant focus-within:border-secondary transition-all">
          <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
            search
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-caption w-full ml-2"
            placeholder="Search insights..."
            type="text"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
          </button>
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
      </div>
    </header>
  );
}
