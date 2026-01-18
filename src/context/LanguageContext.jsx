import { createContext, useState } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";
import am from "../locales/am.json";

const translations = {
  en,
  es,
  am
};

const LanguageContext = createContext({
  language: "en",
  translations: en,
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, translations: translations[language], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;