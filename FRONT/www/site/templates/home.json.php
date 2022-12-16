<?php

$apropos_images = array();
$apropos_bubles = array();

$restaurant_images = array();
$restaurant_bubles = array();

$events_images = array();
$events_bubles = array();
$events_table = array();

$contact_bubles = array();
$contact_email = array();

foreach($site->layouts()->toBlocks() as $block){
    if($block !== null) {

        $imageObject = (object)[];
        $imageObject->src = $block->content()->image()->toFile()->url();
        $imageObject->srcset = $block->content()->image()->toFile()->srcset('default');
        $imageObject->dimensions = $block->content()->image()->toFile()->dimensions();
        $imageObject->format = $block->content()->format()->value();
        $imageObject->caption = $block->content()->caption()->value();
        $imageObject->color = $block->content()->color()->value();

        array_push($apropos_images, $imageObject);
    }
}

foreach($site->apropos_text_content()->toBlocks() as $block){
    if($block !== null) {

        $textObject = (object)[];
        $textObject->text = $block->text_content()->value();
        $textObject->color = $block->color()->value();
        $textObject->back = $block->back()->value();
        $textObject->id = $block->id();

        array_push($apropos_bubles, $textObject);
    }
}

foreach($site->restaurant_text_content()->toBlocks() as $block){
    if($block !== null) {

        $textObject = (object)[];
        $textObject->text = $block->text_content()->value();
        $textObject->color = $block->color()->value();
        $textObject->back = $block->back()->value();
        $textObject->id = $block->id();

        array_push($restaurant_bubles, $textObject);
    }
}

foreach($site->rest_galerie()->toBlocks() as $block){
    if($block !== null) {

        $imageObject = (object)[];
        $imageObject->src = $block->content()->image()->toFile()->url();
        $imageObject->srcset = $block->content()->image()->toFile()->srcset('default');
        $imageObject->dimensions = $block->content()->image()->toFile()->dimensions();
        $imageObject->format = $block->content()->format()->value();
        $imageObject->caption = $block->content()->caption()->value();
        $imageObject->color = $block->content()->color()->value();

        array_push($restaurant_images, $imageObject);
    }
}

foreach($site->event_text_content()->toBlocks() as $block){
    if($block !== null) {

        $textObject = (object)[];
        $textObject->text = $block->text_content()->value();
        $textObject->color = $block->color()->value();
        $textObject->back = $block->back()->value();
        $textObject->id = $block->id();

        array_push($events_bubles, $textObject);
    }
}

foreach($site->evnt_galerie()->toBlocks() as $block){
    if($block !== null) {

        $imageObject = (object)[];
        $imageObject->src = $block->content()->image()->toFile()->url();
        $imageObject->srcset = $block->content()->image()->toFile()->srcset('default');
        $imageObject->dimensions = $block->content()->image()->toFile()->dimensions();
        $imageObject->format = $block->content()->format()->value();
        $imageObject->caption = $block->content()->caption()->value();
        $imageObject->color = $block->content()->color()->value();

        array_push($events_images, $imageObject);
    }
}

$events = $site->evnt_part_two()->toStructure();
$sortedEvents = $events->sortBy(function ($page) {
  return $page->date()->toDate();
}, 'asc');


foreach($sortedEvents as $block){
    if($block !== null) {

        $textObject = (object)[];
        $textObject->name = $block->name()->value();
        $textObject->date = $block->date()->value();
        $textObject->horaire = $block->horaire()->value();
        $textObject->type = $block->type()->value();
        $textObject->prix = $block->prix()->value();
        $textObject->id = $block->id();

        array_push($events_table, $textObject);
    }
}

foreach($site->contact_part_two()->toStructure() as $block){
    if($block !== null) {

        $textObject = (object)[];
        $textObject->label = $block->label()->value();
        $textObject->email = $block->email()->value();
        $textObject->id = $block->id();

        array_push($contact_email, $textObject);
    }
}

foreach($site->contact_text_content()->toBlocks() as $block){
    if($block !== null) {

        $textObject = (object)[];
        $textObject->text = $block->text_content()->value();
        $textObject->color = $block->color()->value();
        $textObject->back = $block->back()->value();
        $textObject->id = $block->id();

        array_push($contact_bubles, $textObject);
    }
}

$data = [
    'seo' => [
        'title_site' => $site->title_site()->value(),
        'base_site' => $site->base_site()->value(),
        'description' => $site->description_seo()->value(),
        'image_seo' => $site->image_seo()->url()
    ],
    'infos' => [
        'postal' => $site->adress_postale()->value(),
        'instagram' => $site->adress_instagram()->value(),
        'facebook' => $site->adress_facebook()->value()
    ],
    'apropos' => [
        'bubbles' => $apropos_bubles,
        'images' => $apropos_images
    ],
    'restaurant' => [
        'bubbles' => $restaurant_bubles,
        'images' => $restaurant_images,
        'horaires' => [
            'text' => $site->rest_part_two()->value(),
            'color' => $site->rest_part_two_color()->value()
        ],
    ],
    'events' => [
        'bubbles' => $events_bubles,
        'images' => $events_images,
        'table' => [
            'table_content' => $events_table,
            'color' => $site->evnt_part_two_color()->value(),
            'back' => $site->evnt_part_two_back()->value(),
        ]
    ],
    'contacts' => [
        'bubbles' => $contact_bubles,
        'emails' => $contact_email,
        'text' => $site->contact_part_three()->value()
    ],
];


echo json_encode($data);