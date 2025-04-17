import template from './sw-plugin-config.html.twig';

Shopware.Component.override('sw-plugin-config', {
    template,
    
    computed: {
        isSovendusPlugin() {
            if (!this.plugin) {
                return false;
            }
            
            return this.plugin.name === 'SovendusPlugin';
        }
    }
});
