export default function HeaderActions() {
  return (
    <div className="flex items-center gap-4 text-on-surface-variant">
      <button className="hover:text-secondary transition-colors duration-200">
        <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="hover:text-secondary transition-colors duration-200">
        <span className="material-symbols-outlined">help_outline</span>
      </button>
    </div>
  );
}
