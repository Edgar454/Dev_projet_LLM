export default function SimulationRow({ month, day, title, meta, onPrepare }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
      <div className="w-12 h-12 bg-surface-container-high rounded-lg flex flex-col items-center justify-center text-center">
        <span className="text-[10px] font-bold uppercase text-on-surface-variant">{month}</span>
        <span className="text-body-lg font-bold">{day}</span>
      </div>
      <div className="flex-1">
        <h4 className="text-body-md font-bold text-on-surface">{title}</h4>
        <p className="text-caption text-on-surface-variant">{meta}</p>
      </div>
      <button
        onClick={onPrepare}
        className="opacity-0 group-hover:opacity-100 px-4 py-2 rounded-lg border border-outline-variant text-label-md transition-all"
      >
        Prepare
      </button>
      <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
    </div>
  );
}
