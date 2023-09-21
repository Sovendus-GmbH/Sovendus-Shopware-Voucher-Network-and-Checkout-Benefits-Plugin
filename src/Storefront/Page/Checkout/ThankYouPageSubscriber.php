<?php

declare(strict_types=1);

namespace Sov\Sovendus\Storefront\Page\Checkout;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Shopware\Storefront\Page\Checkout\Finish\CheckoutFinishPageLoadedEvent;
use Sov\Sovendus\Components\SovendusData;
use Sov\Sovendus\Service\ConfigService;

class ThankYouPageSubscriber implements EventSubscriberInterface {

    public const EXTENSION_NAME = 'sovendusData';

    protected RequestStack $requestStack;
    protected ConfigService $configService;

    public function __construct(RequestStack $requestStack, ConfigService $configService) {
        $this->requestStack = $requestStack;
        $this->configService = $configService;
    }

    public static function getSubscribedEvents(): array {
        return [
            CheckoutFinishPageLoadedEvent::class => 'onCheckoutFinishPageLoaded'
        ];
    }

    public function onCheckoutFinishPageLoaded(CheckoutFinishPageLoadedEvent $event): void {
        $config = $this->configService->getConfig();
        $sovendusData = new SovendusData();
        if ($config && !is_null($config) && $config->isEnabled() && ($config->getTrafficSourceNumber() != '') && ($config->getTrafficMediumNumber() != '')) {
            $sovendusData->initializeSovendusData($this->requestStack, $this->configService, $event->getPage()->getOrder(), $event->getSalesChannelContext()->getCustomer(), $event->getSalesChannelContext()->getCurrency());

            $sovendusData->assign([
                'enabled' => $config->isEnabled(),
                'iframeContainerId' => 'sovendus-container-1',
                'bannerLocation' => $config->getbannerLocation(),
                'trafficSourceNumber' => $config->getTrafficSourceNumber(),
                'trafficMediumNumber' => $config->getTrafficMediumNumber(),
                'consumerSalutation' => $sovendusData->consumerSalutation,
                'consumerFirstName' => $sovendusData->consumerFirstName,
                'consumerLastName' => $sovendusData->consumerLastName,
                'consumerEmail' => $sovendusData->consumerEmail,
                'consumerCountry' => $sovendusData->consumerCountry,
                'consumerZipcode' => $sovendusData->consumerZipcode,
                'consumerPhone' => $sovendusData->consumerPhone,
                'consumerStreet' => $sovendusData->consumerStreet,
                'consumerStreetNumber' => $sovendusData->consumerStreetNumber,
                'consumerCity' => $sovendusData->consumerCity,
                'sessionId' => $sovendusData->sessionId,
                'timestamp' => $sovendusData->timestamp,
                'orderId' => $sovendusData->orderId,
                'orderValue' => $sovendusData->orderValue,
                'orderCurrency' => $sovendusData->orderCurrency,
                'usedCouponCode' => $sovendusData->usedCouponCode,
            ]);
        }
        $event->getContext()->addExtension(self::EXTENSION_NAME, $sovendusData);
    }

}
