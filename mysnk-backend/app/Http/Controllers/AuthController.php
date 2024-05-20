<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * @param Request $request
     */
    public function userRegister(Request $request)
    {
        $request->validate([
            "name" => "required|string",
            "email" => "required|string|email|unique:users",
            "password" => "required|confirmed"
        ]);
        
        User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => bcrypt($request->password)
        ]);

        return response()->json([
            "status" => true,
            "message" => "User created successfully",
        ]);
    }

    /**
     * @param Request $request
     */
    public function authLogin(Request $request)
    {
        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);

        $token = auth()->attempt([
            "email" => $request->email,
            "password" => $request->password
        ]);
        if (empty($token)) {
            return response()->json([
                "status" => false,
                "message" => "Invalid Login"
            ], 400);
        }

        return response()->json([
            "status" => true,
            "message" => "User logged In",
            "token" => $token,
            "expires_in" => auth()->factory()->getTTL() * 60
        ]);
    }

    public function refreshUserToken()
    {
        $token = auth()->refresh();
        return response()->json([
            "status" => true,
            "token" => $token,
            "expires_in" => auth()->factory()->getTTL() * 60
        ]);
    }
}
