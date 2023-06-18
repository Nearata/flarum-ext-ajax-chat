<?php

namespace Nearata\AjaxChat\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Nearata\AjaxChat\Api\Serializer\ChannelSerializer;
use Nearata\AjaxChat\Channels;
use Nearata\AjaxChat\Validator\ChannelValidator;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class UpdateChannelController extends AbstractShowController
{
    public $serializer = ChannelSerializer::class;

    public function __construct(protected ChannelValidator $validator)
    {
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();
        $actor->assertAdmin();

        $id = Arr::get($request->getQueryParams(), 'id');
        $name = Arr::get($request->getParsedBody(), 'data.attributes.name');

        $this->validator->assertValid(['name' => $name]);

        /** @var Channels */
        $channel = Channels::query()->findOrFail($id);

        $channel->name = $name;

        $channel->save();

        return $channel;
    }
}
