<?php
Kirby::plugin('cookbook/block-text-bubble', [
  'blueprints' => [
    'blocks/text-bubble' => __DIR__ . '/blueprints/blocks/text-bubble.yml',
    // more blueprints
  ],
  'snippets' => [
    'blocks/text-bubble' => __DIR__ . '/snippets/blocks/text-bubble.php',
    // more snippets
    ]
]);