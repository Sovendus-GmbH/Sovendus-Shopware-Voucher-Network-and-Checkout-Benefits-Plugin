import template from "./sovendus-admin-settings.html.twig";

const { Component } = Shopware;

Component.register("sovendus-admin-settings", {
  template,

  metaInfo() {
    return {
      title: "Sovendus Settings",
    };
  },

  methods: {
    openStandaloneSettings() {
      // Open the standalone settings page in a new tab
      window.open("/sovendus/settings", "_blank");
    },
  },
});
