<?php

use App\Enums\ProductOrderStatusEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_orders', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->foreignId('shop_id')->constrained('shops');
            $table->smallInteger('status')->default(ProductOrderStatusEnum::NEW->value);
            $table->float('amount');
            $table->string('delivery_code', 10);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_orders');
    }
};
