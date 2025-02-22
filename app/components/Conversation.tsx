"use client";
import Image from "next/image";

interface ConversationProps {
  message1: string[];
  sender1: string;
  sender1Image: string;
  message2: string[];
  sender2: string;
  sender2Image: string;
}

export default function Conversation({ message1, sender1, sender1Image, message2, sender2, sender2Image }: ConversationProps) {
  // Merge messages in alternating order
  const messages = [];
  const maxLength = Math.max(message1.length, message2.length);

  for (let i = 0; i < maxLength; i++) {
    if (message1[i]) messages.push({ text: message1[i], sender: sender1, image: sender1Image });
    if (message2[i]) messages.push({ text: message2[i], sender: sender2, image: sender2Image });
  }

  return (
    <div className="conversation-container full-width">
      {messages.map((msg, index) => (
        <div key={index} className={`message-group full-width ${msg.sender === sender1 ? 'sender1' : 'sender2'}`}>
          <Image src={msg.image} alt={msg.sender} width={40} height={40} className="avatar" />
          <div className="message-content">
            <strong className="sender-name">{msg.sender}</strong>
            <p className="message-text">{msg.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
