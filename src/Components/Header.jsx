import { useState } from "react";

const Header = () => {

const usuario = 'Tito'  
  return (
    <header className="text-center">

        <div class="bg-indigo-900  p-5 text-5xl font-extrabold ...">
            <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600">
                ¡Bienvenido {usuario}!
            </span>
        </div>

        <div className="text-center text-2xl font-bold bg-indigo-900 text-violet-400 mx-auto p-5">
            <h2 >Usuario Novato</h2>

        </div>


        <div class="grid grid-cols-5 bg-indigo-900">

            <div>
                <p className="text-white text-lg mx-auto hover:bg-indigo-800 cursor-pointer transition-colors p-5 ">Inicio</p>
            </div>
            <div>
                <p className="text-white text-lg mx-auto hover:bg-indigo-800 cursor-pointer transition-colors p-5">Proximos Eventos</p>
            </div>
            <div>
                <p className="text-white text-lg mx-auto hover:bg-indigo-800 cursor-pointer transition-colors p-5">Ver en Vivo</p>
            </div>
            <div>
                <p className="text-white text-lg mx-auto hover:bg-indigo-800 cursor-pointer transition-colors p-5">Estadísticas</p>
            </div>
            <div>
                <p className="text-white text-lg first-letter:mx-auto hover:bg-indigo-800 cursor-pointer transition-colors p-5">Perfil</p>
            </div>
        </div>
    </header>
  )
}

export default Header
