import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enLogin from '../locales/en/users.json';
import esLogin from '../locales/es/users.json';

import enCommon from '../locales/en/common.json';
import esCommon from '../locales/es/common.json';
import enWorkflow from '../locales/en/ecosystem.json';
import esWorkflow from '../locales/es/ecosystem.json';

const resources = {
  en: {
    users: enLogin,
    common: enCommon,
    ecosystem: enWorkflow
  },
  es: {
    users: esLogin,
    common: esCommon,
    ecosystem: esWorkflow
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