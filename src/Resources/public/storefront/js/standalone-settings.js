(function() {
  "use strict";
  console.log("Standalone settings script loaded");
  const script = document.createElement("script");
  script.src = window.shopware.context.api.assetsPath + "bundles/sovendusapp/administration/js/frontend_react_loader.js";
  script.async = true;
  script.onload = () => {
    console.log("React script loaded");
  };
  script.onerror = (error) => {
    console.error("Error loading React script:", error);
    document.getElementById("sovendus-settings-container").textContent = "Error loading React UI: " + error;
  };
  document.head.appendChild(script);
})();
//# sourceMappingURL=standalone-settings.js.map
