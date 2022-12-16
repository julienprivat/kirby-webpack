<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<meta name="robots" content="noindex">

	<title><?php if($page->title() !== 'home'): ?> <?= $page->title() ?> | <?= $site->title_site() ?> <?php else: ?> <?= $site->title_site() ?> | <?= $site->base_site() ?> <?php endif; ?></title>
	<meta name="og:description" content='<?php if($page->description()): ?><?= $page->description() ?><?php else: ?><?= $site->description_seo() ?><?php endif; ?>' />
	<meta property="og:title"content='<?php if($page->title() !== 'home'): ?><?= $page->title() ?><?php else: ?><?= $site->title_site() ?> | <?= $site->base_site() ?><?php endif; ?>' />
	<meta property="og:url" content="<?= $site->url() ?>" />
	<meta property="og:site_name" content='<?= $site->title_site() ?> | <?= $site->base_site() ?>' />
	<meta property="og:image" content='<?= $site->image_seo() ?>' />
  <?= liveCSS('assets/builds/bundle.css') ?>
  <link href="https://vjs.zencdn.net/7.17.0/video-js.css" rel="stylesheet" />
</head>
<body class="body" data-theme="light" data-part="web">
	<div class="root">
	<header class="header">
		<nav class='navigation'>
		</nav>
	</header>