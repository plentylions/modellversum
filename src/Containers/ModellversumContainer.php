<?php

namespace Modellversum\Containers;

use Plenty\Plugin\Templates\Twig;

class ModellversumContainer
{
    public function call(Twig $twig):string
    {
        return $twig->render('Modellversum::Stylesheet');
    }
}