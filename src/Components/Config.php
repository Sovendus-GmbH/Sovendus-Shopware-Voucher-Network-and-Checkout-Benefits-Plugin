<?php

namespace Sov\Sovendus\Components;

use Shopware\Core\System\SystemConfig\SystemConfigService;

/**
 * Configuration helper for Sovendus plugin
 */
class Config
{
    /**
     * @var SystemConfigService
     */
    private $systemConfigService;

    /**
     * @var string
     */
    private const CONFIG_DOMAIN = 'SovendusPlugin.config';

    /**
     * @var string
     */
    private const SETTINGS_KEY = 'settingsJson';

    /**
     * @param SystemConfigService $systemConfigService
     */
    public function __construct(SystemConfigService $systemConfigService)
    {
        $this->systemConfigService = $systemConfigService;
    }

    /**
     * Get Sovendus configuration
     *
     * @return array Configuration array
     */
    public function getConfig(): array
    {
        $settingsJson = $this->systemConfigService->get(self::CONFIG_DOMAIN . '.' . self::SETTINGS_KEY);

        // Try to decode JSON if it's a string
        if (is_string($settingsJson) && !empty($settingsJson)) {
            $settings = json_decode($settingsJson, true);
            if (is_array($settings)) {
                return $settings;
            }
        }

        // Default empty array if nothing is found
        return [];
    }

    /**
     * Set Sovendus configuration
     *
     * @param array $settings The settings to save
     * @return bool Success status
     */
    public function setConfig(array $settings): bool
    {
        $settingsJson = json_encode($settings);
        $this->systemConfigService->set(self::CONFIG_DOMAIN . '.' . self::SETTINGS_KEY, $settingsJson);
        return true;
    }

    /**
     * Get the configuration domain
     *
     * @return string
     */
    public function getConfigDomain(): string
    {
        return self::CONFIG_DOMAIN;
    }

    /**
     * Get the settings key
     *
     * @return string
     */
    public function getSettingsKey(): string
    {
        return self::SETTINGS_KEY;
    }
}
