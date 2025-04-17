<?php

namespace Sov\Sovendus\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Core\System\SystemConfig\SystemConfigService;

/**
 * @RouteScope(scopes={"storefront"})
 */
class StandaloneSettingsController extends AbstractController
{
    /**
     * @var SystemConfigService
     */
    private $systemConfigService;

    public function __construct(SystemConfigService $systemConfigService)
    {
        $this->systemConfigService = $systemConfigService;
    }

    /**
     * @Route("/sovendus/settings", name="frontend.sovendus.settings", methods={"GET"})
     */
    public function showSettings(): Response
    {
        return $this->render('@Sovendus/storefront/page/sovendus/settings.html.twig', [
            'settings' => $this->systemConfigService->get('SovendusApp.config') ?? []
        ]);
    }

    /**
     * @Route("/sovendus/settings/save", name="frontend.sovendus.settings.save", methods={"POST"})
     */
    public function saveSettings(): Response
    {
        $settings = $this->request->request->get('settings');
        
        if (!$settings) {
            return $this->json(['success' => false, 'message' => 'No settings provided'], 400);
        }
        
        $this->systemConfigService->set('SovendusApp.config', $settings);
        
        return $this->json(['success' => true, 'data' => $settings]);
    }
}
