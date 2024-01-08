# Sovendus Voucher Network & Checkout Benefits Plugin for Shopware
Official Sovendus Voucher Network & Checkout Benefits Plugin for Shopware

## Install through Composer

1. Open a terminal and cd into your Shopware installation directory (where composer.json file resides)
2. Execute the following command:
    ``` bash
    composer require sovendus/sovendus_voucher_network_and_checkout_benefits
    ```
3. You can easily activate this plugin via the console:
    ``` bash
    bin/console plugin:refresh​
    bin/console plugin:install –-activate sovendus_voucher_network_and_checkout_benefits
    ```
## Manual Installation on Shopware

1. Download the latest version [from here](https://github.com/Sovendus-GmbH/Sovendus-Shopware-Voucher-Network-and-Checkout-Benefits-Plugin/releases/)
2. Go to myshop.com/admin#/sw/extension/my-extensions
3. On the top right, click on "Upload Extension" and select the downloaded plugin zip file.


## Setup the Sovendus Plugin

1. Go to myshop.com/admin#/sw/extension/my-extensions
2. Search for the "Sovendus - Voucher Network & Checkout Benefits" plugin, click on the 3 dots on the right and then click on configure
3. Enter the trafficSourceNumber and trafficMediumNumber, you have received in your integration documentation for each country and click on the activate toggle. Once saved, the sovendus banner will be visible on the post checkout page