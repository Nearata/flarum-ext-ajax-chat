<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('nearata_ajax_chat', function (Blueprint $table) {
            $table->unsignedInteger('channel_id')->nullable();

            $table->foreign('channel_id')->references('id')->on('nearata_ajax_chat_channels');
        });
    },
    'down' => function (Builder $schema) {
        $schema->table('nearata_ajax_chat', function (Blueprint $table) {
            $table->dropForeign(['channel_id'])->dropColumn('channel_id');
        });
    }
];
