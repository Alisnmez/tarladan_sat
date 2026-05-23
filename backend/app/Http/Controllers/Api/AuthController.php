<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->merge([
            'first_name' => $this->normalizeNameInput($request->input('first_name')),
            'last_name' => $this->normalizeNameInput($request->input('last_name')),
        ]);

        $validated = $request->validate([
            'first_name' => ['required', 'string', 'max:75', 'regex:/^[\pL\s\.]+$/u'],
            'last_name' => ['required', 'string', 'max:75', 'regex:/^[\pL\s\.]+$/u'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'min:6', 'confirmed'],
        ]);

        $user = User::create([
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => 'buyer',
            'status' => 'active',
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Kayıt başarılı!',
            'data' => [
                'user' => $user,
            ],
        ]);
    }

    private function normalizeNameInput(?string $value): string
    {
        return Str::squish((string) $value);
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'min:6'],
        ]);

        if (!Auth::attempt($validated)) {
            return response()->json([
                'success' => false,
                'message' => 'Email veya şifre hatalı',
            ], 401);
        }
        $user = Auth::user();

        return response()->json([
            'success' => true,
            'message' => 'Giriş başarılı',
            'data' => [
                'user' => $user,
            ],
        ]);
    }

    public function me(Request $request)
    {
       return response()->json([
            'success' => true,
            'data' => [
                'user' => $request->user(),
            ],
        ]);
    }
}
