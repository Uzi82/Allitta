<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customer_users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('last_name');
            $table->string('full_name');
            $table->string('email');
            $table->string('img_path');
            $table->text('password');
            $table->date('birthday');
            $table->tinyInteger('gender');
            $table->string('phone_number', 18);
            $table->string('street');
            $table->string('city');
            $table->string('zip-code');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_users');
    }
};
