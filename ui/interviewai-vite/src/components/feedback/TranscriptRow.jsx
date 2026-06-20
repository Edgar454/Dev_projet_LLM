function formatTimestamp(createdAt) {
  if (!createdAt) return "";
  const d = new Date(createdAt);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function TranscriptRow({ role, content, createdAt }) {
  const isAnswer = role === "answer";

  if (isAnswer) {
    return (
      <div className="flex gap-4 flex-row-reverse">
        <div className="w-12 h-12 shrink-0 bg-primary text-on-primary rounded-full flex items-center justify-center text-caption font-bold">
          AR
        </div>
        <div className="bg-primary p-4 rounded-2xl rounded-br-sm text-on-primary">
          <p className="text-body-md">{content}</p>
          {createdAt && (
            <span className="text-caption text-on-primary/70 mt-2 inline-block">
              {formatTimestamp(createdAt)}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 shrink-0 bg-slate-100 rounded-full flex items-center justify-center text-on-surface-variant text-caption font-bold">
        AI
      </div>
      <div className="bg-slate-100 p-4 rounded-2xl rounded-bl-sm">
        <p className="text-body-md text-on-surface">{content}</p>
        {createdAt && (
          <span className="text-caption text-on-surface-variant mt-2 inline-block">
            {formatTimestamp(createdAt)}
          </span>
        )}
      </div>
    </div>
  );
}
