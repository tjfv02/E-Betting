import { useState } from "react";

const Header = () => {

const usuario = 'Tito'  
const nivelUsuario = 'Pro'
  return (
    <header className="text-center ">

        <div class="bg-fondo-morado  p-5 text-5xl font-extrabold ... ">

            <div className="grid grid-cols-7">
                <div className="col-span-1">
                    <img class="w-24 h-24 rounded-full " src="/src/assets/images/Logo.png" alt="" width="384" height="512"/>
                </div>

                <div className="col-span-5 p-3">
                    <span class=" bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600">
                        ¡Bienvenido {usuario}!
                    </span>
                </div>

                <div className="col-span-1">
                    <img class="w-24 h-24 rounded-full " src="/src/assets/images/user.jpg" alt="" width="284" height="412"/>
                </div>

            </div>
        </div>

        <div className="text-center text-3xl font-bold bg-fondo-morado text-violet-400 mx-auto my-auto  pb-5 ">
            <h2 >Usuario {nivelUsuario}</h2>
        </div>


        <div class="grid grid-cols-5 bg-fondo-morado ">

            <div >
                <p className="text-white text-lg mx-auto hover:text-color-amarillo hover:bg-fondo-morado-2 cursor-pointer transition-colors p-5 ">Inicio</p>
            </div>
            <div>
                <p className="text-white text-lg mx-auto hover:text-color-amarillo hover:bg-fondo-morado-2 cursor-pointer transition-colors p-5">Proximos Eventos</p>
            </div>
            <div>
                <p className="text-white text-lg mx-auto hover:text-color-amarillo hover:bg-fondo-morado-2 cursor-pointer transition-colors p-5">Ver en Vivo</p>
            </div>
            <div>
                <p className="text-white text-lg mx-auto hover:text-color-amarillo hover:bg-fondo-morado-2 cursor-pointer transition-colors p-5">Estadísticas</p>
            </div>
            <div>
                <p className="text-white text-lg first-letter:mx-auto hover:text-color-amarillo hover:bg-indigo-800 cursor-pointer transition-colors p-5">Perfil</p>
            </div>
        </div>
    </header>
  )
}

export default Header
