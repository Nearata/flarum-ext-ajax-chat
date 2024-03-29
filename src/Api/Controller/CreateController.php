<?php

namespace Nearata\AjaxChat\Api\Controller;

use Carbon\Carbon;
use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Flarum\Post\Exception\FloodingException;
use Illuminate\Support\Arr;
use Nearata\AjaxChat\AjaxChat;
use Nearata\AjaxChat\Api\Serializer\AjaxChatSerializer;
use Nearata\AjaxChat\Channels;
use Nearata\AjaxChat\Validator\CreateValidator;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateController extends AbstractCreateController
{
    public $serializer = AjaxChatSerializer::class;

    public $include = [
        'user',
        'user.groups',
        'channel',
    ];

    public function __construct(protected CreateValidator $validator)
    {
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();

        $actor->assertCan('nearata-ajax-chat.create');

        $content = Arr::get($request->getParsedBody(), 'data.attributes.content');
        $channelId = Arr::get($request->getParsedBody(), 'data.attributes.channelId');

        $this->validator->assertValid(['content' => $content]);

        /** @var ?AjaxChat */
        $ratelimit = AjaxChat::query()
            ->where('user_id', $actor->id)
            ->where('created_at', '>=', Carbon::now()->subSeconds(10))
            ->exists();

        if ($ratelimit && ! $actor->hasPermission('nearata-ajax-chat.chatWithoutThrottle')) {
            throw new FloodingException();
        }

        $channel = Channels::query()->find($channelId);

        return AjaxChat::build($actor, $content, $channel);
    }
}
