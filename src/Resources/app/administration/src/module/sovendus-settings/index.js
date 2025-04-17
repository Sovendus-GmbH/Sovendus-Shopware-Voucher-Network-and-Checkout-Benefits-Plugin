import "./page/sovendus-settings";
import deDE from "./snippet/de-DE.json";
import enGB from "./snippet/en-GB.json";

const { Module } = Shopware;

Module.register("sovendus-settings", {
  type: "plugin",
  name: "sovendus-settings",
  title: "sovendus-settings.general.mainMenuItemGeneral",
  description: "sovendus-settings.general.descriptionTextModule",
  color: "#ff3d58",
  icon: "default-shopping-paper-bag-product",

  snippets: {
    "de-DE": deDE,
    "en-GB": enGB,
  },

  routes: {
    index: {
      component: "sovendus-settings",
      path: "index",
      meta: {
        parentPath: "sw.settings.index",
        privilege: "system.system_config",
      },
    },
  },

  settingsItem: {
    group: "plugins",
    to: "sovendus-settings.index",
    iconComponent: "sw-icon",
    iconName: "default-shopping-paper-bag-product",
    privilege: "system.system_config",
  },
});
