<?php
Kirby::plugin('my/page-methods', [
    
    'pageMethods' => [
        'thumbImage'=> function () {
            $image = '';
            foreach ($this->thumbnail()->toBlocks() as $block):
                if ($block->quid() == 'image'):
                    $image = $block->image()->toFile();
                else:
                    $image = $block->video()->toFile();
                endif;
            endforeach;
            return $image;
        },
        'ratioImage' => function () {
            $ratio = 'pas ratio selectionné';
            foreach ($this->thumbnail()->toBlocks() as $block):
                $ratio = $block->ratio();
            endforeach;
            return $ratio;
        },
    ]
]);