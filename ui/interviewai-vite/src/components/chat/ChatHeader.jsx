export default function ChatHeader({
  status = "Analyzing response live...",
  questionNumber = 1,
}) {
  return (
    <div className="p-4 border-b border-outline-variant flex items-center justify-between bg-white">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
          <span className="material-symbols-outlined">smart_toy</span>
        </div>
        <div>
          <h3 className="font-label-md text-on-surface">AI Recruiter</h3>
          <p className="text-caption text-secondary">{status}</p>
        </div>
      </div>

      <span className="text-caption font-bold text-on-surface-variant">
        Question {questionNumber}
      </span>
    </div>
  );
}
