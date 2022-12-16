<?php snippet('header') ?>
    <main id="content">
        <section class="page projet" data-namespace="projet" data-menu='projet' dir="ltr" style='background-color: <?= $page->color() ?>'>
            <div class='nav_project'>
                <?php if($galerie = $kirby->collection('projets')): ?>
                    <?php foreach($galerie as $projet): ?>
                        <?php if( $projet->title() == $page->title() ): ?>
                            <div class='nav_project_item button_prev <?php if (!$projet->hasPrev()) echo('no_link') ?>'>
                            <?php if ($projet->hasPrev()): ?>
                                <a href='<?= $projet->prev()->url() ?>'>
                            <?php endif ?>
                            <?php snippet('arrow') ?> Prev</a></div>
                        <?php endif ?>
                    <?php endforeach ?>
                <?php endif ?>
                <div class='nav_project_item button_close'><a href='/'>Close</a></div>
                <?php if($galerie = $kirby->collection('projets')): ?>
                    <?php foreach($galerie as $projet): ?>
                        <?php if( $projet->title() == $page->title() ): ?>
                            <div class='nav_project_item button_next <?php if (!$projet->hasNext()) echo('no_link') ?>'>
                            <?php if ($projet->hasNext()): ?>
                                <a href='<?= $projet->next()->url() ?>'>
                            <?php endif ?>
                            Next <?php snippet('arrow') ?></a></div>
                        <?php endif ?>
                    <?php endforeach ?>
                <?php endif ?>
            </div>
            
            <?php if($galerie = $page->layouts()->toBlocks()): ?>
                <div class='gallery'>
                    <?php $first = true;
                    foreach($galerie as $figure): ?>
                        <?php if($figure->quid() == 'image'): ?>
                            <div class='figure simple <?= $figure->ratio_image()->value() ?>' style='--tw: <?= $figure->image()->toFile()->dimensions()->width() ?>; --th: <?= $figure->image()->toFile()->dimensions()->height() ?>'>
                                <div class='image_wrapper'>
                                    <img src='<?= $figure->image()->toFile()->srcset([300]) ?>' data-srcset='<?= $figure->image()->toFile()->srcset([300, 800, 1024]) ?> '>
                                </div>
                            </div>
                        <?php elseif($figure->quid() == 'imagesx2'): ?>
                            <div class='figure double'>
                                <?php foreach( $figure->images()->toFiles() as $image): ?>
                                    <img src='<?= $image->srcset([300]) ?>' data-srcset='<?= $image->srcset([300, 800, 1024]) ?>'>
                                <?php endforeach ?>
                            </div>
                        <?php else: ?>
                            <div class='figure simple <?= $figure->ratio_video()->value() ?>'>
                                <video muted playsinline loop src='<?= $figure->video()->toFile()->url() ?>'></video>
                            </div>
                        <?php endif ?>
                        <?php if($first == true): ?>
                            <div class='text_description'><?= $page->description() ?></div>
                        <?php $first = false;
                        endif ?>
                    <?php endforeach ?>
                </div>
            <?php endif ?>
        </section>
    </main>
    <?php snippet('footer') ?>
    <?= js('assets/builds/bundle.js') ?>
    </div>
  </body>
</html>