function formatTime(date) {
  if (!date) return "";
  return new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function MessageBubble({ role, content, timestamp, avatarUrl }) {
  const isUser = role === "user";

  if (isUser) {
    return (
      <div className="flex items-start gap-4 max-w-[80%] self-end flex-row-reverse">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
          {avatarUrl ? (
            <img
              alt="You"
              className="w-8 h-8 rounded-full object-cover"
              src={avatarUrl}
            />
          ) : (
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          )}
        </div>
        <div className="chat-bubble-user bg-primary text-white p-4 rounded-2xl shadow-md">
          <p className="text-body-md">{content}</p>
          <span className="text-[10px] mt-2 block text-on-primary-container text-right">
            {formatTime(timestamp)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 max-w-[80%]">
      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
          smart_toy
        </span>
      </div>
      <div className="chat-bubble-ai bg-surface-container-high text-on-surface p-4 rounded-2xl shadow-sm">
        <p className="text-body-md">{content}</p>
        <span className="text-[10px] mt-2 block text-on-surface-variant">
          {formatTime(timestamp)}
        </span>
      </div>
    </div>
  );
}
