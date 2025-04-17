import type { ReleaseConfig } from "sovendus-release-tool";

const releaseConfig: ReleaseConfig = {
  packages: [
    {
      directory: "./",
      release: {
        version: "2.1.1",
        versionBumper: [
          // TODO handle the version string in wc-sovendus.php still needs to be done manually
          {
            filePath: "wc-sovendus/wc-sovendus.php",
            varName: "SOVENDUS_VERSION",
          },
        ],
      },
      updateDeps: true,
      lint: true,
      build: true,
      test: false,
    },
  ],
};
export default releaseConfig;
