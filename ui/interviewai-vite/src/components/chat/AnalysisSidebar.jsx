import LiveAnalysisPanel from "./LiveAnalysisPanel";
import InterviewTipCard from "./InterviewTipCard";

export default function AnalysisSidebar({ analysis }) {
  return (
    <aside className="w-80 bg-surface-container-lowest p-stack-md flex flex-col gap-stack-md overflow-y-auto">
      <LiveAnalysisPanel analysis={analysis} />
      <InterviewTipCard />
    </aside>
  );
}
