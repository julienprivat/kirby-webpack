<?php
$image    = $block->image()->toFile();
$format   = $block->format();
$caption  = $block->caption();
$color    = $color->caption();
?>

<?php if($block->isNotEmpty()): ?>
  <div class="card">
      <?php if($image): ?>
        <figure>
          <img src="<?= $image->crop(500,500)->url() ?>" alt="<?= $image->alt() ?>">
        </figure>
        <?php if($format): ?>
          <div><?= $format ?></div>
        <?php endif ?>
        <?php if($caption): ?>
          <div><?= $caption ?></div>
        <?php endif ?>
        <?php if($color): ?>
          <div><?= $color ?></div>
        <?php endif ?>
      <?php endif ?>
  </div>
<?php endif; ?>