import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="header__language-toggle">
      <button
        className={language === "en" ? "header__language-btn--active" : "header__language-btn"}
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </button>
      <button
        className={language === "es" ? "header__language-btn--active" : "header__language-btn"}
        onClick={() => handleLanguageChange("es")}
      >
        ES
      </button>
      
      <button
        className={language === "am" ? "header__language-btn--active" : "header__language-btn"}
        onClick={() => handleLanguageChange("am")}
      >
        AM
      </button>
    </div>
  );
}

export default LanguageToggle;