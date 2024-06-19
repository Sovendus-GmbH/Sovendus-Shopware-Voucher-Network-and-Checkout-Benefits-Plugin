<?php

declare(strict_types=1);

namespace Sov\Sovendus\Components;

use Shopware\Core\Framework\Struct\Struct;
use Symfony\Component\HttpFoundation\RequestStack;
use Sov\Sovendus\Service\ConfigService;
use Shopware\Core\Checkout\Customer\Aggregate\CustomerAddress\CustomerAddressEntity;
use Shopware\Core\Checkout\Customer\CustomerEntity;
use Shopware\Core\Checkout\Order\OrderEntity;
use Shopware\Core\System\Currency\CurrencyEntity;

class SovendusData extends Struct
{
    protected ConfigService $configService;
    protected ?OrderEntity $order;
    protected ?CustomerEntity $customer;
    protected ?CurrencyEntity $currency;

    public $enabled;
    public $trafficSourceNumber;
    public $trafficMediumNumber;
    public string $bannerLocation;
    public string $consumerCity;
    public string $consumerCountry;
    public string $consumerEmail;
    public string $consumerFirstName;
    public string $consumerLastName;
    public string $consumerPhone;
    public string $consumerSalutation;
    public string $consumerStreet;
    public string $consumerStreetNumber;
    public string $consumerZipcode;
    public string $orderCurrency;
    public string $orderId;
    public string $sessionId;
    public string $usedCouponCode;
    public float $orderValue;
    public int $timestamp;
    public array $bannerLocationConstants;

    public function __construct()
    {
        $this->enabled = false;
        $this->trafficSourceNumber = 0;
        $this->trafficMediumNumber = 0;
        $this->bannerLocation = Config::BANNER_POSITION_BELOW_FINISH_TEASER;
        $this->bannerLocationConstants = array(
            'above' => Config::BANNER_POSITION_ABOVE_FINISH_TEASER,
            'below' => Config::BANNER_POSITION_BELOW_FINISH_TEASER
        );
        $this->consumerCity = '';
        $this->consumerCountry = '';
        $this->consumerEmail = '';
        $this->consumerFirstName = '';
        $this->consumerLastName = '';
        $this->consumerPhone = '';
        $this->consumerSalutation = "";
        $this->consumerStreet = '';
        $this->consumerStreetNumber = '';
        $this->consumerZipcode = '';
        $this->orderCurrency = '';
        $this->orderId = '';
        $this->sessionId = '';
        $this->usedCouponCode = '';
        $this->orderValue = 0;
        $this->timestamp = time();
        $this->iframeContainerId = 'sovendus-container-1';
    }

    public function initializeSovendusData(RequestStack $requestStack, ConfigService $configService, ?OrderEntity $order, ?CurrencyEntity $currency, $isEnabled, $trafficSourceNumber, $trafficMediumNumber, $bannerLocation)
    {
        $this->configService = $configService;
        $this->order = $order;
        $this->currency = $currency;
        $this->timestamp = time();
        $this->enabled = json_encode($isEnabled);
        $this->trafficSourceNumber = json_encode($trafficSourceNumber);
        $this->trafficMediumNumber = json_encode($trafficMediumNumber);
        $this->bannerLocation = $bannerLocation;
        $this->initializeCurrencyData();
        $this->initializeOrderData();
        $this->initializeSessionId($requestStack);
    }
    protected function initializeCurrencyData(): void
    {
        if (!is_null($this->currency)) {
            $this->orderCurrency = $this->currency->getIsoCode();
        }
    }
    
    public function initializeCustomerData(?CustomerEntity $customer): void
    {
        $this->customer = $customer;
        if (!is_null($this->customer)) {
            $this->consumerEmail = $this->customer->getEmail();
            $this->consumerFirstName = $this->customer->getFirstName();
            $this->consumerLastName = $this->customer->getLastName();
            if (!is_null($this->customer->getSalutation())) {
                $this->consumerSalutation = $this->getSalutationByKey($this->customer->getSalutation()->getSalutationKey());
            }
            if (!is_null($this->customer->getDefaultBillingAddress())) {
                $this->initializeAddressData($this->customer->getDefaultBillingAddress());
            }
        }
    }

    protected function initializeOrderData(): void
    {
        if (!is_null($this->order)) {
            $this->orderValue = $this->calculateOrderValue($this->order);
            if (!is_null($this->order->getOrderNumber())) {
                $this->orderId = $this->order->getOrderNumber();
            }
            if (!is_null($this->order->getLineItems())) {
                $promotions = $this->order->getLineItems()->filterByType(\Shopware\Core\Checkout\Cart\LineItem\LineItem::PROMOTION_LINE_ITEM_TYPE)->getElements();
                foreach ($promotions as $promotion) {
                    if (!is_null($promotion->getPayload()) && isset($promotion->getPayload()['code']) && ($promotion->getPayload()['code'] != '')) {
                        $this->usedCouponCode = $promotion->getPayload()['code'];
                        break;
                    }
                }
            }
        }
    }

    protected function initializeAddressData(CustomerAddressEntity $address): void
    {
        $this->consumerZipcode = $address->getZipcode();
        $this->consumerCity = $address->getCity();
        $this->initializeStreetAndStreetNumber($address->getStreet());
        if (!is_null($address->getCountry())) {                
            $this->consumerCountry = $address->getCountry()->iso;
        }
        if (!is_null($address->getPhoneNumber())) {
            $this->consumerPhone = $address->getPhoneNumber();
        }
    }
    protected function initializeStreetAndStreetNumber(string $street)
    {
        if ((strlen($street) > 0) && preg_match_all('#([0-9/ -]+ ?[a-zA-Z]?(\s|$))#', trim($street), $match)) {
            $housenr = end($match[0]);
            $this->consumerStreet = trim(str_replace(array($housenr, '/'), '', $street));
            $this->consumerStreetNumber = trim($housenr);
        } else {
            $this->consumerStreet = $street;
        }
    }

    protected function initializeSessionId(RequestStack $requestStack)
    {
        $session = $requestStack->getSession();
        $this->sessionId = $session->getId();
    }

    /**
     * net orderValue without shipping costs
     * @param OrderEntity $order
     * @return float
     */
    protected function calculateOrderValue(OrderEntity $order): float
    {
        $shippingCostsNet = $order->getShippingCosts()->getTotalPrice() - $order->getShippingCosts()->getCalculatedTaxes()->getAmount();
        return $order->getAmountNet() - $shippingCostsNet;
    }

    /**
     * 
     * @param string $salutationKey
     * @return string
     */
    public function getSalutationByKey(string $salutationKey): string
    {
        return ($salutationKey == 'mr') ? 'Mr.' : (($salutationKey == 'mrs') ? "Mrs." : "");
    }

}