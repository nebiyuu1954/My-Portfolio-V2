import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
// import "./LanguageDropdown.css";

function LanguageDropdown() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="header__language-dropdown">
      <button className="header__language-dropbtn">{language.toUpperCase()} ▾</button>
      <div className="header__language-dropdown-content">
        <button onClick={() => handleLanguageChange("am")}>AMH</button>
        <button onClick={() => handleLanguageChange("en")}>ENG</button>
        <button onClick={() => handleLanguageChange("es")}>ESP</button>
      </div>
    </div>
  );
}

export default LanguageDropdown;