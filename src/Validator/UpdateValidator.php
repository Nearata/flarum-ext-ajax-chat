<?php

namespace Nearata\AjaxChat\Validator;

use Flarum\Foundation\AbstractValidator;

class UpdateValidator extends AbstractValidator
{
    protected $rules = [
        'content' => [
            'required',
            'min:3',
            'max:200',
        ],
    ];
}
