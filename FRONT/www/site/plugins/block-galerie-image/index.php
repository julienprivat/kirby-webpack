<?php
Kirby::plugin('cookbook/block-galerie-services', [
  'blueprints' => [
    'blocks/galerie-image' => __DIR__ . '/blueprints/blocks/galerie-image.yml',
    // more blueprints
  ],
  'snippets' => [
    'blocks/galerie-image' => __DIR__ . '/snippets/blocks/galerie-image.php',
    // more snippets
    ]
]);