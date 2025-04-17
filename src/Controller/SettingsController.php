<?php

declare(strict_types=1);

namespace Sov\Sovendus\Controller;

use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Shopware\Core\System\SystemConfig\SystemConfigService;

/**
 * @RouteScope(scopes={"api"})
 */
class SettingsController extends AbstractController
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
     * @Route("/api/v{version}/_action/sovendus/settings", name="api.action.sovendus.settings", methods={"GET"})
     */
    public function getSettings(): JsonResponse
    {
        $settings = $this->systemConfigService->get('SovendusApp.config') ?? [];

        return new JsonResponse($settings);
    }

    /**
     * @Route("/api/v{version}/_action/sovendus/settings", name="api.action.sovendus.settings.save", methods={"POST"})
     */
    public function saveSettings(Request $request): JsonResponse
    {
        $content = $request->getContent();
        $data = json_decode($content, true);
        $settings = $data['settings'] ?? null;

        if (!$settings) {
            return new JsonResponse(['success' => false, 'message' => 'No settings provided'], 400);
        }

        $this->systemConfigService->set('SovendusApp.config', $settings);

        return new JsonResponse(['success' => true, 'data' => $settings]);
    }
}
