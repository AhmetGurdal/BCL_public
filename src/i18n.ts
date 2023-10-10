import i18n from "i18next";
// import { initReactI18next } from "react-i18next"; // https://react.i18next.com/latest/using-with-hooks
// import Backend from "i18next-http-backend"; // adding lazy loading for translations, more information here: https://github.com/i18next/i18next-http-backend
import LanguageDetector from "i18next-browser-languagedetector"; // auto detect the user language, more information here: https://github.com/i18next/i18next-browser-languageDetector
import tr from "../locales/tr.json";
import { initReactI18next } from "react-i18next";
i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    lng: "tr",
    resources: { tr: { translation: tr } },
    // backend: {
    //   loadPath: "/locales/{{lng}}/{{ns}}.json", // locale files path
    // },
    // defaultNS: "common",
    // fallbackLng: ["tr", "en"],
  });

export default i18n;
