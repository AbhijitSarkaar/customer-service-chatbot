import "./Footer.css";
import { useState } from "react";

const Footer = ({ onResponse }) => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    onResponse("");
    fetch("http://localhost:8888/chat-response", {
      method: "POST",
      body: JSON.stringify({
        content: data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        onResponse(res.content);
      });
  };

  return (
    <footer className="footer">
      <input
        className="footer-input"
        placeholder="Enter text..."
        onChange={handleChange}
      />
      <div className="button">
        <img src="/send-arrow.png" alt="submit" onClick={handleClick} />
      </div>
    </footer>
  );
};

export default Footer;
