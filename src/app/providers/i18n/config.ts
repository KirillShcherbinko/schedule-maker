import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ruEvent from '@/entities/event/config/locales/ru.json';
import enEvent from '@/entities/event/config/locales/en.json';

import ruTag from '@/entities/tag/config/locales/ru.json';
import enTag from '@/entities/tag/config/locales/en.json';

import ruUser from '@/entities/user/config/locales/ru.json';
import enUser from '@/entities/user/config/locales/en.json';

import { ruEventsList } from '@/widgets/events-list';
import { enEventsList } from '@/widgets/events-list';

import ruSettingsMenu from '@/features/settings-menu/config/locales/ru.json';
import enSettingsMenu from '@/features/settings-menu/config/locales/en.json';

import ruFooter from '@/widgets/footer/config/locales/ru.json';
import enFooter from '@/widgets/footer/config/locales/en.json';

import ruHome from '@/pages/home/config/locales/ru.json';
import enHome from '@/pages/home/config/locales/en.json';

import ruLogin from '@/pages/auth/ui/login/config/locales/ru.json';
import enLogin from '@/pages/auth/ui/login/config/locales/en.json';

import ruScheduleContent from '@/pages/schedule/ui/schedule-content/config/locales/ru.json';
import enScheduleContent from '@/pages/schedule/ui/schedule-content/config/locales/en.json';

import { ruAddEventButton } from '@/features/add-event-button';
import { enAddEventButton } from '@/features/add-event-button';

import { ruAddTagButton } from '@/features/add-tag-button';
import { enAddTagButton } from '@/features/add-tag-button';

import ruCreateEventFormModal from '@/pages/schedule/ui/create-event-form-modal/config/locales/ru.json';
import enCreateEventFormModal from '@/pages/schedule/ui/create-event-form-modal/config/locales/en.json';

import ruCreateTagFormModal from '@/pages/schedule/ui/create-tag-form-modal/config/locales/ru.json';
import enCreateTagFormModal from '@/pages/schedule/ui/create-tag-form-modal/config/locales/en.json';

import ruEditEventFormModal from '@/pages/schedule/ui/edit-event-form-modal/config/locales/ru.json';
import enEditEventFormModal from '@/pages/schedule/ui/edit-event-form-modal/config/locales/en.json';

import ruEditTagFormModal from '@/pages/schedule/ui/edit-tag-form-modal/config/locales/ru.json';
import enEditTagFormModal from '@/pages/schedule/ui/edit-tag-form-modal/config/locales/en.json';

import ruEventForm from '@/features/event-form/config/locales/ru.json';
import enEventForm from '@/features/event-form/config/locales/en.json';

import ruTagForm from '@/features/tag-form/config/locales/ru.json';
import enTagForm from '@/features/tag-form/config/locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    defaultNS: 'home',
    ns: [
      'addEventButton',
      'addTagButton',
      'createEventFormModal',
      'createTagFormModal',
      'editEventFormModal',
      'editTagFormModal',
      'event',
      'eventForm',
      'eventsList',
      'footer',
      'home',
      'login',
      'scheduleContent',
      'settingsMenu',
      'tag',
      'tagForm',
      'user',
    ],
    resources: {
      ru: {
        addEventButton: ruAddEventButton,
        addTagButton: ruAddTagButton,
        createEventFormModal: ruCreateEventFormModal,
        createTagFormModal: ruCreateTagFormModal,
        editEventFormModal: ruEditEventFormModal,
        editTagFormModal: ruEditTagFormModal,
        event: ruEvent,
        eventForm: ruEventForm,
        eventsList: ruEventsList,
        footer: ruFooter,
        home: ruHome,
        login: ruLogin,
        scheduleContent: ruScheduleContent,
        settings: ruSettingsMenu,
        tag: ruTag,
        tagForm: ruTagForm,
        user: ruUser,
      },
      en: {
        addEventButton: enAddEventButton,
        addTagButton: enAddTagButton,
        createEventFormModal: enCreateEventFormModal,
        createTagFormModal: enCreateTagFormModal,
        editEventFormModal: enEditEventFormModal,
        editTagFormModal: enEditTagFormModal,
        event: enEvent,
        eventForm: enEventForm,
        eventsList: enEventsList,
        footer: enFooter,
        home: enHome,
        login: enLogin,
        scheduleContent: enScheduleContent,
        settings: enSettingsMenu,
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
