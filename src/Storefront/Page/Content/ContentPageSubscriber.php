<?php

declare(strict_types=1);

namespace Sov\Sovendus\Storefront\Page\Content;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Shopware\Storefront\Page\GenericPageLoadedEvent;
use Sov\Sovendus\Components\SovendusPageData;
use Sov\Sovendus\Service\ConfigService;
use Shopware\Core\Framework\Util\Json;

class ContentPageSubscriber implements EventSubscriberInterface
{
    public const EXTENSION_NAME = 'sovendusPageData';

    protected ConfigService $configService;

    public function __construct(ConfigService $configService)
    {
        $this->configService = $configService;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            GenericPageLoadedEvent::class => 'onGenericPageLoaded'
        ];
    }

    public function onGenericPageLoaded(GenericPageLoadedEvent $event): void
    {
        $request = $event->getRequest();
        $locale = $request->getLocale();

        // Extract country and language from locale
        $country = '';
        $language = '';
        if ($locale) {
            $localeParts = explode('-', $locale);
            $language = strtoupper($localeParts[0] ?? '');
            $country = $localeParts[1] ?? '';
        }

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
            'integrationType' => 'shopware-' . \Sov\Sovendus\SovendusPlugin::PLUGIN_VERSION,
            'country' => $country,
            'language' => $language
        ];

        // Create a data object and add the configuration
        $pageData = new SovendusPageData();
        $pageData->jsConfig = Json::encode($jsConfig);

        // Add the data to the page context
        $event->getContext()->addExtension(self::EXTENSION_NAME, $pageData);
    }
}
