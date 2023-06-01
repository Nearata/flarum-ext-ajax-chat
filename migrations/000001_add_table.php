<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::createTable('nearata_ajax_chat', function (Blueprint $table) {
    $table->increments('id');
    $table->unsignedInteger('user_id');
    $table->string('content', 200);
    $table->timestamps();

    $table->foreign('user_id')->references('id')->on('users');
});
