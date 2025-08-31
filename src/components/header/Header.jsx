import { memo, useEffect, useState, useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import ThemeToggle from "../../ThemeToggle";
import "./Header.css";

function Header() {
  const { translations } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu on link click
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isVisible ? "" : "header--hidden"}`}>
      <div className="header__container">
        <div className="header__logo">
          <a href="/" onClick={() => scrollToSection("home")}>
            {translations.header.websiteName}
          </a>
        </div>
        <button className="header__hamburger" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <a href="#projects" onClick={() => scrollToSection("projects")}>
            {translations.header.projects}
          </a>
          <a href="#experience" onClick={() => scrollToSection("experience")}>
            {translations.header.experience}
          </a>
          {/* <a href="#skills" onClick={() => scrollToSection("skills")}>
            {translations.header.skills}
          </a> */}
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            {translations.header.contact}
          </a>
          <LanguageDropdown />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default memo(Header);