import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const loadLocales = async (lng) => {
  try {
    const response = await fetch(`/locales/${lng}/translation.json`);
    if (!response.ok) throw new Error("Failed to fetch");
    return response.json();
  } catch (error) {
    console.error("Error loading translations:", error);
    return {};
  }
};

const initI18n = async () => {
  const defaultLang = "en"; // Язык по умолчанию
  const translations = await loadLocales(defaultLang);

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        [defaultLang]: { translation: translations },
      },
      fallbackLng: defaultLang,
      interpolation: { escapeValue: false },
    });
};

export const changeLanguage = async (lng) => {
  const translations = await loadLocales(lng);
  i18n.addResourceBundle(lng, "translation", translations, true, true);
  i18n.changeLanguage(lng);
};

initI18n(); 

export default i18n;
