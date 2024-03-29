<?php

namespace Nearata\AjaxChat\Api\Controller;

use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\User\User;

class BasicUserSerializerAttributes
{
    public function __invoke(BasicUserSerializer $serializer, User $actor, array $attributes): array
    {
        return [
            'nearata-ajax-chat.canView' => $actor->can('nearata-ajax-chat.view'),
            'nearata-ajax-chat.canCreate' => $actor->can('nearata-ajax-chat.create'),
        ];
    }
}
