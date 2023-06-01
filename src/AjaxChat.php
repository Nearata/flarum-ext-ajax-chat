<?php

namespace Nearata\AjaxChat;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

/**
 * @property int $id
 * @property int $user_id
 * @property string $content
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class AjaxChat extends AbstractModel
{
    protected $table = 'nearata_ajax_chat';

    protected $dates = ['created_at', 'updated_at'];

    public $timestamps = true;

    protected $fillable = ['user_id', 'content'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
