<?php

namespace Nearata\AjaxChat;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Extend;
use Nearata\AjaxChat\Api\Controller\BasicUserSerializerAttributes;
use Nearata\AjaxChat\Api\Controller\CreateChannelController;
use Nearata\AjaxChat\Api\Controller\CreateController;
use Nearata\AjaxChat\Api\Controller\DeleteChannelController;
use Nearata\AjaxChat\Api\Controller\DeleteController;
use Nearata\AjaxChat\Api\Controller\ListChannelController;
use Nearata\AjaxChat\Api\Controller\ListController;
use Nearata\AjaxChat\Api\Controller\UpdateChannelController;
use Nearata\AjaxChat\Api\Controller\UpdateController;
use Nearata\AjaxChat\Policy\AjaxChatPolicy;
use Nearata\AjaxChat\Search\AjaxChatSearcher;
use Nearata\AjaxChat\Search\Gambit\FullTextGambit;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('api'))
        ->get('/ajaxChat', 'nearata-ajax-chat.list', ListController::class)
        ->post('/ajaxChat', 'nearata-ajax-chat.create', CreateController::class)
        ->patch('/ajaxChat/{id}', 'nearata-ajax-chat.update', UpdateController::class)
        ->delete('/ajaxChat/{id}', 'nearata-ajax-chat.delete', DeleteController::class)
        // channels
        ->get('/ajaxChatChannels', 'nearata-ajax-chat.channels.list', ListChannelController::class)
        ->post('/ajaxChatChannels', 'nearata-ajax-chat.channels.create', CreateChannelController::class)
        ->patch('/ajaxChatChannels/{id}', 'nearata-ajax-chat.channels.update', UpdateChannelController::class)
        ->delete('/ajaxChatChannels/{id}', 'nearata-ajax-chat.channels.delete', DeleteChannelController::class),

    (new Extend\Policy)
        ->modelPolicy(AjaxChat::class, AjaxChatPolicy::class),

    (new Extend\ApiSerializer(BasicUserSerializer::class))
        ->attributes(BasicUserSerializerAttributes::class),

    (new Extend\User)
        ->registerPreference('nearataAjaxChatAutoFocus', 'boolval', true)
        ->registerPreference('nearataAjaxChatPlaySound', 'boolval', true),

    (new Extend\SimpleFlarumSearch(AjaxChatSearcher::class))
        ->setFullTextGambit(FullTextGambit::class)
];
