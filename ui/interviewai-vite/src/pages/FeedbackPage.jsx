import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFeedbackReport from "../hooks/useFeedbackReport";
import FeedbackTopBar from "../components/feedback/FeedbackTopBar";
import FeedbackSummaryHeader from "../components/feedback/FeedbackSummaryHeader";
import ScoreRing from "../components/feedback/ScoreRing";
import StrengthsGrowthCard from "../components/feedback/StrengthsGrowthCard";
import KeywordCoverageCard from "../components/feedback/KeywordCoverageCard";
import NextStepsCard from "../components/feedback/NextStepsCard";
import TranscriptPanel from "../components/feedback/TranscriptPanel";

function scoreVerdict(score) {
  if (score >= 80) return "EXCEEDS EXPECTATIONS";
  if (score >= 60) return "MEETS EXPECTATIONS";
  if (score >= 40) return "BELOW EXPECTATIONS";
  return "NEEDS IMPROVEMENT";
}

export default function FeedbackPage() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [transcriptVisible, setTranscriptVisible] = useState(false);

  const { results, history, globalScore, loading, error } = useFeedbackReport(sessionId);

  const title = results
    ? `${results.domain} Interview Report`
    : "Interview Report";

  return (
    <>
      <FeedbackTopBar />

      <main className="ml-64 pt-24 pb-stack-lg px-margin-desktop min-h-screen">
        <div className="max-w-container-max mx-auto space-y-stack-md">
          {loading && (
            <p className="text-body-md text-on-surface-variant">Loading report…</p>
          )}

          {error && <p className="text-body-md text-error font-bold">{error}</p>}

          {!loading && !error && (
            <>
              <FeedbackSummaryHeader
                title={title}
                durationSeconds={undefined}
                transcriptVisible={transcriptVisible}
                onToggleTranscript={() => setTranscriptVisible((v) => !v)}
              />

              <div className="grid grid-cols-12 gap-gutter">
                <ScoreRing score={globalScore} label={scoreVerdict(globalScore)} />

                {/* Strengths/weaknesses aren't available at the history-row
                    level from the API (Message has no strengths/weaknesses
                    field) — shown empty until the backend exposes them. */}
                <StrengthsGrowthCard strengths={[]} weaknesses={[]} />

                <KeywordCoverageCard />

                <NextStepsCard onProceed={() => navigate("/interviews")} />
              </div>

              <TranscriptPanel
                messages={history}
                visible={transcriptVisible}
                loading={loading}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}
