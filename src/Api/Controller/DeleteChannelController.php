<?php

namespace Nearata\AjaxChat\Api\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Database\Eloquent\Collection;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Nearata\AjaxChat\Channels;
use Psr\Http\Message\ServerRequestInterface;

class DeleteChannelController extends AbstractDeleteController
{
    protected function delete(ServerRequestInterface $request)
    {
        $actor = RequestUtil::getActor($request);

        $actor->assertRegistered();
        $actor->assertAdmin();

        $id = Arr::get($request->getQueryParams(), 'id');

        /**
         * @var Channels
         */
        $channel = Channels::query()->findOrFail($id);

        $channel->messages()->getQuery()->chunk(500, function (Collection $messages) {
            /**
             * @var \Nearata\AjaxChat\AjaxChat $val
             */
            foreach ($messages as $val) {
                $val->delete();
            }
        });

        $channel->delete();
    }
}
