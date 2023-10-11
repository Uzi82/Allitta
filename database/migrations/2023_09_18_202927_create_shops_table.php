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
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('merchant_users');
            $table->string('name');
            $table->smallInteger('category');
            $table->bigInteger('reg_number')->nullable();
            $table->string('email');
            $table->string('phone_number', 18);
            $table->string('street');
            $table->string('city');
            $table->string('zip_code', 10);
            $table->string('logotype_path');
            $table->string('banner_path');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shops');
    }
};
