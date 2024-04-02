<?php

declare(strict_types=1);

namespace Sov\Sovendus\Storefront\Page\Checkout;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Shopware\Storefront\Page\Checkout\Finish\CheckoutFinishPageLoadedEvent;
use Sov\Sovendus\Components\SovendusData;
use Sov\Sovendus\Service\ConfigService;

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
        }
        $event->getContext()->addExtension(self::EXTENSION_NAME, $sovendusData);
    }
}