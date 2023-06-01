<?php

namespace Nearata\AjaxChat\Api\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Nearata\AjaxChat\AjaxChat;
use Psr\Http\Message\ServerRequestInterface;

class DeleteController extends AbstractDeleteController
{
    protected function delete(ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();

        $id = Arr::get($request->getQueryParams(), 'id');

        $message = AjaxChat::query()->findOrFail($id);

        $actor->assertCan('delete', $message);

        $message->delete();
    }
}
