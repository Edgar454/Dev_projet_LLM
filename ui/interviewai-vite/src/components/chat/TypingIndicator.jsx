export default function TypingIndicator() {
  return (
    <div className="flex items-start gap-4 max-w-[80%]">
      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
          smart_toy
        </span>
      </div>
      <div className="chat-bubble-ai bg-surface-container-high text-on-surface p-4 rounded-2xl shadow-sm flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant animate-bounce [animation-delay:-0.3s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant animate-bounce [animation-delay:-0.15s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant animate-bounce" />
      </div>
    </div>
  );
}
