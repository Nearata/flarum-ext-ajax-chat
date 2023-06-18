<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::createTable('nearata_ajax_chat_channels', function (Blueprint $table) {
    $table->increments('id');
    $table->string('name', 100);
    $table->timestamps();
});
