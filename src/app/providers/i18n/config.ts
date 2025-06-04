import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ruHeader from '@/widgets/header/config/locales/ru.json';
import enHeader from '@/widgets/header/config/locales/en.json';

import ruFooter from '@/widgets/footer/config/locales/ru.json';
import enFooter from '@/widgets/footer/config/locales/en.json';

import ruHome from '@/pages/home/config/locales/ru.json';
import enHome from '@/pages/home/config/locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    defaultNS: 'home',
    ns: ['footer', 'header', 'home'],
    resources: {
      ru: {
        footer: ruFooter,
        home: ruHome,
        header: ruHeader,
      },
      en: {
        footer: enFooter,
        home: enHome,
        header: enHeader,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
