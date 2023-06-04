<?php

namespace Nearata\AjaxChat\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Nearata\AjaxChat\AjaxChat;
use Nearata\AjaxChat\Api\Serializer\AjaxChatSerializer;
use Nearata\AjaxChat\Validator\UpdateValidator;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class UpdateController extends AbstractShowController
{
    public $serializer = AjaxChatSerializer::class;

    /**
     * @var UpdateValidator
     */
    protected $validator;

    public function __construct(UpdateValidator $validator)
    {
        $this->validator = $validator;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();

        $id = Arr::get($request->getQueryParams(), 'id');
        $content = Arr::get($request->getParsedBody(), 'data.attributes.content');

        $this->validator->assertValid(['content' => $content]);

        $message = AjaxChat::query()->findOrFail($id);

        $actor->assertCan('edit', $message);

        $message->content = $content;
        $message->save();

        return $message;
    }
}
