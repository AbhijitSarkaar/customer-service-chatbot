import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useState } from "react";
import ChatInterface from "./components/ChatInterface";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! How may I help you today?",
    },
  ]);
  const [disabled, setDisabled] = useState(false);

  const getResponse = async (content) => {
    const result = await fetch("http://localhost:8888/chat-response", {
      method: "POST",
      body: JSON.stringify({
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result.json();
  };

  const onInput = async (role, content) => {
    setDisabled(true);
    const updatedMessages = [
      ...messages.map((message) => ({ ...message })),
      {
        role,
        content,
      },
    ];
    setMessages(updatedMessages);
    const result = await getResponse(content);
    setDisabled(false);
    setMessages([
      ...updatedMessages.map((message) => ({ ...message })),
      {
        role: result.role,
        content: result.content,
      },
    ]);
  };

  return (
    <div className="app">
      <Header />
      <ChatInterface messages={messages} />
      <Footer onInput={onInput} disabled={disabled} />
    </div>
  );
}

export default App;
