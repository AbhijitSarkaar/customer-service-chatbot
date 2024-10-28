import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <input className="footer-input" placeholder="Enter text..." />
      <div className="button">
        <img src="/send-arrow.png" alt="submit" />
      </div>
    </footer>
  );
};

export default Footer;
