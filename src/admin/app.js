// @ts-nocheck
import logo from './extensions/logo.jpg';

const config = {
  auth: {
    logo: logo,
  },
  head: {
    favicon: logo,
  },
  menu: {
    logo: logo,
  },
  translations: {

    en: {
      "Auth.form.welcome.title": "Metadata Solutions Admin",
      "Auth.form.welcome.subtitle": "Log in to your account",

      "app.components.LeftMenu.navbrand.title": "Metadata Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Workplace",
    }
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',

  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
