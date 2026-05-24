<?php

return [

    'required' => ':attribute alanı zorunludur.',

    'email' => ':attribute geçerli bir email adresi olmalıdır.',

    'unique' => 'Bu :attribute zaten kullanılmaktadır.',

    'confirmed' => ':attribute doğrulaması eşleşmiyor.',

    'regex' => ':attribute yalnızca harf, boşluk ve nokta içerebilir.',

    'in' => ':attribute için geçerli bir seçim yapmalısınız.',

    'min' => [
        'string' => ':attribute en az :min karakter olmalıdır.',
    ],

    'max' => [
        'string' => ':attribute en fazla :max karakter olmalıdır.',
    ],

    'attributes' => [
        'first_name' => 'Ad',
        'last_name' => 'Soyad',
        'email' => 'E-posta',
        'city' => 'Şehir',
        'role' => 'Kullanıcı tipi',
        'password' => 'Şifre',
        'password_confirmation' => 'Şifre Tekrar',
    ],

];
