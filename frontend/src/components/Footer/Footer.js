import "./Footer.css";
import { useState } from "react";

const Footer = ({ onInput, disabled }) => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    if (data) {
      onInput("user", data);
      setData("");
    }
  };

  return (
    <footer className="footer">
      <input
        value={data}
        className="footer-input"
        placeholder="Write a message..."
        onChange={handleChange}
      />
      <div className={disabled ? "button disabled" : "button"}>
        <img src="/send-arrow.png" alt="submit" onClick={handleClick} />
      </div>
    </footer>
  );
};

export default Footer;
