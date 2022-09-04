<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show($id) {

        $user = User::select("name", "id")->findOrFail($id);

        return response()->json($user);
    }
}
