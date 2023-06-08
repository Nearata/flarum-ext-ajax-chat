<?php

namespace Nearata\AjaxChat\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\Http\UrlGenerator;
use Flarum\Query\QueryCriteria;
use Nearata\AjaxChat\Api\Serializer\AjaxChatSerializer;
use Nearata\AjaxChat\Search\AjaxChatSearcher;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListController extends AbstractListController
{
    public $serializer = AjaxChatSerializer::class;

    public $include = [
        'user',
        'user.groups',
        'editedUser',
    ];

    // The number of records included by default.
    public $limit = 20;

    // The maximum number of records that can be requested.
    public $maxLimit = 50;

    public function __construct(protected AjaxChatSearcher $searcher, protected UrlGenerator $url)
    {
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();
        $actor->assertCan('nearata-ajax-chat.view');

        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);

        $results = $this->searcher->search(new QueryCriteria($actor, ['q' => '']), $limit, $offset);
        $messages = $results->getResults();

        $document->addPaginationLinks(
            $this->url->to('api')->route('nearata-ajax-chat.list'),
            $request->getQueryParams(),
            $offset,
            $limit,
            $results->areMoreResults() ? null : 0
        );

        return $messages;
    }
}
