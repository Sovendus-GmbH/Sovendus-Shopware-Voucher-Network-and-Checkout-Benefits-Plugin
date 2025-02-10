import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

console.log("Hello from Sovendus Plugin");

function SettingsComponent() {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch settings from the backend
    fetch("/api/_action/system-config/schema")
      .then((response) => response.json())
      .then((data) => {
        setSettings(data);
        setLoading(false);
      });
  }, []);

  const saveSettings = () => {
    // Save settings to the backend
    fetch("/api/_action/system-config/schema", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    }).then((response) => {
      if (response.ok) {
        alert("Settings saved successfully");
      } else {
        alert("Failed to save settings");
      }
    });
  };
  console.log("1Hello from Sovendus Plugin");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Plugin Settings</h1>
      {/* Add form fields to manage "settings" here */}
      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
}

Shopware.Module.register("sovendus-plugin-config", {
  type: "plugin",
  name: "SovendusPluginConfig",
  title: "Sovendus Plugin Settings",
  description: "React-based config page",
  color: "#000",
  icon: "default-symbol-settings",
  routes: {
    index: {
      component: "sovendus-plugin-config-page",
      path: "index",
    },
  },
});

Shopware.Component.register("sovendus-plugin-config-page", {
  render(el) {
    console.log("2Hello from Sovendus Plugin");
    return ReactDOM.render(<SettingsComponent />, this.$el);
  },
});
