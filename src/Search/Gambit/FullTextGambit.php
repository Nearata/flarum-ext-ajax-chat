<?php

namespace Nearata\AjaxChat\Search\Gambit;

use Flarum\Search\GambitInterface;
use Flarum\Search\SearchState;

class FullTextGambit implements GambitInterface
{
    public function apply(SearchState $search, $bit)
    {
        $search->getQuery()
            ->where('channel_id', is_numeric($bit) ? $bit : null);

        return true;
    }
}
