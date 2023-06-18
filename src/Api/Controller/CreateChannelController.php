<?php

namespace Nearata\AjaxChat\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Nearata\AjaxChat\Api\Serializer\ChannelSerializer;
use Nearata\AjaxChat\Channels;
use Nearata\AjaxChat\Validator\ChannelValidator;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateChannelController extends AbstractCreateController
{
    public $serializer = ChannelSerializer::class;

    public function __construct(protected ChannelValidator $validator)
    {
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertAdmin();

        $name = Arr::get($request->getParsedBody(), 'data.attributes.name');

        $this->validator->assertValid(['name' => $name]);

        return Channels::create(['name' => $name]);
    }
}
