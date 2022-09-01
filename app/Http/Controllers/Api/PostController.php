<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index() 
    {
        $posts = Post::paginate(5);

        $posts->map(function ($post) {
            $post->content = substr($post->content, 0, 100) . "...";  
            return $post;
        });

        return response()->json($posts);
    }
}
