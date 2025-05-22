import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ruCommon from '@/widgets/locales/ru.json';
import enCommon from '@/widgets/locales/en.json';

import ruHome from '@/pages/home/locales/ru.json';
import enHome from '@/pages/home/locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    defaultNS: 'common',
    ns: ['common', 'home'],
    resources: {
      ru: {
        common: ruCommon,
        home: ruHome,
      },
      en: {
        common: enCommon,
        home: enHome,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
