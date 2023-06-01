<?php

namespace Nearata\AjaxChat\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\UserSerializer;

class AjaxChatSerializer extends AbstractSerializer
{
    protected $type = 'ajaxChat';

    protected function getDefaultAttributes($message): array
    {
        return [
            'content' => $message->content,
            'created_at' => $message->created_at,
            'updated_at' => $message->updated_at,
        ];
    }

    protected function user($message)
    {
        return $this->hasOne($message, UserSerializer::class);
    }
}
