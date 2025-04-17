import template from "./sw-system-config.html.twig";

const { Component } = Shopware;

Component.override("sw-system-config", {
  template,

  data() {
    return {
      reactLoaded: false,
    };
  },

  computed: {
    isSovendusConfig() {
      const isSovendus = this.domain === "SovendusPlugin.config";
      console.log("[Sovendus] Checking if config is Sovendus:", {
        domain: this.domain,
        isSovendus,
      });
      return isSovendus;
    },
  },

  methods: {
    loadReactApp() {
      console.log("[Sovendus] Attempting to load React app");
      if (this.reactLoaded) {
        console.log("[Sovendus] React already loaded, skipping");
        return;
      }

      // Hide all form elements
      setTimeout(() => {
        console.log("[Sovendus] Hiding form elements");
        const formElements = document.querySelectorAll(
          ".sw-system-config__card-title, .sw-form-field"
        );
        console.log("[Sovendus] Found form elements:", formElements.length);
        formElements.forEach((el) => {
          el.style.display = "none";
        });
      }, 100);

      // Check if container exists
      const container = document.getElementById("sovendus-settings-container");
      console.log("[Sovendus] Container exists:", !!container);

      if (!container) {
        console.log("[Sovendus] Creating container");
        const newContainer = document.createElement("div");
        newContainer.id = "sovendus-settings-container";
        newContainer.style.minHeight = "600px";

        // Find a good place to insert the container
        const cardContent = document.querySelector(".sw-card__content");
        if (cardContent) {
          console.log("[Sovendus] Inserting container into card content");
          cardContent.appendChild(newContainer);
        } else {
          console.log("[Sovendus] Card content not found, inserting into body");
          document.body.appendChild(newContainer);
        }
      }

      // Load the React app
      console.log("[Sovendus] Creating script element");
      const script = document.createElement("script");
      const publicPath = this.getPublicPath();
      const scriptSrc =
        publicPath +
        "bundles/sovendusapp/administration/js/frontend_react_loader.js";
      console.log("[Sovendus] Script src:", scriptSrc);

      script.src = scriptSrc;
      script.async = true;

      script.onload = () => {
        this.reactLoaded = true;
        console.log("[Sovendus] React app script loaded successfully");
      };

      script.onerror = (error) => {
        console.error("[Sovendus] Error loading React app script:", error);
      };

      document.head.appendChild(script);
      console.log("[Sovendus] Script appended to head");
    },

    getPublicPath() {
      const path = window.shopware.context.api.assetsPath;
      console.log("[Sovendus] Public path:", path);
      return path;
    },
  },

  created() {
    console.log("[Sovendus] Component created");
  },

  mounted() {
    console.log(
      "[Sovendus] Component mounted, isSovendusConfig:",
      this.isSovendusConfig
    );
    if (this.isSovendusConfig) {
      console.log("[Sovendus] Loading React app from mounted hook");
      this.loadReactApp();
    }
  },

  updated() {
    console.log(
      "[Sovendus] Component updated, isSovendusConfig:",
      this.isSovendusConfig,
      "reactLoaded:",
      this.reactLoaded
    );
    if (this.isSovendusConfig && !this.reactLoaded) {
      console.log("[Sovendus] Loading React app from updated hook");
      this.loadReactApp();
    }
  },
});
