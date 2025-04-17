<?php

declare(strict_types=1);

namespace Sov\Sovendus\Storefront\Page\Checkout;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Shopware\Storefront\Page\Checkout\Finish\CheckoutFinishPageLoadedEvent;
use Sov\Sovendus\Components\SovendusData;
use Sov\Sovendus\Service\ConfigService;
use Shopware\Core\Framework\Util\Json;

class ThankYouPageSubscriber implements EventSubscriberInterface
{

    public const EXTENSION_NAME = 'sovendusData';

    protected RequestStack $requestStack;
    protected ConfigService $configService;

    public function __construct(RequestStack $requestStack, ConfigService $configService)
    {
        $this->requestStack = $requestStack;
        $this->configService = $configService;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            CheckoutFinishPageLoadedEvent::class => 'onCheckoutFinishPageLoaded'
        ];
    }

    public function onCheckoutFinishPageLoaded(CheckoutFinishPageLoadedEvent $event): void
    {
        $config = $this->configService->getConfig();
        $sovendusData = new SovendusData();
        $sovendusData->initializeCustomerData($event->getSalesChannelContext()->getCustomer());
        $trafficSourceNumber = $config->getTrafficSourceNumber($sovendusData->consumerCountry);
        $trafficMediumNumber = $config->getTrafficMediumNumber($sovendusData->consumerCountry);
        $isEnabled = $config->isEnabled($sovendusData->consumerCountry);

        if ($config && !is_null($config) && $isEnabled && $trafficSourceNumber && $trafficMediumNumber) {
            $sovendusData->initializeSovendusData($this->requestStack, $this->configService, $event->getPage()->getOrder(), $event->getSalesChannelContext()->getCurrency(), $isEnabled, $trafficSourceNumber, $trafficMediumNumber, $config->getbannerLocation());

            // Create JavaScript configuration similar to WordPress implementation
            $jsConfig = [
                'settings' => [
                    'optimize' => [
                        'settingsType' => 'country',
                        'countries' => [
                            'fallBackEnabled' => false
                        ]
                    ]
                ],
                'iframeContainerQuerySelector' => [
                    'selector' => '#sovendus-integration-container',
                    'where' => 'none'
                ],
                'integrationType' => 'shopware-' . \Sov\Sovendus\SovendusPlugin::PLUGIN_VERSION,
                'orderData' => [
                    'orderId' => $sovendusData->orderId,
                    'orderValue' => [
                        'netOrderValue' => $sovendusData->orderValue
                    ],
                    'orderCurrency' => $sovendusData->orderCurrency
                ],
                'customerData' => [
                    'consumerFirstName' => $sovendusData->consumerFirstName,
                    'consumerLastName' => $sovendusData->consumerLastName,
                    'consumerEmail' => $sovendusData->consumerEmail,
                    'consumerStreetWithNumber' => $sovendusData->consumerStreet . ' ' . $sovendusData->consumerStreetNumber,
                    'consumerZipcode' => $sovendusData->consumerZipcode,
                    'consumerCity' => $sovendusData->consumerCity,
                    'consumerCountry' => $sovendusData->consumerCountry,
                    'consumerPhone' => $sovendusData->consumerPhone
                ]
            ];

            // Add used coupon codes if available
            if ($sovendusData->usedCouponCode) {
                $jsConfig['orderData']['usedCouponCodes'] = [$sovendusData->usedCouponCode];
            }

            // Ensure all required properties are set
            if (empty($jsConfig['orderData']['orderId'])) {
                $jsConfig['orderData']['orderId'] = 'unknown';
            }
            if (!isset($jsConfig['orderData']['orderValue']['netOrderValue']) || $jsConfig['orderData']['orderValue']['netOrderValue'] === 0) {
                $jsConfig['orderData']['orderValue']['netOrderValue'] = 0;
            }
            if (empty($jsConfig['orderData']['orderCurrency'])) {
                $jsConfig['orderData']['orderCurrency'] = 'EUR';
            }

            // Encode the config to JSON and add it to the data
            $sovendusData->jsConfig = Json::encode($jsConfig);
        }

        $event->getContext()->addExtension(self::EXTENSION_NAME, $sovendusData);
    }
}
