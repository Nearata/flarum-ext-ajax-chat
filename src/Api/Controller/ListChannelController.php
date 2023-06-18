<?php

namespace Nearata\AjaxChat\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Nearata\AjaxChat\Api\Serializer\ChannelSerializer;
use Nearata\AjaxChat\Channels;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListChannelController extends AbstractListController
{
    public $serializer = ChannelSerializer::class;

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();
        $actor->assertCan('nearata-ajax-chat.view');

        return Channels::all();
    }
}
