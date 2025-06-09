import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ruEvent from '@/entities/Event/config/locales/ru.json';
import enEvent from '@/entities/Event/config/locales/en.json';

import ruHeader from '@/widgets/header/config/locales/ru.json';
import enHeader from '@/widgets/header/config/locales/en.json';

import ruFooter from '@/widgets/footer/config/locales/ru.json';
import enFooter from '@/widgets/footer/config/locales/en.json';

import ruHome from '@/pages/home/config/locales/ru.json';
import enHome from '@/pages/home/config/locales/en.json';

import ruSchedule from '@/pages/schedule/ui/ScheduleContent/config/locales/ru.json';
import enSchedule from '@/pages/schedule/ui/ScheduleContent/config/locales/en.json';

import ruCreateEventFormModal from '@/pages/schedule/ui/CreateEventFormModal/config/locales/ru.json';
import enCreateEventFormModal from '@/pages/schedule/ui/CreateEventFormModal/config/locales/en.json';

import ruEditEventFormModal from '@/pages/schedule/ui/EditEventFormModal/config/locales/ru.json';
import enEditEventFormModal from '@/pages/schedule/ui/EditEventFormModal/config/locales/en.json';

import ruEventForm from '@/features/EventForm/config/locales/ru.json';
import enEventForm from '@/features/EventForm/config/locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    defaultNS: 'home',
    ns: ['createEventFormModal', 'event', 'eventForm', 'footer', 'header', 'home', 'schedule'],
    resources: {
      ru: {
        createEventFormModal: ruCreateEventFormModal,
        editEventFormModal: ruEditEventFormModal,
        event: ruEvent,
        eventForm: ruEventForm,
        footer: ruFooter,
        home: ruHome,
        header: ruHeader,
        schedule: ruSchedule,
      },
      en: {
        createEventFormModal: enCreateEventFormModal,
        editEventFormModal: enEditEventFormModal,
        event: enEvent,
        eventForm: enEventForm,
        footer: enFooter,
        home: enHome,
        header: enHeader,
        schedule: enSchedule,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
