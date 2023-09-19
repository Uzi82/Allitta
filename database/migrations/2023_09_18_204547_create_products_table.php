<?php

use App\Enums\CurrencyEnum;
use App\Enums\ProductStatusEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shop_id')->constrained('shops');
            $table->string('name');
            $table->string('logotype_path');
            $table->jsonb('images')->nullable();
            $table->text('description');
            $table->tinyInteger('status')->default(ProductStatusEnum::UNAVAILABLE->value);
            $table->foreignId('category_id')->constrained('product_categories');
            $table->smallInteger('subcategory');
            $table->boolean('active')->default(false);
            $table->boolean('draft')->default(false);
            $table->integer('quantity')->default(0);
            $table->tinyInteger('currency')->default(CurrencyEnum::USD->value);
            $table->integer('cost');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
