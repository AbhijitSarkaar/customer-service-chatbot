import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  const onResponse = (data) => {
    const content = <p>{data}</p>;
    setResponse(content);
  };

  return (
    <div className="App">
      <Header />
      <Footer onResponse={onResponse} />
      <h3>{response}</h3>
    </div>
  );
}

export default App;
