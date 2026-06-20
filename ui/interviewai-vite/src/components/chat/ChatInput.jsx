import { useEffect, useRef, useState } from "react";

export default function ChatInput({ onSend, onEndInterview, disabled = false, ending = false }) {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  // Auto-expand height as the user types, mirroring the original vanilla JS behavior
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [value]);

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleEndClick = () => {
    if (confirm("Are you sure you want to end the interview? Progress will be saved.")) {
      onEndInterview();
    }
  };

  return (
    <div className="p-gutter bg-white border-t border-outline-variant">
      <div className="max-w-container-max mx-auto flex items-end gap-4">
        <div className="flex-1 relative group">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className="w-full bg-surface-container rounded-2xl p-4 pr-12 border-2 border-transparent focus:border-secondary focus:ring-0 transition-all resize-none min-h-[60px] disabled:opacity-60"
            placeholder="Type your response here..."
            rows={1}
          />
          <button
            onClick={handleSend}
            disabled={disabled || !value.trim()}
            className="absolute right-4 bottom-4 text-secondary hover:scale-110 transition-transform disabled:opacity-40 disabled:hover:scale-100"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
        <button
          onClick={handleEndClick}
          disabled={ending}
          className="bg-error-container text-on-error-container px-4 py-3 rounded-2xl font-label-md flex items-center gap-2 hover:bg-error hover:text-white transition-all disabled:opacity-60"
        >
          <span className="material-symbols-outlined text-[20px]">block</span>
          {ending ? "Ending…" : "End Interview"}
        </button>
      </div>
    </div>
  );
}
