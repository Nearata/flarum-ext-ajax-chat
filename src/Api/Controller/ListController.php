<?php

namespace Nearata\AjaxChat\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Nearata\AjaxChat\AjaxChat;
use Nearata\AjaxChat\Api\Serializer\AjaxChatSerializer;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListController extends AbstractListController
{
    public $serializer = AjaxChatSerializer::class;

    public $include = ['user'];

    // The number of records included by default.
    public $limit = 20;

    // The maximum number of records that can be requested.
    public $maxLimit = 50;

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();
        $actor->assertCan('nearata-ajax-chat.view');

        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);

        return AjaxChat::query()->skip($offset)->limit($limit)->get();
    }
}
