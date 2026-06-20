import EmptyState from "./EmptyState";

// NOTE: needs a per-skill aggregate (technical / problem solving /
// communication) across sessions, not exposed by the API yet.
export default function SkillBalanceCard() {
  return (
    <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-sm flex flex-col h-full">
      <h3 className="text-headline-md font-headline-md text-primary mb-6">Skill Balance</h3>
      <div className="flex-1 flex items-center justify-center">
        <EmptyState
          icon="radar"
          message="Skill breakdown will appear once you've completed a few interviews."
        />
      </div>
    </div>
  );
}
