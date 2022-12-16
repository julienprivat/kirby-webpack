<?php
$text_content    = $block->text_content();
$color   = $block->color()->value();
$back    = $block->back();
?>

<?php if($block->isNotEmpty()): ?>
  <div class="card">
      <?php if($text_content): ?>
        <div><?= $text_content ?></div>
        <?php if($color): ?>
          <div><?= $color ?></div>
        <?php endif ?>
        <?php if($back): ?>
          <div><?= $back ?></div>
        <?php endif ?>
      <?php endif ?>
  </div>
<?php endif; ?>