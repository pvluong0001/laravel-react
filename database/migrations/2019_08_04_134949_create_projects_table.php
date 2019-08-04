<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->timestamp('start_at');
            $table->timestamp('end_at');
            $table->tinyInteger('status')->default(0)->comment('0: Chưa bắt đầu, 1: Đang thực hiện, 2: Hoàn thành, 3: Hủy bỏ');
            $table->string('color')->default('#f1f1f1');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
