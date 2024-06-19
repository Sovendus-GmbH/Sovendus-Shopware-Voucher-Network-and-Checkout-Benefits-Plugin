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
            "CH" => array(
                "de" => (!is_null($systemConfigService->get($this->path . 'deChEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'deChEnabled', $salesChannelId) : false),
                "fr" => (!is_null($systemConfigService->get($this->path . 'frChEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'frChEnabled', $salesChannelId) : false),
                "it" => (!is_null($systemConfigService->get($this->path . 'itChEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'itChEnabled', $salesChannelId) : false)
            ),
            "FR" => !is_null($systemConfigService->get($this->path . 'frEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'frEnabled', $salesChannelId) : false,
            "IT" => !is_null($systemConfigService->get($this->path . 'itEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'itEnabled', $salesChannelId) : false,
            "IE" => !is_null($systemConfigService->get($this->path . 'ieEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'ieEnabled', $salesChannelId) : false,
            "UK" => !is_null($systemConfigService->get($this->path . 'ukEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'ukEnabled', $salesChannelId) : false,
            "PT" => !is_null($systemConfigService->get($this->path . 'ptEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'ptEnabled', $salesChannelId) : false,
            "DK" => !is_null($systemConfigService->get($this->path . 'dkEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'dkEnabled', $salesChannelId) : false,
            "SE" => !is_null($systemConfigService->get($this->path . 'seEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'seEnabled', $salesChannelId) : false,
            "ES" => !is_null($systemConfigService->get($this->path . 'esEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'esEnabled', $salesChannelId) : false,
            "BE" => array(
                "nl" => !is_null($systemConfigService->get($this->path . 'nlBeEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'nlBeEnabled', $salesChannelId) : false,
                "fr" => !is_null($systemConfigService->get($this->path . 'frBeEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'frBeEnabled', $salesChannelId) : false
            ),
            "PL" => !is_null($systemConfigService->get($this->path . 'plEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'plEnabled', $salesChannelId) : false,
            "NO" => !is_null($systemConfigService->get($this->path . 'noEnabled', $salesChannelId)) ? $systemConfigService->get($this->path . 'noEnabled', $salesChannelId) : false,
        );
        $this->trafficSourceNumber = array(
            "DE" => !is_null($systemConfigService->get($this->path . 'deTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'deTrafficSourceNumber', $salesChannelId) : 0,
            "AT" => !is_null($systemConfigService->get($this->path . 'atTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'atTrafficSourceNumber', $salesChannelId) : 0,
            "NL" => !is_null($systemConfigService->get($this->path . 'nlTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'nlTrafficSourceNumber', $salesChannelId) : 0,
            "CH" => array(
                "de" => (!is_null($systemConfigService->get($this->path . 'deChTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'deChTrafficSourceNumber', $salesChannelId) : 0),
                "fr" => (!is_null($systemConfigService->get($this->path . 'frChTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'frChTrafficSourceNumber', $salesChannelId) : 0),
                "it" => (!is_null($systemConfigService->get($this->path . 'itChTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'itChTrafficSourceNumber', $salesChannelId) : 0)
            ),
            "FR" => !is_null($systemConfigService->get($this->path . 'frTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'frTrafficSourceNumber', $salesChannelId) : 0,
            "IT" => !is_null($systemConfigService->get($this->path . 'itTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'itTrafficSourceNumber', $salesChannelId) : 0,
            "IE" => !is_null($systemConfigService->get($this->path . 'ieTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'ieTrafficSourceNumber', $salesChannelId) : 0,
            "UK" => !is_null($systemConfigService->get($this->path . 'ukTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'ukTrafficSourceNumber', $salesChannelId) : 0,
            "PT" => !is_null($systemConfigService->get($this->path . 'ptTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'ptTrafficSourceNumber', $salesChannelId) : 0,
            "DK" => !is_null($systemConfigService->get($this->path . 'dkTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'dkTrafficSourceNumber', $salesChannelId) : 0,
            "SE" => !is_null($systemConfigService->get($this->path . 'seTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'seTrafficSourceNumber', $salesChannelId) : 0,
            "ES" => !is_null($systemConfigService->get($this->path . 'esTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'esTrafficSourceNumber', $salesChannelId) : 0,
            "BE" => array(
                "nl" => !is_null($systemConfigService->get($this->path . 'nlBeTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'nlBeTrafficSourceNumber', $salesChannelId) : 0,
                "fr" => !is_null($systemConfigService->get($this->path . 'frBeTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'frBeTrafficSourceNumber', $salesChannelId) : 0
            ),
            "PL" => !is_null($systemConfigService->get($this->path . 'plTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'plTrafficSourceNumber', $salesChannelId) : 0,
            "NO" => !is_null($systemConfigService->get($this->path . 'noTrafficSourceNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'noTrafficSourceNumber', $salesChannelId) : 0,
        );
        $this->trafficMediumNumber = array(
            "DE" => !is_null($systemConfigService->get($this->path . 'deTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'deTrafficMediumNumber', $salesChannelId) : 0,
            "AT" => !is_null($systemConfigService->get($this->path . 'atTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'atTrafficMediumNumber', $salesChannelId) : 0,
            "NL" => !is_null($systemConfigService->get($this->path . 'nlTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'nlTrafficMediumNumber', $salesChannelId) : 0,
            "CH" => array(
                "de" => (!is_null($systemConfigService->get($this->path . 'deChTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'deChTrafficMediumNumber', $salesChannelId) : 0),
                "fr" => (!is_null($systemConfigService->get($this->path . 'frChTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'frChTrafficMediumNumber', $salesChannelId) : 0),
                "it" => (!is_null($systemConfigService->get($this->path . 'itChTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'itChTrafficMediumNumber', $salesChannelId) : 0)
            ),
            "FR" => !is_null($systemConfigService->get($this->path . 'frTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'frTrafficMediumNumber', $salesChannelId) : 0,
            "IT" => !is_null($systemConfigService->get($this->path . 'itTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'itTrafficMediumNumber', $salesChannelId) : 0,
            "IE" => !is_null($systemConfigService->get($this->path . 'ieTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'ieTrafficMediumNumber', $salesChannelId) : 0,
            "UK" => !is_null($systemConfigService->get($this->path . 'ukTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'ukTrafficMediumNumber', $salesChannelId) : 0,
            "PT" => !is_null($systemConfigService->get($this->path . 'ptTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'ptTrafficMediumNumber', $salesChannelId) : 0,
            "DK" => !is_null($systemConfigService->get($this->path . 'dkTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'dkTrafficMediumNumber', $salesChannelId) : 0,
            "SE" => !is_null($systemConfigService->get($this->path . 'seTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'seTrafficMediumNumber', $salesChannelId) : 0,
            "ES" => !is_null($systemConfigService->get($this->path . 'esTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'esTrafficMediumNumber', $salesChannelId) : 0,
            "BE" => array(
                "nl" => !is_null($systemConfigService->get($this->path . 'nlBeTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'nlBeTrafficMediumNumber', $salesChannelId) : 0,
                "fr" => !is_null($systemConfigService->get($this->path . 'frBeTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'frBeTrafficMediumNumber', $salesChannelId) : 0
            ),
            "PL" => !is_null($systemConfigService->get($this->path . 'plTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'plTrafficMediumNumber', $salesChannelId) : 0,
            "NO" => !is_null($systemConfigService->get($this->path . 'noTrafficMediumNumber', $salesChannelId)) ? (int) $systemConfigService->get($this->path . 'noTrafficMediumNumber', $salesChannelId) : 0,
        );
        $this->bannerLocation = !is_null($systemConfigService->get($this->path . 'bannerLocation', $salesChannelId)) ? $systemConfigService->get($this->path . 'bannerLocation', $salesChannelId) : self::BANNER_POSITION_BELOW_FINISH_TEASER;
    }

    public function isEnabled(string $country)
    {
        if (isset($this->enabled[$country])) {
            return $this->enabled[$country];
        } else {
            return false;
        }
    }

    public function getTrafficSourceNumber(string $country)
    {
        if (isset($this->trafficSourceNumber[$country])) {
            return $this->trafficSourceNumber[$country];
        } else {
            return 0;
        }
    }

    public function getTrafficMediumNumber(string $country)
    {
        if (isset($this->trafficMediumNumber[$country])) {
            return $this->trafficMediumNumber[$country];
        } else {
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