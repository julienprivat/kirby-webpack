<?php
$text    = $block->text();
$color   = $block->color();
$back    = $block->back();
?>

<?php if($block->isNotEmpty()): ?>
  <div class="card">
      <?php if($text): ?>
        <div><?= $text ?></div>
        <?php if($color): ?>
          <div><?= $color ?></div>
        <?php endif ?>
        <?php if($back): ?>
          <div><?= $back ?></div>
        <?php endif ?>
      <?php endif ?>
  </div>
<?php endif; ?>