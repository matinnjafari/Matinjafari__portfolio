import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header({ content }) {
  const location = useLocation();

  const currentPath = location.pathname;

  let languageLink = "/en";
  let languageText = "EN";

  if (currentPath === "/en") {
    languageLink = "/de";
    languageText = "DE";
  } else if (currentPath === "/de") {
    languageLink = "/fa";
    languageText = "FA";
  } else if (currentPath === "/fa" || currentPath === "/") {
    languageLink = "/en";
    languageText = "EN";
  }

  return (
    <header className="header">

      <Link to="/" className="header-logo">
        MATIN JAFARI
      </Link>

      <nav className="header-nav">

        <a href="#work">
          {content.nav.work}
        </a>

        <a href="#about">
          {content.nav.about}
        </a>

        <a href="#contact">
          {content.nav.contact}
        </a>

        <Link
          to={languageLink}
          className="language-button"
        >
          {languageText}
        </Link>

      </nav>

    </header>
  );
}

export default Header;