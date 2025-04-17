import template from "./sw-plugin-config.html.twig";

const { Component } = Shopware;

Component.override("sw-plugin-config", {
  template,

  data() {
    return {
      isLoading: false,
    };
  },

  computed: {
    technicalName() {
      if (!this.plugin) {
        return "";
      }

      return this.plugin.name;
    },

    isSovendusPlugin() {
      return this.technicalName === "SovendusPlugin";
    },

    pluginConfigRoute() {
      if (this.isSovendusPlugin) {
        return { name: "sovendus.config.page" };
      }
      return {
        name: "sw.plugin.config",
        params: { namespace: this.namespace },
      };
    },
  },

  watch: {
    isSovendusPlugin(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          this.loadReactApp();
        });
      }
    },
  },

  mounted() {
    if (this.isSovendusPlugin) {
      this.loadReactApp();
    }
  },

  methods: {
    loadReactApp() {
      this.isLoading = true;
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
