import template from './sovendus-config.html.twig';

const { Component } = Shopware;

Component.register('sovendus-config', {
    template,

    data() {
        return {
            isLoading: true
        };
    },

    mounted() {
        this.loadReactApp();
    },

    methods: {
        loadReactApp() {
            // Load the React app
            const script = document.createElement('script');
            script.src = this.getPublicPath() + 'bundles/sovendusapp/administration/js/frontend_react_loader.js';
            script.async = true;
            script.onload = () => {
                this.isLoading = false;
            };
            document.head.appendChild(script);
        },

        getPublicPath() {
            return window.shopware.context.api.assetsPath;
        }
    }
});
