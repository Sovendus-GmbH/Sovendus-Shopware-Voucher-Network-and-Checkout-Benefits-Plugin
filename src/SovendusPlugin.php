<?php

declare(strict_types=1);

namespace Sov\Sovendus;

use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\InstallContext;
use Shopware\Core\Framework\Plugin\Context\UpdateContext;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Shopware\Core\Framework\Plugin\Context\ActivateContext;
use Shopware\Core\Framework\Plugin\Context\DeactivateContext;

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
}
