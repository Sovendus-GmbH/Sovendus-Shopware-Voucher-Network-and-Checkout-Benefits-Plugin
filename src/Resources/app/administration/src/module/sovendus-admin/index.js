import './page/sovendus-admin-settings';

const { Module } = Shopware;

Module.register('sovendus-admin', {
    type: 'plugin',
    name: 'sovendus-admin',
    title: 'Sovendus Settings',
    description: 'Sovendus Settings',
    color: '#ff3d58',
    icon: 'default-shopping-paper-bag-product',

    routes: {
        settings: {
            component: 'sovendus-admin-settings',
            path: 'settings',
            meta: {
                parentPath: 'sw.settings.index'
            }
        }
    },

    settingsItem: {
        group: 'plugins',
        to: 'sovendus-admin.settings',
        iconComponent: 'sw-icon',
        iconName: 'default-shopping-paper-bag-product',
        name: 'Sovendus Settings',
        position: 100
    }
});
