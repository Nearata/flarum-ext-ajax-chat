<?php

namespace Nearata\AjaxChat\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Nearata\AjaxChat\AjaxChat;
use Nearata\AjaxChat\Api\Serializer\AjaxChatSerializer;
use Nearata\AjaxChat\Validator\CreateValidator;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateController extends AbstractCreateController
{
    public $serializer = AjaxChatSerializer::class;

    /**
     * @var CreateValidator
     */
    protected $validator;

    public function __construct(CreateValidator $validator)
    {
        $this->validator = $validator;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();

        $actor->assertCan('nearata-ajax-chat.create');

        $content = Arr::get($request->getParsedBody(), 'content');

        $this->validator->assertValid(['content' => $content]);

        $message = AjaxChat::create([
            'user_id' => $actor->id,
            'content' => $content,
        ]);

        return $message;
    }
}
