<?php
$image    = $block->image()->toFile();
$images    = $block->images()->toFiles();
$video    = $block->video()->toFile();
$ratio_video   = $block->ratio_video();
$ratio_image    = $block->ratio_image();
// $text     = $cardType === 'manual' ? $block->text() : ($page ? $page->text() : '');
?>

<?php if($block->isNotEmpty()): ?>
  <div class="card">
      <?php if($image): ?>
        <figure>
          <img src="<?= $image->crop(500,500)->url() ?>" alt="<?= $image->alt() ?>">
        </figure>
      <?php endif ?>
      <?php if($images): 
        foreach($images as $image):?>
          <figure>
            <img src="<?= $image->crop(500,500)->url() ?>" alt="<?= $image->alt() ?>">
          </figure>
        <?php endforeach ?>
      <?php endif ?>
      <?php if($video): ?>
        <figure>
          <video src="<?= $video->url() ?>">
        </figure>
      <?php endif ?>
      <?php if($ratio_image): ?>
        <div><?= $ratio_image ?></div>
      <?php endif ?>
      <?php if($ratio_video): ?>
        <div><?= $rati_video ?></div>
      <?php endif ?>
  </div>
<?php endif; ?>