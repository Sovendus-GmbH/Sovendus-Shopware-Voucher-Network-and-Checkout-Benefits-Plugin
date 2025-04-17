<?php

namespace Sov\Sovendus\Controller;

use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @RouteScope(scopes={"administration"})
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/admin/sovendus/settings", name="admin.sovendus.settings", methods={"GET"})
     */
    public function showSettings(): Response
    {
        return $this->render('@Sovendus/administration/settings.html.twig');
    }
}
