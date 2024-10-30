import "./index.css";

const ChatInterface = ({ messages }) => {
  const interfaceBlock = messages.map((message) => {
    if (message.role === "assistant") {
      return (
        <div className="assistant-message">
          <div className="app-logo">
            <img src="/chat-logo.png" alt="logo"></img>
          </div>
          <div>{message.content}</div>
        </div>
      );
    } else {
      return <div className="user-message">{message.content}</div>;
    }
  });

  return <div className="chat-interface">{interfaceBlock}</div>;
};

export default ChatInterface;
