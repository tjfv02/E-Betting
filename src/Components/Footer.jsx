import { useState } from "react";
const Footer = () => {
  return (
    <div className="text-center ">
        <hr class="border-2 border-color-amarillo"></hr>
        <div class="grid grid-cols-5 bg-fondo-morado">
            <div>
                <p className="text-color-amarillo text-lg mx-auto font-extrabold transition-colors p-5 ">E-betting</p>
            </div>
            <div>
                <p className="text-white text-lg mx-auto transition-colors p-5">2022 &copy; Sharklabs | All rights reserved</p>
            </div>
            <div>
                <p className="text-white text-lg mx-auto hover:bg-indigo-800 cursor-pointer transition-colors p-5">Inicio</p>
            </div>
            <div>
                <p className="text-white text-lg mx-auto hover:bg-indigo-800 cursor-pointer transition-colors p-5">Calendario</p>
            </div>
            <div>
                <p className="text-white text-lg first-letter:mx-auto hover:bg-indigo-800 cursor-pointer transition-colors p-5">Acerca de nosotros</p>
            </div>
        </div>
    </div>
  )
}
export default Footer
