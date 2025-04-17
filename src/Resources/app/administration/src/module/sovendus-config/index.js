import deDE from '../sovendus-settings/snippet/de-DE.json';
import enGB from '../sovendus-settings/snippet/en-GB.json';

const { Module } = Shopware;

Module.register('sovendus-config', {
    type: 'plugin',
    name: 'sovendus-config',
    title: 'Sovendus App Settings',
    description: 'Configure Sovendus App',
    color: '#ff3d58',
    icon: 'default-shopping-paper-bag-product',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        page: {
            component: 'sovendus-config-page',
            path: 'page',
            meta: {
                parentPath: 'sw.settings.index'
            }
        }
    }
});
