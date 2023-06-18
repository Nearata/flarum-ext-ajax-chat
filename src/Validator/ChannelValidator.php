<?php

namespace Nearata\AjaxChat\Validator;

use Flarum\Foundation\AbstractValidator;

class ChannelValidator extends AbstractValidator
{
    protected $rules = [
        'name' => [
            'required',
            'min:3',
            'max:100',
            'unique:nearata_ajax_chat_channels,name',
        ],
    ];
}
