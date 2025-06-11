# Sovendus Voucher Network & Checkout Benefits Plugin for Shopware

Official Sovendus Voucher Network & Checkout Benefits Plugin for Shopware

> [!WARNING]
> This plugin is currently not supported by Shopware Cloud and only works in self hosted environments.

> [!WARNING]
> This plugin only works with Shopware 6.x.x

> [!INFO]
> **Disclaimer**
> This plugin is released as open source under the GPL v3 license. We welcome bug reports and pull requests from the community. However, please note that the plugin is provided "as is" without any warranties or guarantees. It may not be compatible with all other plugins and could potentially cause issues with your store. We strongly recommend that you test the plugin thoroughly in a staging environment before deploying it to a live site. Furthermore, we do not promise future support or updates and reserve the right to discontinue support for the plugin at any time.

## Install through Composer

1. Open a terminal and cd into your Shopware installation directory (where composer.json file resides)
2. Execute the following command:
   ```bash
   composer require sovendus/sovendus_voucher_network_and_checkout_benefits
   ```
3. You can easily activate this plugin via the console:
    ``` bash
    bin/console plugin:refresh
    bin/console plugin:install –-activate SovendusPlugin
    ```

## Manual Installation on Shopware

1. Download the latest version [from here](https://github.com/Sovendus-GmbH/Sovendus-Shopware-Voucher-Network-and-Checkout-Benefits-Plugin/releases/)
2. Go to myshop.com/admin#/sw/extension/my-extensions
3. On the top right, click on "Upload Extension" and select the downloaded plugin zip file.

## Setup the Sovendus Plugin

1. Go to myshop.com/admin#/sw/extension/my-extensions
2. Search for the "Sovendus - Voucher Network & Checkout Benefits" plugin, click on the 3 dots on the right and then click on configure
3. Enter the trafficSourceNumber and trafficMediumNumber, you have received in your integration documentation for each country and click on the activate toggle. Once saved, the sovendus banner will be visible on the post checkout page

## Additional setup for usercentrics

In case you are using the cookie consent tool usercentrics, please follow the steps below

1. Add two custom data processing services
2. The first service is called Sovendus and should be in the essential category
3. The second service is called Sovendus-personalized and should be in the category marketing
4. This makes sure that customer data will only get transmitted to Sovendus if the user consents to it.
