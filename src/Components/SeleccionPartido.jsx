

const SeleccionPartido = () => {
    const handleApuesta = () => {

    }

    return (
    <div className="bg-fondo-morado h-full">
        <div class="flex space-x-2 justify-center pt-32">
            <h1 class="text-white text-2xl">¡Bienvenido Bushinii!</h1>
        </div>
        <div class="flex space-x-2 justify-center">
            <h1 class="text-purple-300 text-xl">Usuario Novato</h1>
        </div>
        <div class="flex justify-start h-96 w-3/4 bg-[url('/src/assets/images/valorant-banner.jpg')] mx-auto bg-cover rounded-2xl">
            <div class="flex">
                <img src="/src/assets/images/mad-lions.png" className=" pr-48"></img>
                <div class="pr-60 w-1">
                    <h1 class="text-white text-2xl pt-20 pb-24">Partido en Progreso</h1>
                    <button type="button"className="py-2 px-10 bg-color-amarillo hover:bg-pink-600 text-white font-bold uppercase rounded-full " onClick={ handleApuesta }>
                        <h1>Ver en vivo</h1>
                    </button>
                </div>
                <img src="/src/assets/images/logo_G2.png" className=""></img>
            </div>
        </div>
        <div class="pt-14"></div>
        <div class="flex justify-start h-96 w-3/4 bg-[url('/src/assets/images/rocket.jpg')] mx-auto bg-cover rounded-2xl">
            <div class="flex">
                <img src="/src/assets/images/mad-lions.png" className=" pr-48"></img>
                <div class="pr-60 w-1">
                    <h1 class="text-black text-2xl pt-20 pb-24">Partido en Progreso</h1>
                    <button type="button"className="py-2 px-10 bg-color-amarillo hover:bg-pink-600 text-white font-bold uppercase rounded-full " onClick={ handleApuesta }>
                        <h1>Apostar</h1>
                    </button>
                </div>
                <img src="/src/assets/images/logo_G2.png" className=""></img>
            </div>
        </div>
        <div class="pt-14"></div>
    </div>
    )
}

export default SeleccionPartido