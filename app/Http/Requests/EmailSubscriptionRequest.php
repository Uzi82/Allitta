<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmailSubscriptionRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => 'required|email|unique:email_subscriptions,email'
        ];
    }
}
