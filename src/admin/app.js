// @ts-nocheck
import logo from './extensions/logo.jpg';
import favicon from './extensions/favicon.jpg';

const config = {
  auth: {
    logo: logo,
  },
  head: {
    favicon: favicon,
  },
  menu: {
    logo: logo,
  },
  locales: [
    'vi',
  ],
  translations: {

    en: {
      "Auth.form.welcome.title": "Metadata Solutions Admin",
      "Auth.form.welcome.subtitle": "Log in to your account",

      "app.components.LeftMenu.navbrand.title": "Metadata Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Workplace",
    },
    vi: {
      "Auth.form.welcome.title": "Metadata Solutions Admin",
      "Auth.form.welcome.subtitle": "Đăng nhập với tài khoản",

      "app.components.LeftMenu.navbrand.title": "Metadata Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Workplace",
    },

  },

};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
