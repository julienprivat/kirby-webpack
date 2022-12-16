<?php
Kirby::plugin('cookbook/block-galerie', [
  'blueprints' => [
    'blocks/galerie' => __DIR__ . '/blueprints/blocks/galerie.yml',
    // more blueprints
  ],
  'snippets' => [
    'blocks/galerie' => __DIR__ . '/snippets/blocks/galerie.php',
    // more snippets
    ]
]);