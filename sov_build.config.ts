import type { BuildConfig } from "sovendus-builder";

const buildConfig: BuildConfig = {
  foldersToClean: [
    "src/Resources/public/storefront/js",
    "src/Resources/public/administration/js",
    "src/Resources/app/administration/src/main.js", // Add main.js to clean
  ],
  filesToCompile: [
    {
      sovOptions: {
        input:
          "src/Resources/app/administration/src/admin-frontend/frontend_react_loader.ts",
        output: "src/Resources/app/administration/src/main.js", // Changed output path
        type: "react-tailwind",
        bundleReact: true,
        
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
