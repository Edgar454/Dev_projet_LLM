import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export default function ChatMessageList({ messages, isTyping, userAvatarUrl }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="chat-container flex-1 overflow-y-auto p-gutter space-y-6 flex flex-col">
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          role={msg.role === "ai" ? "ai" : "user"}
          content={msg.content}
          timestamp={msg.timestamp}
          avatarUrl={msg.role === "user" ? userAvatarUrl : undefined}
        />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  );
}
