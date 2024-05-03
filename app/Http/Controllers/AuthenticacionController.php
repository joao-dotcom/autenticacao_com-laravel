<?php

namespace App\Http\Controllers;

use App\Models\User;
use Dotenv\Exception\ValidationException;
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
        try {
            $credentials = $request->validate([
                'email' => 'required|string',
                'password' => 'required|string',
            ]);
    
            $user = User::where('email', $request->email)->first();
    
            if (Auth::attempt($credentials)) {
                $request->session()->regenerate();
    
                //salvando os dados na sessão
                $request->session()->put('user_id', $user->id);
                $request->session()->put('email', $user->email);
                $request->session()->put('name', $user->name);
    
                return redirect()->route('home.index');
            } else {
                return redirect()->back()->withInput()->withErrors(["Usuário ou Senha Incorretos."]);
            }
        } catch (ValidationException $e) {
            // Redirecionar de volta com erros de validação
            return redirect()->back()->withInput()->withErrors($e->getMessage());
        } catch (Exception $e) {
            // Lidar com outras exceções
            dd($e); // Use um tratamento mais apropriado para suas necessidades
        }
        

    }

    public function logout(Request $request)
    {
        // resetar a sessão 
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        //retornar a tela de login
        return redirect('/login');
    }

}
