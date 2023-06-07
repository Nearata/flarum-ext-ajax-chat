<?php

namespace Nearata\AjaxChat\Api\Controller;

use Carbon\Carbon;
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

    public $include = [
        'editedUser',
    ];

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
        $actor->assertPermission('nearata-ajax-chat.edit');

        $id = Arr::get($request->getQueryParams(), 'id');
        $content = Arr::get($request->getParsedBody(), 'data.attributes.content');

        $this->validator->assertValid(['content' => $content]);

        /** @var AjaxChat */
        $message = AjaxChat::query()->findOrFail($id);

        $actor->assertCan('edit', $message);

        $message->content = $content;
        $message->edited_at = Carbon::now();
        $message->edited_user_id = $actor->id;

        $message->save();

        return $message;
    }
}
