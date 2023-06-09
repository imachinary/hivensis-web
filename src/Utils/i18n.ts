import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import enCommon from '../locales/en/common.json';
import esCommon from '../locales/es/common.json';
import deCommon from '../locales/de/common.json';
import frCommon from '../locales/fr/common.json';
import jaCommon from '../locales/ja/common.json';
import ptCommon from '../locales/pt/common.json';

const resources = {
  en: {
    common: enCommon,
  },
  es: {
    common: esCommon,
  },
  fr: {
    common: frCommon,
  },
  de: {
    common: deCommon,
  },
  ja: {
    common: jaCommon,
  },
  pt: {
    common: ptCommon,
  }
};

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;