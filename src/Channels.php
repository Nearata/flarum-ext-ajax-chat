<?php

namespace Nearata\AjaxChat;

use Flarum\Database\AbstractModel;

/**
 * @property int $id
 * @property string $name
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 */
class Channels extends AbstractModel
{
    protected $table = 'nearata_ajax_chat_channels';

    protected $dates = ['created_at', 'updated_at'];

    public $timestamps = true;

    protected $fillable = ['name'];

    public function messages()
    {
        return $this->hasMany(AjaxChat::class, 'channel_id');
    }
}
