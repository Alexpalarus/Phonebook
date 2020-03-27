<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
/**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     * Route("/", name="home")
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }
}
