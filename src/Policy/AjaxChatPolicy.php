<?php

namespace Nearata\AjaxChat\Policy;

use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;
use Nearata\AjaxChat\AjaxChat;

class AjaxChatPolicy extends AbstractPolicy
{
    public function edit(User $actor, AjaxChat $message)
    {
        if ($actor->isAdmin() || $actor->hasPermission('nearata-ajax-chat.editOthers')) {
            return $this->allow();
        }

        return $actor->hasPermission('nearata-ajax-chat.edit') && $actor->id === $message->user_id ? $this->allow() : $this->deny();
    }

    public function delete(User $actor, AjaxChat $message)
    {
        if ($actor->isAdmin() || $actor->hasPermission('nearata-ajax-chat.deleteOthers')) {
            return $this->allow();
        }

        return $actor->hasPermission('nearata-ajax-chat.delete') && $actor->id === $message->user_id ? $this->allow() : $this->deny();
    }
}
