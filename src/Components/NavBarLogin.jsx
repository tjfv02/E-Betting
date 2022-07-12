const NavBarLogin = () => {

    const prueba= () => {
        console.log('SI HACE CLICK');
    }

    const handleRegister= () => {

        console.log('SI JALA');
        return(
            <body>
            </body>
        )
    }

    const handleLogin= () => {

    }
  return (
    <header className="text-center fixed top-0 left-0 right-0">

        

        <div class="grid grid-cols-12 bg-fondo-morado">
            <div className="col-span-1">
                <img class="w-24 h-24 rounded-full " src="/src/assets/images/logo_f.png" alt="" width="384" height="512"/>
            </div>

            <div className="col-span-2" onClick={ prueba }>
                <p className="text-white text-lg mx-auto hover:text-color-amarillo hover:bg-fondo-morado-2 cursor-pointer transition-colors p-8">
                    Calendario
                </p>
            </div>
            <div className="col-span-2">
                <p className="text-white text-lg mx-auto hover:text-color-amarillo hover:bg-fondo-morado-2 cursor-pointer transition-colors p-8 ">Ver en Vivo</p>
            </div>
            <div className="col-span-2">
                <p className="text-white text-lg mx-auto hover:text-color-amarillo hover:bg-fondo-morado-2 cursor-pointer transition-colors p-8">Acerca de Nosotros</p>
            </div>
            <div className="col-span-2 p-7">
                <button 
                    type="button"
                    className="py-2 px-10 bg-color-amarillo hover:bg-pink-600 text-white font-bold uppercase rounded "
                    onClick={ handleLogin }
                >
                    Iniciar Sesion
                </button>
            </div>
            <div className="col-span-2 p-7">
                <button 
                    type="button"
                    className="py-2 px-10 bg-color-amarillo hover:bg-pink-600 text-white font-bold uppercase rounded "
                    onClick={ handleRegister }
                >
                    Registrate!
                </button>
            </div>
            <div className="col-span-1">
                <img class="w-20 h-20 rounded-full " src="/src/assets/images/circle-user.png" alt="" width="284" height="412"/>
            </div>
        </div>
    </header>
    
  )
}

export default NavBarLogin