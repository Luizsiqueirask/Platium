<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    use HasFactory;

    protected $hidden = ['id', 'created', 'updated'];
    protected $fillable = ['beneficio', 'idade', 'nome'];
}
