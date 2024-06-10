<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * @param Request $request
     */
    public function userRegister(Request $request)
    {
        try {
            $request->validate([
                "name" => "required|string",
                "email" => "required|string|email|unique:users",
                "password" => "required"
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
        } catch (\Throwable $th) {
            throw $th;
        }
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

        $user = DB::table('users')->where('email', $request->email)->first();
        if (empty(Hash::check($request->password, $user->password))) {
            return response()->json([
                "status" => false,
                "message" => "Data user invalid"
            ], 400);
        }

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
            "expires_in" => Auth::factory()->getTTL() * 60
        ]);
    }

    public function refreshUserToken()
    {
        $token = Auth::refresh();

        return response()->json([
            "status" => true,
            "token" => $token,
            "expires_in" => Auth::factory()->getTTL() * 60
        ]);
    }
}
