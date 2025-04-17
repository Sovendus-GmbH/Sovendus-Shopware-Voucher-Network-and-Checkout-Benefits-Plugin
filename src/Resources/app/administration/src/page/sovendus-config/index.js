import template from './sovendus-config.html.twig';

const { Component } = Shopware;

Component.register('sovendus-config-page', {
    template,

    metaInfo() {
        return {
            title: 'Sovendus App Settings'
        };
    }
});
