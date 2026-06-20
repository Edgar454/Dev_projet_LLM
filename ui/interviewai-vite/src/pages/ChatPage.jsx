import { useNavigate, useParams } from "react-router-dom";
import useInterviewSession from "../hooks/useInterviewSession";
import ChatTopBar from "../components/chat/ChatTopBar";
import ChatHeader from "../components/chat/ChatHeader";
import ChatMessageList from "../components/chat/ChatMessageList";
import ChatInput from "../components/chat/ChatInput";
import AnalysisSidebar from "../components/chat/AnalysisSidebar";

export default function ChatPage() {
  const { sessionId } = useParams();
  const navigate = useNavigate();

  const {
    session,
    messages,
    questionNumber,
    latestAnalysis,
    loadingQuestion,
    submitting,
    ending,
    error,
    sendAnswer,
    finishInterview,
  } = useInterviewSession(sessionId);

  const handleEndInterview = async () => {
    const result = await finishInterview();
    if (result?.status === "completed") {
      navigate(`/interviews/${sessionId}/feedback`);
    }
  };

  const title = session
    ? `${session.domain} • ${session.interview_type}`
    : "Interview Session";

  return (
    <>
      <ChatTopBar title={title} />

      <main className="ml-64 pt-16 h-screen flex">
        {/* Central Chat Area */}
        <section className="flex-1 flex flex-col relative border-r border-outline-variant bg-surface">
          <ChatHeader
            status={loadingQuestion ? "Preparing next question…" : "Analyzing response live..."}
            questionNumber={questionNumber}
          />

          <ChatMessageList messages={messages} isTyping={loadingQuestion || submitting} />

          {error && (
            <p className="px-gutter pb-2 text-caption text-error font-bold">{error}</p>
          )}

          <ChatInput
            onSend={sendAnswer}
            onEndInterview={handleEndInterview}
            disabled={submitting || loadingQuestion}
            ending={ending}
          />
        </section>

        {/* Right Sidebar (Real-time Analysis) */}
        <AnalysisSidebar analysis={latestAnalysis} />
      </main>
    </>
  );
}
