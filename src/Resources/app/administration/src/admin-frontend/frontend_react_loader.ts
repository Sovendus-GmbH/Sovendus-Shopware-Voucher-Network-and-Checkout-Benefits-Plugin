import React from "react";
import ReactDOM from "react-dom";
import { loggerError, loggerInfo } from "sovendus-integration-settings-ui";
import { SovendusBackendForm } from "sovendus-integration-settings-ui";
import type { SovendusAppSettings } from "sovendus-integration-types";

declare global {
  interface Window {
    shopware: {
      context: {
        api: {
          assetsPath: string;
        };
        csrf: {
          token: string;
        };
      };
    };
    sovendusApi?: {
      getSettings: string;
      saveSettings: string;
    };
  }
}

console.log("[Sovendus React] Script loaded");

function loadSettingsUi(): void {
  console.log("[Sovendus React] loadSettingsUi called");

  // Initialize settings from window or fetch them
  const fetchSettings = async (): Promise<SovendusAppSettings> => {
    console.log("[Sovendus React] Fetching settings");
    try {
      // Use the standalone API endpoint if available, otherwise use the admin API
      const url = window.sovendusApi?.getSettings || "/api/v1/_action/sovendus/settings";
      console.log("[Sovendus React] Fetching settings from:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-Token": window.shopware.context.csrf.token
        }
      });

      console.log("[Sovendus React] Settings fetch response:", response.status);

      if (!response.ok) {
        throw new Error("Failed to fetch settings");
      }

      const data = await response.json();
      console.log("[Sovendus React] Settings loaded:", data);
      loggerInfo("Loaded settings", data);
      return data || { version: "3.0.0" };
    } catch (error) {
      console.error("[Sovendus React] Error fetching settings:", error);
      loggerError("Error fetching settings:", error);
      return { version: "3.0.0" };
    }
  };

  const handleSettingsUpdate = async (
    updatedSettings: SovendusAppSettings
  ): Promise<SovendusAppSettings> => {
    console.log("[Sovendus React] Saving settings:", updatedSettings);
    try {
      // Use the standalone API endpoint if available, otherwise use the admin API
      const url = window.sovendusApi?.saveSettings || "/api/v1/_action/sovendus/settings";
      console.log("[Sovendus React] Saving settings to:", url);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-Token": window.shopware.context.csrf.token
        },
        body: JSON.stringify({ settings: updatedSettings })
      });

      console.log("[Sovendus React] Settings save response:", response.status);

      if (response.ok) {
        console.log("[Sovendus React] Settings saved successfully");
        loggerInfo("Settings saved successfully", updatedSettings);
        return updatedSettings;
      } else {
        const errorText = await response.text();
        console.error("[Sovendus React] Error saving settings:", errorText);
        throw new Error(errorText);
      }
    } catch (error) {
      console.error("[Sovendus React] Save failed:", error);
      loggerError("Save failed:", error);
      throw error;
    }
  };

  const containerId = "sovendus-settings-container";
  console.log("[Sovendus React] Looking for container with ID:", containerId);
  let container = document.getElementById(containerId);

  if (!container) {
    console.error(`[Sovendus React] Container with id ${containerId} not found`);

    // Try to create the container
    console.log("[Sovendus React] Attempting to create container");
    container = document.createElement("div");
    container.id = containerId;
    container.style.minHeight = "600px";
    container.style.border = "2px solid red";
    container.textContent = "Sovendus Settings Container";

    // Find a good place to insert the container
    const cardContent = document.querySelector(".sw-card__content");
    if (cardContent) {
      console.log("[Sovendus React] Inserting container into card content");
      cardContent.appendChild(container);
    } else {
      console.error("[Sovendus React] Card content not found, inserting into body");
      document.body.appendChild(container);
    }
  }

  console.log("[Sovendus React] Container found or created, initializing UI");
  initializeUI(container);

  async function initializeUI(targetContainer: HTMLElement): Promise<void> {
    console.log("[Sovendus React] Initializing UI");
    try {
      const currentSettings = await fetchSettings();
      console.log("[Sovendus React] Rendering React component");

      // Clear the container
      targetContainer.textContent = '';

      // Use the old render method for compatibility
      ReactDOM.render(
        React.createElement(SovendusBackendForm, {
          currentStoredSettings: currentSettings,
          saveSettings: handleSettingsUpdate,
          callSaveOnLoad: false,
        }),
        targetContainer
      );

      console.log("[Sovendus React] React component rendered");
    } catch (error) {
      console.error("[Sovendus React] Error initializing UI:", error);
      targetContainer.textContent = 'Error initializing UI: ' + error;
    }
  }
}

console.log("[Sovendus React] Setting up DOMContentLoaded listener");

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  console.log("[Sovendus React] DOMContentLoaded fired");
  loadSettingsUi();
});

// Also try to load immediately in case the DOM is already loaded
console.log("[Sovendus React] Checking if document is already complete");
if (document.readyState === "complete" || document.readyState === "interactive") {
  console.log("[Sovendus React] Document already complete, loading immediately");
  setTimeout(loadSettingsUi, 100);
}
