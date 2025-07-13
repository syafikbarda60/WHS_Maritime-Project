<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title') -> nullable();
            $table->string('slug') -> nullable();
            $table->string('short_desc') -> nullable();
            $table->text('content') -> nullable();
            $table->string('img') -> nullable();
            $table->integer('stats') -> default (1);
            $table -> $table->timestamp('added_on')->nullable()->default(time());
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
