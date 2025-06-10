import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ruEvent from '@/entities/Event/config/locales/ru.json';
import enEvent from '@/entities/Event/config/locales/en.json';

import ruTag from '@/entities/Tag/config/locales/ru.json';
import enTag from '@/entities/Tag/config/locales/en.json';

import ruUser from '@/entities/User/config/locales/ru.json';
import enUser from '@/entities/User/config/locales/en.json';

import ruHeader from '@/widgets/header/config/locales/ru.json';
import enHeader from '@/widgets/header/config/locales/en.json';

import ruFooter from '@/widgets/footer/config/locales/ru.json';
import enFooter from '@/widgets/footer/config/locales/en.json';

import ruHome from '@/pages/home/config/locales/ru.json';
import enHome from '@/pages/home/config/locales/en.json';

import ruLogin from '@/pages/auth/ui/login/config/locales/ru.json';
import enLogin from '@/pages/auth/ui/login/config/locales/en.json';

import ruScheduleContent from '@/pages/schedule/ui/ScheduleContent/config/locales/ru.json';
import enScheduleContent from '@/pages/schedule/ui/ScheduleContent/config/locales/en.json';

import ruCreateEventFormModal from '@/pages/schedule/ui/CreateEventFormModal/config/locales/ru.json';
import enCreateEventFormModal from '@/pages/schedule/ui/CreateEventFormModal/config/locales/en.json';

import ruCreateTagFormModal from '@/pages/schedule/ui/CreateTagFormModal/config/locales/ru.json';
import enCreateTagFormModal from '@/pages/schedule/ui/CreateTagFormModal/config/locales/en.json';

import ruEditEventFormModal from '@/pages/schedule/ui/EditEventFormModal/config/locales/ru.json';
import enEditEventFormModal from '@/pages/schedule/ui/EditEventFormModal/config/locales/en.json';

import ruEditTagFormModal from '@/pages/schedule/ui/EditTagFormModal/config/locales/ru.json';
import enEditTagFormModal from '@/pages/schedule/ui/EditTagFormModal/config/locales/en.json';

import ruEventForm from '@/features/EventForm/config/locales/ru.json';
import enEventForm from '@/features/EventForm/config/locales/en.json';

import ruTagForm from '@/features/TagForm/config/locales/ru.json';
import enTagForm from '@/features/TagForm/config/locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    defaultNS: 'home',
    ns: [
      'createEventFormModal',
      'createTagFormModal',
      'editEventFormModal',
      'editTagFormModal',
      'event',
      'eventForm',
      'footer',
      'header',
      'home',
      'login',
      'scheduleContent',
      'tag',
      'tagForm',
      'user',
    ],
    resources: {
      ru: {
        createEventFormModal: ruCreateEventFormModal,
        createTagFormModal: ruCreateTagFormModal,
        editEventFormModal: ruEditEventFormModal,
        editTagFormModal: ruEditTagFormModal,
        event: ruEvent,
        eventForm: ruEventForm,
        footer: ruFooter,
        home: ruHome,
        header: ruHeader,
        login: ruLogin,
        scheduleContent: ruScheduleContent,
        tag: ruTag,
        tagForm: ruTagForm,
        user: ruUser,
      },
      en: {
        createEventFormModal: enCreateEventFormModal,
        createTagFormModal: enCreateTagFormModal,
        editEventFormModal: enEditEventFormModal,
        editTagFormModal: enEditTagFormModal,
        event: enEvent,
        eventForm: enEventForm,
        footer: enFooter,
        home: enHome,
        header: enHeader,
        login: enLogin,
        scheduleContent: enScheduleContent,
        tag: enTag,
        tagForm: enTagForm,
        user: enUser,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
