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

      category: 'Category management',
      layout: 'Theme management',
      description: 'Customer management',
      "Auth.form.welcome.title": "Metadata Solutions Admin",
      "Auth.form.welcome.subtitle": "Log in to your account",

      "app.components.LeftMenu.navbrand.title": "Metadata Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Workplace",
      "Media Library": "Hehheeh",

      "content-manager.containers.ListPage.table-headers.category_name": 'Categories',

      'content-manager.containers.ListPage.table-headers.theme_name': 'Name theme',

    },

    vi: {
      category: 'Quản lý danh mục',
      layout: 'Quản lý giao diện',
      customer: 'Quản lý khách hàng',
      CATEGORY_NAME: 'Tên danh mục',

      "Content Manager": "Content Manager sssssssssssssssssssssssssssssssssssssssssssss",
      "content-manager.containers.SettingViewModel.pluginHeader.title": "Nội Dung",

      "content-manager.containers.ListPage.table-headers.category_name": 'Tên danh mục',
      'content-manager.containers.ListPage.table-headers.createdAt': 'Thời gian tạo',
      'content-manager.containers.ListPage.table-headers.updatedAt': 'Thời gian cập nhật',

      'content-manager.containers.ListPage.table-headers.theme_name': 'Tên giao diện',
      'content-manager.containers.ListPage.table-headers.image': 'Ảnh',
      'content-manager.containers.ListPage.table-headers.updatedBy': 'Người tạo',
      'content-manager.containers.ListPage.table-headers.categories': 'Danh mục',
      'content-manager.containers.ListPage.table-headers.state': 'Trạng thái',
      'content-manager.containers.ListPage.table-headers.[Content available in]': 'Ngôn ngữ',
      'content-manager.containers.ListPage.table-headers.phone_number': 'phone',
    },

    fr: {
      "Media Library": "Thư viện",

    }

  },

};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
