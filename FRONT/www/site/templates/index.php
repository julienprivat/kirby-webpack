<?php snippet('header') ?>
    <main id="content">
        <section id='index_part' class="page indexPage" data-namespace="indexPage" data-menu='index' dir="ltr">
            <div class='legend_table'>
              <div class='legend_item not_mob' data-menu='year'><div class='legend_wrapper'><div class='legend_text'>Year</div></div> <span class='arrow_wrapper'><?php snippet('arrow') ?></span></div>
              <div class='legend_item' data-menu='client'><div class='legend_wrapper'><div class='legend_text'>Client</div></div>  <span class='arrow_wrapper'><?php snippet('arrow') ?></span></div>
              <div class='legend_item' data-menu='industries'><div class='legend_wrapper'><div class='legend_text'>Industries</div></div>  <span class='arrow_wrapper'><?php snippet('arrow') ?></span></div>
              <div class='legend_item not_mob' data-menu='type'><div class='legend_wrapper'><div class='legend_text'>Type</div></div>  <span class='arrow_wrapper'><?php snippet('arrow') ?></span></div>
              <div class='legend_item not_mob' data-menu='location'><div class='legend_wrapper'><div class='legend_text'>Location</div></div>  <span class='arrow_wrapper'><?php snippet('arrow') ?></span></div>
            </div>
            <div class='tables'>
              <div class='tables_item select'>
                <?php if($galerie = $kirby->collection('projets')): ?>
                    <div class='table'>
                        <?php foreach($galerie as $projet): ?>
                          <a href='<?= $projet->uri() ?>'>
                            <div class='line'>
                                <div class='line_item not_mob'><?= $projet->date_projet_begin() ?></div>
                                <div class='line_item'><?= $projet->client_projet() ?></div>
                                <div class='line_item'><?= $projet->indus_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->type_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->location_projet() ?></div>
                            </div>
                          </a>
                        <?php endforeach ?>
                    </div>
                <?php endif ?>
              </div>
              <div class='tables_item table_year'>
                <?php if($galerie = $kirby->collection('projets')): ?>
                    <div class='table'>
                      <?php $galerie2 = $galerie->listed()->sortBy(function ($page) {
                        return $page->date_projet()->toDate();
                      }, 'desc'); ?>
                        <?php foreach($galerie2 as $projet): ?>
                          <a href='<?= $projet->uri() ?>'>
                            <div class='line'>
                                <div class='line_item not_mob'><?= $projet->date_projet_begin() ?></div>
                                <div class='line_item'><?= $projet->client_projet() ?></div>
                                <div class='line_item'><?= $projet->indus_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->type_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->location_projet() ?></div>
                            </div>
                          </a>
                        <?php endforeach ?>
                    </div>
                <?php endif ?>
              </div>
              <div class='tables_item table_client'>
                <?php if($galerie = $kirby->collection('projets')): ?>
                    <div class='table'>
                      <?php $galerie2 = $galerie->listed()->sortBy(function ($page) {
                        return $page->client_projet();
                      }, 'ascs'); ?>
                        <?php foreach($galerie2 as $projet): ?>
                          <a href='<?= $projet->uri() ?>'>
                            <div class='line'>
                                <div class='line_item not_mob'><?= $projet->date_projet_begin() ?></div>
                                <div class='line_item'><?= $projet->client_projet() ?></div>
                                <div class='line_item'><?= $projet->indus_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->type_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->location_projet() ?></div>
                            </div>
                          </a>
                        <?php endforeach ?>
                    </div>
                <?php endif ?>
              </div>
              <div class='tables_item table_industries'>
                <?php if($galerie = $kirby->collection('projets')): ?>
                    <div class='table'>
                      <?php $galerie2 = $galerie->listed()->sortBy(function ($page) {
                        return $page->indus_projet();
                      }, 'asc'); ?>
                        <?php foreach($galerie2 as $projet): ?>
                          <a href='<?= $projet->uri() ?>'>
                            <div class='line'>
                                <div class='line_item not_mob'><?= $projet->date_projet_begin() ?></div>
                                <div class='line_item'><?= $projet->client_projet() ?></div>
                                <div class='line_item'><?= $projet->indus_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->type_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->location_projet() ?></div>
                            </div>
                          </a>
                        <?php endforeach ?>
                    </div>
                <?php endif ?>
              </div>
              <div class='tables_item table_type'>
                <?php if($galerie = $kirby->collection('projets')): ?>
                    <div class='table'>
                      <?php $galerie2 = $galerie->listed()->sortBy(function ($page) {
                        return $page->type_projet();
                      }, 'asc'); ?>
                        <?php foreach($galerie2 as $projet): ?>
                          <a href='<?= $projet->uri() ?>'>
                            <div class='line'>
                                <div class='line_item not_mob'><?= $projet->date_projet_begin() ?></div>
                                <div class='line_item'><?= $projet->client_projet() ?></div>
                                <div class='line_item'><?= $projet->indus_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->type_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->location_projet() ?></div>
                            </div>
                          </a>
                        <?php endforeach ?>
                    </div>
                <?php endif ?>
              </div>
              <div class='tables_item table_location'>
                <?php if($galerie = $kirby->collection('projets')): ?>
                    <div class='table'>
                      <?php $galerie2 = $galerie->listed()->sortBy(function ($page) {
                        return $page->location_projet();
                      }, 'asc'); ?>
                        <?php foreach($galerie2 as $projet): ?>
                          <a href='<?= $projet->uri() ?>'>
                            <div class='line'>
                                <div class='line_item not_mob'><?= $projet->date_projet_begin() ?></div>
                                <div class='line_item'><?= $projet->client_projet() ?></div>
                                <div class='line_item'><?= $projet->indus_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->type_projet() ?></div>
                                <div class='line_item not_mob'><?= $projet->location_projet() ?></div>
                            </div>
                          </a>
                        <?php endforeach ?>
                    </div>
                <?php endif ?>
              </div>
            </div>
        </section>
    </main>
    <?php snippet('footer') ?>
    <?= js('assets/builds/bundle.js') ?>
    </div>
  </body>
</html>