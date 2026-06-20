export default function SidebarCTA({ label = "New Interview", onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-auto w-full py-3 px-4 bg-secondary text-on-secondary rounded-lg font-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
    >
      <span className="material-symbols-outlined text-[20px]">add</span>
      {label}
    </button>
  );
}
