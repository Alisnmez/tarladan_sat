<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('users')
            ->where('role', 'producer')
            ->update(['role' => 'seller']);

        DB::table('users')
            ->whereNull('role')
            ->orWhereNotIn('role', ['buyer', 'seller', 'admin'])
            ->update(['role' => 'buyer']);

        DB::statement("
            ALTER TABLE users
            MODIFY COLUMN role ENUM('buyer', 'seller', 'admin') NOT NULL DEFAULT 'buyer'
        ");
    }

    public function down(): void
    {
        DB::statement("
            ALTER TABLE users
            MODIFY COLUMN role VARCHAR(255) NOT NULL DEFAULT 'buyer'
        ");
    }
};
