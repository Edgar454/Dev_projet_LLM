import { useState } from "react";
import ScheduleSimulationPanel from "./ScheduleSimulationPanel";

const DEFAULT_DOMAINS = [
  "Information Technology",
  "Marketing & Sales",
  "Product Management",
  "Finance",
  "Creative Design",
];

const DEFAULT_TYPES = [
  "Technical Assessment",
  "Behavioral / HR",
  "System Design",
  "Portfolio Review",
];

export default function InterviewSetupCard({
  domains = DEFAULT_DOMAINS,
  types = DEFAULT_TYPES,
  tip = {
    highlight: "Pro Tip:",
    text: "Based on your profile, we recommend a",
    bold1: "Technical Assessment",
    mid: "focused on",
    bold2: "React and System Architecture",
  },
  // onStart receives ({ domain, interviewType }) so the parent can call the API
  onStart,
  loading = false,
  // onSchedule receives ({ domain, interviewType, scheduledAt }) where
  // scheduledAt is the raw datetime-local string ("YYYY-MM-DDTHH:mm")
  onSchedule,
  scheduling = false,
}) {
  const [domain, setDomain] = useState(domains[0]);
  const [interviewType, setInterviewType] = useState(types[0]);
  const [showScheduler, setShowScheduler] = useState(false);

  const handleStart = () => {
    onStart?.({ domain, interviewType });
  };

  const handleConfirmSchedule = (scheduledAt) => {
    onSchedule?.({ domain, interviewType, scheduledAt });
  };

  return (
    <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-stack-md border border-outline-variant shadow-sm">
      <div className="flex items-center justify-between mb-stack-md">
        <h3 className="text-headline-md font-headline-md">Setup New Interview</h3>
        <span className="material-symbols-outlined text-secondary">rocket_launch</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mb-stack-md">
        <div className="space-y-2">
          <label className="text-label-md text-on-surface-variant block">
            Professional Domain
          </label>
          <div className="relative">
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full appearance-none bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
            >
              {domains.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
              expand_more
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-label-md text-on-surface-variant block">Interview Type</label>
          <div className="relative">
            <select
              value={interviewType}
              onChange={(e) => setInterviewType(e.target.value)}
              className="w-full appearance-none bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none"
            >
              {types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
              expand_more
            </span>
          </div>
        </div>
      </div>

      {!showScheduler && (
        <div className="p-stack-md bg-surface-container-low rounded-lg mb-stack-md border-l-4 border-secondary">
          <p className="text-body-md text-on-surface-variant">
            <span className="font-bold text-primary">{tip.highlight}</span> {tip.text}{" "}
            <b>{tip.bold1}</b> {tip.mid} <b>{tip.bold2}</b>.
          </p>
        </div>
      )}

      {showScheduler && (
        <ScheduleSimulationPanel
          loading={scheduling}
          onCancel={() => setShowScheduler(false)}
          onConfirm={(scheduledAt) => {
            handleConfirmSchedule(scheduledAt);
            setShowScheduler(false);
          }}
        />
      )}

      <div className="flex items-center gap-stack-sm">
        <button
          onClick={handleStart}
          disabled={loading || scheduling}
          className="flex-1 py-4 bg-primary text-on-primary rounded-lg font-headline-md text-headline-md hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? "Starting…" : "Start Simulation"}
        </button>
        <button
          onClick={() => setShowScheduler((v) => !v)}
          disabled={loading || scheduling}
          className="flex-1 py-4 bg-surface-container border border-outline-variant text-on-surface rounded-lg font-headline-md text-headline-md hover:bg-surface-container-high transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">event</span>
          Schedule Simulation
        </button>
      </div>
    </section>
  );
}
