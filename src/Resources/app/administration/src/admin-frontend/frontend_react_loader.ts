import React from "react";
import { createRoot } from "react-dom/client";
import { loggerError, loggerInfo } from "sovendus-integration-settings-ui";
import { SovendusBackendForm } from "sovendus-integration-settings-ui";
import { type SovendusAppSettings, Versions } from "sovendus-integration-types";

/**
 * Window interface extension for Sovendus settings
 */
declare global {
  interface Window {
    shopware?: {
      context: {
        api: {
          assetsPath: string;
        };
        csrf: {
          token: string;
        };
      };
    };

    sovendusSettings: {
      settings: SovendusAppSettings;
      ajaxurl: string;
      nonce: string;
    };
  }
}

/**
 * Default settings - these will be used if no settings are found
 */
const DEFAULT_SETTINGS: SovendusAppSettings = {
  version: Versions.THREE,
  // Add other default settings here as needed
};

/**
 * Load the settings UI
 *
 * This function initializes the Sovendus settings UI by:
 * 1. Checking if the required global settings are available
 * 2. Getting the current settings or using defaults
 * 3. Finding the container element
 * 4. Rendering the settings form
 */
function loadSettingsUi(): void {
  try {
    loggerInfo("Initializing Sovendus settings UI");

    // Check if sovendusSettings is available
    if (!window.sovendusSettings) {
      throw new Error(
        "window.sovendusSettings is not defined - make sure it's correctly initialized"
      );
    }

    // Get settings from the window object or use defaults
    const currentSettings = window.sovendusSettings.settings || DEFAULT_SETTINGS;

    // Get the AJAX URL for saving settings
    const saveUrl = window.sovendusSettings.ajaxurl;
    if (!saveUrl) {
      throw new Error(
        "AJAX URL is not defined - make sure it's correctly initialized"
      );
    }

    // Find the container element
    const containerId = "sovendus-settings-container";
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(
        `Container with id ${containerId} not found - make sure the container exists`
      );
    }

    /**
     * Handle settings updates
     *
     * @param updatedSettings The updated settings to save
     * @returns A promise that resolves with the updated settings
     */
    const handleSettingsUpdate = async (
      updatedSettings: SovendusAppSettings
    ): Promise<SovendusAppSettings> => {
      try {
        const response = await fetch(saveUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-Token": window.sovendusSettings.nonce
          },
          body: JSON.stringify({ settings: updatedSettings })
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }

        loggerInfo("Settings saved successfully");
        return updatedSettings;
      } catch (error) {
        loggerError("Save failed:", error);
        throw error;
      }
    };

    // Clear the container
    container.innerHTML = "";

    // Render the settings form using React
    const root = createRoot(container);
    loggerInfo("Rendering Sovendus settings form");

    // Render the SovendusBackendForm component
    root.render(
      React.createElement(SovendusBackendForm, {
        currentStoredSettings: currentSettings,
        saveSettings: handleSettingsUpdate,
        callSaveOnLoad: false
      })
    );
  } catch (error) {
    // Handle any errors that occurred during initialization
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    loggerError(`Failed to initialize settings UI: ${errorMessage}`);

    // Display a simple error message to the user
    const container = document.getElementById("sovendus-settings-container");
    if (container) {
      container.innerHTML = `<div style="color: red; padding: 20px; border: 1px solid red; margin: 20px 0;">Error loading Sovendus settings: ${errorMessage}</div>`;
    }
  }
}

// Execute the function immediately
loadSettingsUi();
