<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prices extends Model
{
    use HasFactory;

    //protected $table = ["prices"];
    protected $hidden = ["id", "created", "updated"];
    protected $fillable = ["codigo", "minimo_vidas", "faixa1", "faixa2", "faixa3"];
}
