import type { BuildConfig } from "sovendus-builder";

const buildConfig: BuildConfig = {
  foldersToClean: [
    "src/Resources/public/storefront/js",
    "src/Resources/public/administration/js",
  ],
  filesToCompile: [
    {
      sovOptions: {
        input: "src/Resources/app/administration/src/admin-frontend/frontend_react_loader.ts",
        output: "src/Resources/public/administration/js/frontend_react_loader.js",
        type: "react-tailwind",
      },
    },
    {
      sovOptions: {
        input: "src/Resources/app/storefront/src/standalone-settings.js",
        output: "src/Resources/public/storefront/js/standalone-settings.js",
        type: "vanilla",
      },
    },
    {
      sovOptions: {
        input:
          "node_modules/sovendus-integration-scripts/src/scripts/vanilla/landing-page/sovendus-page-loader.ts",
        output: "src/Resources/public/storefront/js/sovendus-page.js",
        type: "vanilla",
      },
    },
    {
      sovOptions: {
        input:
          "node_modules/sovendus-integration-scripts/src/scripts/vanilla/thankyou-page/thankyou-page-loader.ts",
        output: "src/Resources/public/storefront/js/thankyou-page.js",
        type: "vanilla",
      },
    },
  ],
  filesOrFoldersToCopy: [
    {
      input:
        "node_modules/sovendus-integration-settings-ui/dist/logos/sovendus-logo-white.png",
      output: "src/Resources/public/storefront/img/sovendus-logo-white.png",
    },
  ],
};

export default buildConfig;
