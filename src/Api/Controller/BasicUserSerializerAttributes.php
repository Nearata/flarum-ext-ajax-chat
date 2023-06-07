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
            'nearata-ajax-chat.canEdit' => $actor->can('nearata-ajax-chat.edit'),
            'nearata-ajax-chat.canEditOthers' => $actor->can('nearata-ajax-chat.editOthers'),
            'nearata-ajax-chat.canDelete' => $actor->can('nearata-ajax-chat.delete'),
            'nearata-ajax-chat.canDeleteOthers' => $actor->can('nearata-ajax-chat.deleteOthers'),
        ];
    }
}
