import template from "./sovendus-settings.html.twig";

const { Component } = Shopware;

Component.register("sovendus-settings", {
  template,

  data() {
    return {
      isLoading: true,
    };
  },

  metaInfo() {
    return {
      title: this.$createTitle(),
    };
  },

  mounted() {
    this.loadReactApp();
  },

  methods: {
    loadReactApp() {
      // Load the React app
      const script = document.createElement("script");
      script.src =
        this.getPublicPath() +
        "bundles/sovendusapp/administration/js/frontend_react_loader.js";
      script.async = true;
      script.onload = () => {
        this.isLoading = false;
      };
      document.head.appendChild(script);
    },

    getPublicPath() {
      return window.shopware.context.api.assetsPath;
    },
  },
});
