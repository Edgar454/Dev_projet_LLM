import TranscriptRow from "./TranscriptRow";

export default function TranscriptPanel({ messages = [], visible, loading }) {
  if (!visible) return null;

  return (
    <section className="glass-card p-stack-md rounded-xl animate-fade-in" id="transcriptPanel">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-headline-md font-headline-md">Interview Transcript</h4>
        <span className="text-caption bg-surface-container-high px-2 py-1 rounded">
          Auto-generated
        </span>
      </div>

      <div className="space-y-6 max-h-96 overflow-y-auto pr-4">
        {loading && (
          <p className="text-caption text-on-surface-variant">Loading transcript…</p>
        )}
        {!loading && messages.length === 0 && (
          <p className="text-caption text-on-surface-variant">No transcript available.</p>
        )}
        {!loading &&
          messages.map((msg) => (
            <TranscriptRow
              key={msg.id}
              role={msg.role}
              content={msg.content}
              createdAt={msg.created_at}
            />
          ))}
      </div>
    </section>
  );
}
