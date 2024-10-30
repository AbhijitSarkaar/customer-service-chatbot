import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useState } from "react";
import ChatInterface from "./components/ChatInterface";

function App() {
  const [response, setResponse] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! How may I help you today?",
    },
    {
      role: "user",
      content: "how to create an account",
    },
    {
      role: "assistant",
      content: "Hi! How may I help you today?",
    },
  ]);

  const onResponse = (data) => {
    const content = <p>{data}</p>;
    setResponse(content);
  };

  return (
    <div className="app">
      <Header />
      <ChatInterface messages={messages} />
      <Footer onResponse={onResponse} />
    </div>
  );
}

export default App;
