<?php

declare(strict_types=1);

namespace Sov\Sovendus;

use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\UpdateContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Shopware\Core\Framework\Plugin\Context\ActivateContext;
use Shopware\Core\Framework\Plugin\Context\DeactivateContext;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;

class SovendusPlugin extends Plugin
{
    public const PLUGIN_VERSION = '1.2.7';

    public function install(InstallContext $context): void
    {
        parent::install($context);
    }

    public function activate(ActivateContext $context): void
    {
        parent::activate($context);
    }

    public function deactivate(DeactivateContext $context): void
    {
        parent::deactivate($context);
    }

    public function update(UpdateContext $context): void
    {
        parent::update($context);
    }

    public function uninstall(UninstallContext $context): void
    {
        parent::uninstall($context);
        if ($context->keepUserData()) {
            return;
        }
    }

    /**
     * @param RoutingConfigurator $routes
     * @param string $environment
     */
    public function configureRoutes(RoutingConfigurator $routes, string $environment): void
    {
        // We don't need to configure routes here as they are already defined using annotations
        // in the controller classes
    }

    /**
     * Specifies the administration entry point.
     *
     * @return string|null The path relative to the plugin root directory or null if the plugin has no administration entry point.
     */
    public function getAdministrationEntryPath(): ?string
    {
        return 'Resources/app/administration/src'; // Points to the directory containing main.js
    }
}
