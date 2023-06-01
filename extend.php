<?php

namespace Nearata\AjaxChat;

use Flarum\Extend;
use Nearata\AjaxChat\Api\Controller\CreateController;
use Nearata\AjaxChat\Api\Controller\DeleteController;
use Nearata\AjaxChat\Api\Controller\ListController;
use Nearata\AjaxChat\Api\Controller\UpdateController;
use Nearata\AjaxChat\Policy\AjaxChatPolicy;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('api'))
        ->get('/nearata/ajaxChat/messages', 'nearata-ajax-chat.list', ListController::class)
        ->post('/nearata/ajaxChat/messages', 'nearata-ajax-chat.create', CreateController::class)
        ->patch('/nearata/ajaxChat/messages/{id}', 'nearata-ajax-chat.update', UpdateController::class)
        ->delete('/nearata/ajaxChat/messages/{id}', 'nearata-ajax-chat.delete', DeleteController::class),

    (new Extend\Policy)
        ->modelPolicy(AjaxChat::class, AjaxChatPolicy::class)
];
