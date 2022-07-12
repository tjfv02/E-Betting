import { useState, useEffect } from "react";
import Footer from "./Footer";

const Login = () => {
    const[usuarioLogin, setUsuarioLogin] = useState('');
    const[contrasenaLogin, setContrasenaLogin] = useState('');

    const handleLogin = () => {
        
    }
    return (
        <div className="bg-fondo-morado h-screen">
            <div clasName="pt-14">
                <p>.</p>
                <p>.</p>
                <div class="p-10 grid grid-cols-2  bg-fondo-morado-2 text-center mt-10">
                    <div class="align-center">
                        <img src="/src/assets/images/logo_f.png" class="w-2/3"></img>
                    </div>
                    <div class="block bg-fondo-morado w-2/3 rounded-lg p-3">
                        <div class="p-20 grid grid-row-12 gap-y-3">
                            <div>
                                <p class="font-sans text-xl font-semibold text-center text-white">¡Bienvenido!</p>
                            </div>
                            <div>
                                <p class="font-sans text-base font-normal text-white text-left">Usuario</p>
                            </div>
                            <div>
                                <input type="text" id="nombre_r" class="mt-1 px-3 py-2 bg-white placeholder-slate-400  block w-full rounded-md focus:ring-1" placeholder="JuAxD43" value={usuarioLogin} onChange = { (e) => setUsuarioLogin(e.target.value)}/>                 
                            </div>
                            <div>
                                <p class="font-sans text-base font-normal text-white text-left">Contraseña</p>
                            </div>
                            <div>
                                <input type="text" id="apellido_r" class="mt-1 px-3 py-2 bg-white placeholder-slate-400  block w-full rounded-md focus:ring-1" placeholder="*******" value={contrasenaLogin} onChange = { (e) => setContrasenaLogin(e.target.value)}/>                 
                            </div>
                            <div class="items-center pt-5">
                            <button 
                                type="button"
                                className="py-2 px-10 bg-color-amarillo hover:bg-pink-600 text-white font-bold uppercase rounded "
                                onClick={ handleLogin }
                            >
                                Iniciar Sesion
                            </button>
                            </div>
                            <div>
                                <p class="font-sans text-base font-semibold text-center text-white">Olvide mi contraseña</p>
                            </div>    
                        </div>        
                    </div>
                </div>
            </div>
        <footer>
            <Footer/>
        </footer>
        </div>
      )
}

export default Login