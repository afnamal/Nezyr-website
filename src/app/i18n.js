import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonTr from '../../public/locales/tr/common.json';
import commonEn from '../../public/locales/en/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { common: commonEn },
    tr: { common: commonTr },
  },
  lng: 'tr',
  fallbackLng: 'tr',
  interpolation: { escapeValue: false },
});

export default i18n;
