<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthenticacionController extends Controller
{
    public function index(){
        return view('login');
    }

    public function home(){
        return view('home');
    }

    public function auth(Request $request)
    {
        // dd('oi');
        session()->flush();

        $credentials = [
            'email' => $request->usuario,
            'password' => $request->senha
        ];
            
        if(Auth::attempt($credentials))
        {
            $user = Auth::user();

            $usuario_logado = [
                'id'            => $user->id,
                'nome'          => $user->name,
                'email'         => $user->email,
            ];
            
            session()->put(['usuario' => $usuario_logado]);
            
            return redirect()->route('home.index');
        }

        return redirect()->back()->withInput()->withErrors(["Usuário ou Senha Incorretos."]);

    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }

}
