import "./Footer.css";
import footerImg from "../../assets/work1.png";
import { useState } from "react";

function Footer({ content }) {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <footer className="footer" id="contact">

      <div className="footer-content">

        <h2>
          {content.title.split("|").map((line, index) => (
            <span key={index}>
              {line}
              {index < content.title.split("|").length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className="footer-socials">

          <button
            className="footer-call"
            onClick={() => setShowPhone(true)}
          >
            {content.call}
          </button>

          <a href="#">
            {content.socials.linkedin}
          </a>

          <a href="#">
            {content.socials.behance}
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          {content.copyright}
        </span>

        <span>
          {content.description}
        </span>

      </div>

      {showPhone && (
        <div
          className="phone-overlay"
          onClick={() => setShowPhone(false)}
        >

          <div
            className="phone-popup"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="phone-close"
              onClick={() => setShowPhone(false)}
              aria-label="Close"
            >
              ×
            </button>

            <p>
              {content.callMe}
            </p>

            <a href="tel:+XXXXXXXXXXX">
              +98 XXX XXX XXXX
            </a>

          </div>

        </div>
      )}

    </footer>
  );
}

export default Footer;