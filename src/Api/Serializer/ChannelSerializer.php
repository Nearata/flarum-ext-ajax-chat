<?php

namespace Nearata\AjaxChat\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

class ChannelSerializer extends AbstractSerializer
{
    protected $type = 'ajaxChatChannels';

    /**
     * @param  \Nearata\AjaxChat\Channels  $channel
     */
    protected function getDefaultAttributes($channel): array
    {
        return [
            'id' => $channel->id,
            'name' => $channel->name,
            'createdAt' => $channel->created_at,
            'updatedAt' => $channel->updated_at,
        ];
    }
}
