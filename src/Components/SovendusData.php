<?php

namespace Sov\Sovendus\Components;

use Shopware\Core\Framework\Struct\Struct;
use Shopware\Core\Checkout\Customer\Aggregate\CustomerAddress\CustomerAddressEntity;
use Shopware\Core\Checkout\Customer\CustomerEntity;
use Shopware\Core\Checkout\Order\OrderEntity;
use Shopware\Core\System\Currency\CurrencyEntity;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * Data class for Sovendus integration
 */
class SovendusData extends Struct
{
    /**
     * @var OrderEntity|null
     */
    protected $order;

    /**
     * @var CustomerEntity|null
     */
    protected $customer;

    /**
     * @var CurrencyEntity|null
     */
    protected $currency;

    /**
     * @var string
     */
    public $consumerSalutation = '';

    /**
     * @var string
     */
    public $consumerFirstName = '';

    /**
     * @var string
     */
    public $consumerLastName = '';

    /**
     * @var string
     */
    public $consumerEmail = '';

    /**
     * @var string
     */
    public $consumerStreet = '';

    /**
     * @var string
     */
    public $consumerStreetNumber = '';

    /**
     * @var string
     */
    public $consumerZipcode = '';

    /**
     * @var string
     */
    public $consumerCity = '';

    /**
     * @var string
     */
    public $consumerCountry = '';

    /**
     * @var string
     */
    public $consumerPhone = '';

    /**
     * @var string
     */
    public $orderId = '';

    /**
     * @var float
     */
    public $orderValue = 0.0;

    /**
     * @var string
     */
    public $orderCurrency = '';

    /**
     * @var string
     */
    public $usedCouponCode = '';

    /**
     * @var string
     */
    public $sessionId = '';

    /**
     * @var int
     */
    public $timestamp;

    /**
     * @var string
     */
    public $jsConfig = '{}';

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->timestamp = time();
    }

    /**
     * Initialize customer data
     *
     * @param CustomerEntity|null $customer
     * @return void
     */
    public function initializeCustomerData(?CustomerEntity $customer): void
    {
        $this->customer = $customer;

        if ($this->customer) {
            $this->consumerEmail = $this->customer->getEmail();
            $this->consumerFirstName = $this->customer->getFirstName();
            $this->consumerLastName = $this->customer->getLastName();

            if ($this->customer->getSalutation()) {
                $this->consumerSalutation = $this->getSalutationByKey($this->customer->getSalutation()->getSalutationKey());
            }

            if ($this->customer->getDefaultBillingAddress()) {
                $this->initializeAddressData($this->customer->getDefaultBillingAddress());
            }
        }
    }

    /**
     * Initialize order data
     *
     * @param OrderEntity|null $order
     * @param CurrencyEntity|null $currency
     * @return void
     */
    public function initializeOrderData(?OrderEntity $order, ?CurrencyEntity $currency): void
    {
        $this->order = $order;
        $this->currency = $currency;

        if ($this->currency) {
            $this->orderCurrency = $this->currency->getIsoCode();
        }

        if ($this->order) {
            $this->orderValue = $this->calculateOrderValue($this->order);

            if ($this->order->getOrderNumber()) {
                $this->orderId = $this->order->getOrderNumber();
            }

            if ($this->order->getLineItems()) {
                $promotions = $this->order->getLineItems()->filterByType(\Shopware\Core\Checkout\Cart\LineItem\LineItem::PROMOTION_LINE_ITEM_TYPE)->getElements();

                foreach ($promotions as $promotion) {
                    if ($promotion->getPayload() && isset($promotion->getPayload()['code']) && $promotion->getPayload()['code'] !== '') {
                        $this->usedCouponCode = $promotion->getPayload()['code'];
                        break;
                    }
                }
            }
        }
    }

    /**
     * Initialize session ID
     *
     * @param RequestStack $requestStack
     * @return void
     */
    public function initializeSessionId(RequestStack $requestStack): void
    {
        $session = $requestStack->getSession();
        $this->sessionId = $session->getId();
    }

    /**
     * Initialize address data
     *
     * @param CustomerAddressEntity $address
     * @return void
     */
    protected function initializeAddressData(CustomerAddressEntity $address): void
    {
        $this->consumerZipcode = $address->getZipcode();
        $this->consumerCity = $address->getCity();
        $this->initializeStreetAndStreetNumber($address->getStreet());

        if ($address->getCountry()) {
            $this->consumerCountry = $address->getCountry()->getIso();
        }

        if ($address->getPhoneNumber()) {
            $this->consumerPhone = $address->getPhoneNumber();
        }
    }

    /**
     * Initialize street and street number
     *
     * @param string $street
     * @return void
     */
    protected function initializeStreetAndStreetNumber(string $street): void
    {
        if (strlen($street) > 0 && preg_match_all('#([0-9/ -]+ ?[a-zA-Z]?(\s|$))#', trim($street), $match)) {
            $housenr = end($match[0]);
            $this->consumerStreet = trim(str_replace(array($housenr, '/'), '', $street));
            $this->consumerStreetNumber = trim($housenr);
        } else {
            $this->consumerStreet = $street;
        }
    }

    /**
     * Calculate order value
     *
     * @param OrderEntity $order
     * @return float
     */
    protected function calculateOrderValue(OrderEntity $order): float
    {
        $shippingCostsNet = $order->getShippingCosts()->getTotalPrice() - $order->getShippingCosts()->getCalculatedTaxes()->getAmount();
        return $order->getAmountNet() - $shippingCostsNet;
    }

    /**
     * Get salutation by key
     *
     * @param string $salutationKey
     * @return string
     */
    public function getSalutationByKey(string $salutationKey): string
    {
        return ($salutationKey == 'mr') ? 'Mr.' : (($salutationKey == 'mrs') ? 'Mrs.' : '');
    }
}
