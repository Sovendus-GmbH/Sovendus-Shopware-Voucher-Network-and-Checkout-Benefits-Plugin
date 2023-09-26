<?php

declare(strict_types=1);

namespace Sov\Sovendus\Components;

use Shopware\Core\System\SystemConfig\SystemConfigService;

class Config
{
    public const PLUGIN_NAME = 'SovendusPlugin';
    public const BANNER_POSITION_BELOW_FINISH_TEASER = 'belowThankYouMessage';
    public const BANNER_POSITION_ABOVE_FINISH_TEASER = 'aboveThankYouMessage';

    protected SystemConfigService $systemConfigService;
    protected string $path;
    protected bool $enabled;
    protected string $salesChannelId;
    protected int $trafficSourceNumber;
    protected int $trafficMediumNumber;
    protected string $bannerLocation;

    public function __construct(SystemConfigService $systemConfigService, string $salesChannelId)
    {
        $this->path = self::PLUGIN_NAME . '.config.';
        $this->systemConfigService = $systemConfigService;
        $this->salesChannelId = $salesChannelId;
        $this->enabled = !is_null($systemConfigService->get($this->path . 'enabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'enabled', $salesChannelId) : false;
        $this->trafficSourceNumber = !is_null($systemConfigService->get($this->path . 'trafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'trafficSourceNumber', $salesChannelId) : 0;
        $this->trafficMediumNumber = !is_null($systemConfigService->get($this->path . 'trafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'trafficMediumNumber', $salesChannelId) : 0;
        $this->bannerLocation = !is_null($systemConfigService->get($this->path . 'bannerLocation', $salesChannelId)) ? $systemConfigService->get($this->path . 'bannerLocation', $salesChannelId) : self::BANNER_POSITION_BELOW_FINISH_TEASER;
    }

    /**
     * 
     * @return bool
     */
    public function isEnabled(): bool
    {
        return $this->enabled;
    }

    /**
     * 
     * @return int
     */
    public function getTrafficSourceNumber(): int
    {
        return $this->trafficSourceNumber;
    }

    /**
     * 
     * @return int
     */
    public function getTrafficMediumNumber(): int
    {
        return $this->trafficMediumNumber;
    }

    /**
     * 
     * @return string
     */
    public function getbannerLocation(): string
    {
        return $this->bannerLocation;
    }

}