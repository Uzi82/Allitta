<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function () {
            DB::statement('ALTER TABLE products ADD COLUMN name_tsvector tsvector');
            DB::statement('CREATE INDEX products_name_tsvector_index ON products USING GIN(name_tsvector)');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropIndex('products_name_tsvector_index');
            $table->dropColumn('name_tsvector');
        });
    }
};
