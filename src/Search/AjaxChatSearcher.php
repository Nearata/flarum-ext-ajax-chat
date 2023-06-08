<?php

namespace Nearata\AjaxChat\Search;

use Flarum\Search\AbstractSearcher;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Nearata\AjaxChat\AjaxChat;

class AjaxChatSearcher extends AbstractSearcher
{
    protected function getQuery(User $actor): Builder
    {
        return AjaxChat::query()->latest();
    }
}
