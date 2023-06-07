<?php

namespace Nearata\AjaxChat;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

/**
 * @property int $id
 * @property int $user_id
 * @property string $content
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property \Carbon\Carbon|null $edited_at
 * @property int|null $edited_user_id
 */
class AjaxChat extends AbstractModel
{
    protected $table = 'nearata_ajax_chat';

    protected $dates = ['created_at', 'updated_at', 'edited_at'];

    public $timestamps = true;

    protected $fillable = ['user_id', 'content'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function editedUser()
    {
        return $this->belongsTo(User::class, 'edited_user_id');
    }
}
