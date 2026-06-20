export default function HeaderSearch({ placeholder = "Search sessions...", onChange }) {
  return (
    <div className="flex items-center gap-4 flex-1">
      <div className="relative w-full max-w-md">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
          search
        </span>
        <input
          className="w-full pl-10 pr-4 py-2 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-secondary text-body-md"
          placeholder={placeholder}
          type="text"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
