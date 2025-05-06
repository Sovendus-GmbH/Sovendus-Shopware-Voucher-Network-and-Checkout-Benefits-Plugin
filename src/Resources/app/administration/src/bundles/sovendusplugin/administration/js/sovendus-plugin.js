// This file is used to ensure the plugin is loaded in the Shopware administration
console.log('[Sovendus] Plugin loaded');

// Load the frontend_react_loader.js script
const script = document.createElement('script');
script.src = window.shopware.context.api.assetsPath + 'bundles/sovendusplugin/administration/js/frontend_react_loader.js';
script.async = true;
document.head.appendChild(script);
console.log('[Sovendus] Script tag added from plugin.js');
