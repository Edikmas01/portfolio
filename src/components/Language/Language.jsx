import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../i18n";
import "./Language.css";

const languageMap = {
  en: "English",
  de: "Deutsch",
  ru: "Русский",
};

export const Language = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLanguage = async (lang) => {
    await changeLanguage(lang); 
    setIsOpen(false);
  };

  return (
    <div className="language">
      <button className="language__button" onClick={toggleDropdown}>
        {languageMap[i18n.language] || "Select Language"}
      </button>
      {isOpen && (
        <div className="language__dropdown">
          {Object.keys(languageMap).map((lang) => (
            <button
              key={lang}
              onClick={() => handleChangeLanguage(lang)}
              className={i18n.language === lang ? "active" : ""}
            >
              {languageMap[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
