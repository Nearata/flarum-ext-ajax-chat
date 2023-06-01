<?php

namespace Nearata\AjaxChat\Validator;

use Flarum\Foundation\AbstractValidator;

class CreateValidator extends AbstractValidator
{
    protected $rules = [
        'content' => [
            'required',
            'min:3',
            'max:200',
        ],
    ];
}
