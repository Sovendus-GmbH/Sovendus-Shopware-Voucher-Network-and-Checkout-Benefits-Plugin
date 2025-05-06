<?php

namespace Sov\Sovendus\Components;

use Shopware\Core\Framework\Struct\Struct;

/**
 * Page data class for Sovendus integration
 */
class SovendusPageData extends Struct
{
    /**
     * @var string
     */
    public $jsConfig;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->jsConfig = '{}';
    }
}
