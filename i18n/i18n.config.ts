import EN from "./locales/en.json";
import ES from "./locales/es.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: EN,
    es: ES,
  },
}));
