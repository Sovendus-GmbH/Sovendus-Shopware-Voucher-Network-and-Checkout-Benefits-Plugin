import template from './sovendus-injector.html.twig';

const { Component } = Shopware;

Component.register('sovendus-injector', {
    template,

    data() {
        return {
            scriptInjected: false,
            interval: null
        };
    },

    created() {
        console.log('Sovendus Injector created');
        
        // Start checking for the Sovendus config page
        this.interval = setInterval(() => {
            this.checkForSovendusConfig();
        }, 1000);
    },

    beforeDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    },

    methods: {
        checkForSovendusConfig() {
            console.log('Checking for Sovendus config page');
            
            // Check if we're on the Sovendus config page
            if (window.location.hash.includes('system/SovendusPlugin')) {
                console.log('Sovendus config page detected');
                
                // Clear the interval
                clearInterval(this.interval);
                
                // Wait for the page to render
                setTimeout(() => {
                    this.injectReactUI();
                }, 500);
            }
        },
        
        injectReactUI() {
            console.log('Injecting React UI');
            
            // Hide all form elements
            const formElements = document.querySelectorAll('.sw-system-config__card-title, .sw-form-field');
            formElements.forEach(el => {
                el.style.display = 'none';
            });
            
            // Create container if it doesn't exist
            let container = document.getElementById('sovendus-settings-container');
            if (!container) {
                console.log('Creating container');
                container = document.createElement('div');
                container.id = 'sovendus-settings-container';
                container.style.minHeight = '600px';
                container.style.border = '2px solid red';
                container.textContent = 'Sovendus Settings Container';
                
                // Find a place to insert it
                const cardContent = document.querySelector('.sw-card__content');
                if (cardContent) {
                    console.log('Inserting container into card content');
                    cardContent.appendChild(container);
                } else {
                    console.log('Appending container to body');
                    document.body.appendChild(container);
                }
            }
            
            // Load the React script if not already loaded
            if (!this.scriptInjected) {
                console.log('Loading React script');
                const script = document.createElement('script');
                script.src = this.getPublicPath() + 'bundles/sovendusapp/administration/js/frontend_react_loader.js';
                script.async = true;
                script.onload = () => {
                    console.log('React script loaded');
                    this.scriptInjected = true;
                };
                script.onerror = (error) => {
                    console.error('Error loading React script:', error);
                };
                document.head.appendChild(script);
            }
        },
        
        getPublicPath() {
            return window.shopware.context.api.assetsPath;
        }
    }
});
