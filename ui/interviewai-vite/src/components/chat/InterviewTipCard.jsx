export default function InterviewTipCard({
  tip = "The AI is probing your technical implementation details. Try to mention specific frameworks or libraries you used.",
}) {
  return (
    <div className="mt-auto border-t border-outline-variant pt-stack-md">
      <div className="p-4 bg-primary-container rounded-2xl text-on-primary-container">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-[18px]">lightbulb</span>
          <span className="font-label-md">Interview Tip</span>
        </div>
        <p className="text-caption">{tip}</p>
      </div>
    </div>
  );
}
