import { useEffect } from "react";
import "./index.css";

const ChatInterface = ({ messages }) => {
  useEffect(() => {
    const elem = document.getElementById("chat-interface");
    if (elem) {
      const height = messages.length * 300;
      elem.scrollTo({
        top: height,
        behavior: "smooth",
      });
    }
  }, [messages.length]);

  const interfaceBlock = messages.map((message, idx) => {
    if (message.role === "assistant") {
      return (
        <div className="assistant-message" key={idx + message.content}>
          <div className="app-logo">
            <img src="/chat-logo.png" alt="logo"></img>
          </div>
          <div>{message.content}</div>
        </div>
      );
    } else {
      return (
        <div className="user-message" key={idx + message.content}>
          {message.content}
        </div>
      );
    }
  });

  return (
    <div className="chat-interface" id="chat-interface">
      {interfaceBlock}
    </div>
  );
};

export default ChatInterface;
