import { useState } from "react";

function getMinDateTimeLocal() {
  // Prevent scheduling in the past: format "now" as a datetime-local value
  // (local time, no timezone, minute precision) to use as the min attribute.
  const now = new Date();
  now.setSeconds(0, 0);
  const offsetMs = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offsetMs).toISOString().slice(0, 16);
}

export default function ScheduleSimulationPanel({ onConfirm, onCancel, loading = false }) {
  const [value, setValue] = useState("");
  const minDateTime = getMinDateTimeLocal();

  const handleConfirm = () => {
    if (!value) return;
    // datetime-local gives "YYYY-MM-DDTHH:mm" with no timezone info, which
    // is exactly the ISO-like format most Python datetime fields accept.
    onConfirm(value);
  };

  return (
    <div className="p-stack-md bg-surface-container-low rounded-lg mb-stack-md border-l-4 border-secondary space-y-4 animate-fade-in">
      <div>
        <label className="text-label-md text-on-surface-variant block mb-2">
          Pick a date &amp; time
        </label>
        <input
          type="datetime-local"
          value={value}
          min={minDateTime}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleConfirm}
          disabled={!value || loading}
          className="flex-1 py-3 bg-secondary text-on-secondary rounded-lg font-label-md hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Scheduling…" : "Confirm Schedule"}
        </button>
        <button
          onClick={onCancel}
          disabled={loading}
          className="px-4 py-3 rounded-lg border border-outline-variant text-label-md text-on-surface-variant hover:bg-surface-container transition-colors disabled:opacity-60"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
