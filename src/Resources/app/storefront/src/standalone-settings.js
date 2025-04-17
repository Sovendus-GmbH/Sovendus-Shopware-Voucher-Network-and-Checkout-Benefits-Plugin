// This is a simple script to load the React UI
console.log('Standalone settings script loaded');

// Create a script element to load the React UI
const script = document.createElement('script');
script.src = window.shopware.context.api.assetsPath + 'bundles/sovendusapp/administration/js/frontend_react_loader.js';
script.async = true;
script.onload = () => {
    console.log('React script loaded');
};
script.onerror = (error) => {
    console.error('Error loading React script:', error);
    document.getElementById('sovendus-settings-container').textContent = 'Error loading React UI: ' + error;
};

// Append the script to the head
document.head.appendChild(script);
