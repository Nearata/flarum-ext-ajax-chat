<?php

namespace Nearata\AjaxChat\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Tobscure\JsonApi\Relationship;

class AjaxChatSerializer extends AbstractSerializer
{
    protected $type = 'ajaxChat';

    /**
     * @param  \Nearata\AjaxChat\AjaxChat  $message
     */
    protected function getDefaultAttributes($message): array
    {
        return [
            'content' => $message->content,
            'createdAt' => $message->created_at,
            'updatedAt' => $message->updated_at,
            'editedAt' => $message->edited_at,
            'canEdit' => $this->actor->can('edit', $message),
            'canDelete' => $this->actor->can('delete', $message),
        ];
    }

    protected function user($message)
    {
        return $this->hasOne($message, UserSerializer::class);
    }

    protected function editedUser($message)
    {
        return $this->hasOne($message, UserSerializer::class);
    }

    protected function channel($message): ?Relationship
    {
        return $this->hasOne($message, ChannelSerializer::class);
    }
}
