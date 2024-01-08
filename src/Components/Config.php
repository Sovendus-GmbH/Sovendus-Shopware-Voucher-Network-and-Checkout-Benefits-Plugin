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
    protected array $enabled;
    protected string $salesChannelId;
    protected array $trafficSourceNumber;
    protected array $trafficMediumNumber;
    protected string $bannerLocation;

    public function __construct(SystemConfigService $systemConfigService, string $salesChannelId)
    {
        $this->path = self::PLUGIN_NAME . '.config.';
        $this->systemConfigService = $systemConfigService;
        $this->salesChannelId = $salesChannelId;
        $this->enabled = array(
            "DE" => !is_null($systemConfigService->get($this->path . 'deEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'deEnabled', $salesChannelId) : false,
            "AT" => !is_null($systemConfigService->get($this->path . 'atEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'atEnabled', $salesChannelId) : false,
            "NL" => !is_null($systemConfigService->get($this->path . 'nlEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'nlEnabled', $salesChannelId) : false,
            "CH" => !is_null($systemConfigService->get($this->path . 'chEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'chEnabled', $salesChannelId) : false,
            "FR" => !is_null($systemConfigService->get($this->path . 'frEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'frEnabled', $salesChannelId) : false,
            "IT" => !is_null($systemConfigService->get($this->path . 'itEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'itEnabled', $salesChannelId) : false,
            "UK" => !is_null($systemConfigService->get($this->path . 'ukEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'ukEnabled', $salesChannelId) : false,
            "DK" => !is_null($systemConfigService->get($this->path . 'dkEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'dkEnabled', $salesChannelId) : false,
            "SE" => !is_null($systemConfigService->get($this->path . 'seEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'seEnabled', $salesChannelId) : false,
            "ES" => !is_null($systemConfigService->get($this->path . 'esEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'esEnabled', $salesChannelId) : false,
            "BE" => !is_null($systemConfigService->get($this->path . 'beEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'beEnabled', $salesChannelId) : false,
            "PL" => !is_null($systemConfigService->get($this->path . 'plEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'plEnabled', $salesChannelId) : false,
        );
        $this->trafficSourceNumber = array(
            "DE" => !is_null($systemConfigService->get($this->path . 'deTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'deTrafficSourceNumber', $salesChannelId) : 0,
            "AT" => !is_null($systemConfigService->get($this->path . 'atTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'atTrafficSourceNumber', $salesChannelId) : 0,
            "NL" => !is_null($systemConfigService->get($this->path . 'nlTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'nlTrafficSourceNumber', $salesChannelId) : 0,
            "CH" => !is_null($systemConfigService->get($this->path . 'chTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'chTrafficSourceNumber', $salesChannelId) : 0,
            "FR" => !is_null($systemConfigService->get($this->path . 'frTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'frTrafficSourceNumber', $salesChannelId) : 0,
            "IT" => !is_null($systemConfigService->get($this->path . 'itTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'itTrafficSourceNumber', $salesChannelId) : 0,
            "UK" => !is_null($systemConfigService->get($this->path . 'ukTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'ukTrafficSourceNumber', $salesChannelId) : 0,
            "DK" => !is_null($systemConfigService->get($this->path . 'dkTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'dkTrafficSourceNumber', $salesChannelId) : 0,
            "SE" => !is_null($systemConfigService->get($this->path . 'seTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'seTrafficSourceNumber', $salesChannelId) : 0,
            "ES" => !is_null($systemConfigService->get($this->path . 'esTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'esTrafficSourceNumber', $salesChannelId) : 0,
            "BE" => !is_null($systemConfigService->get($this->path . 'beTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'beTrafficSourceNumber', $salesChannelId) : 0,
            "PL" => !is_null($systemConfigService->get($this->path . 'plTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'plTrafficSourceNumber', $salesChannelId) : 0,
        );
        $this->trafficMediumNumber = array(
            "DE" => !is_null($systemConfigService->get($this->path . 'deTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'deTrafficMediumNumber', $salesChannelId) : 0,
            "AT" => !is_null($systemConfigService->get($this->path . 'atTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'atTrafficMediumNumber', $salesChannelId) : 0,
            "NL" => !is_null($systemConfigService->get($this->path . 'nlTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'nlTrafficMediumNumber', $salesChannelId) : 0,
            "CH" => !is_null($systemConfigService->get($this->path . 'chTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'chTrafficMediumNumber', $salesChannelId) : 0,
            "FR" => !is_null($systemConfigService->get($this->path . 'frTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'frTrafficMediumNumber', $salesChannelId) : 0,
            "IT" => !is_null($systemConfigService->get($this->path . 'itTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'itTrafficMediumNumber', $salesChannelId) : 0,
            "UK" => !is_null($systemConfigService->get($this->path . 'ukTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'ukTrafficMediumNumber', $salesChannelId) : 0,
            "DK" => !is_null($systemConfigService->get($this->path . 'dkTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'dkTrafficMediumNumber', $salesChannelId) : 0,
            "SE" => !is_null($systemConfigService->get($this->path . 'seTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'seTrafficMediumNumber', $salesChannelId) : 0,
            "ES" => !is_null($systemConfigService->get($this->path . 'esTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'esTrafficMediumNumber', $salesChannelId) : 0,
            "BE" => !is_null($systemConfigService->get($this->path . 'beTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'beTrafficMediumNumber', $salesChannelId) : 0,
            "PL" => !is_null($systemConfigService->get($this->path . 'plTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'plTrafficMediumNumber', $salesChannelId) : 0,
        );
        $this->bannerLocation = !is_null($systemConfigService->get($this->path . 'bannerLocation', $salesChannelId)) ? $systemConfigService->get($this->path . 'bannerLocation', $salesChannelId) : self::BANNER_POSITION_BELOW_FINISH_TEASER;
    }

    /**
     * 
     * @return bool
     */
    public function isEnabled(string $country): bool
    {
        if (isset($this->enabled[$country])){
            return $this->enabled[$country];
        }
        else {
            return false;
        }
    }

    /**
     * 
     * @return int
     */
    public function getTrafficSourceNumber(string $country): int
    {
        if (isset($this->trafficSourceNumber[$country])){
            return $this->trafficSourceNumber[$country];        
        }
        else {
            return 0;
        }
    }

    /**
     * 
     * @return int
     */
    public function getTrafficMediumNumber(string $country): int
    {
        if (isset($this->trafficMediumNumber[$country])){
            return $this->trafficMediumNumber[$country];
        }
        else {
            return 0;
        }
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