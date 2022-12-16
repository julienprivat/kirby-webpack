<?php
Kirby::plugin('cookbook/block-bubble', [
  'blueprints' => [
    'blocks/bubble' => __DIR__ . '/blueprints/blocks/bubble.yml',
    // more blueprints
  ],
  'snippets' => [
    'blocks/bubble' => __DIR__ . '/snippets/blocks/bubble.php',
    // more snippets
    ]
]);