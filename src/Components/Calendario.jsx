import Footer from "./Footer"

const Calendario = () => {
  const handleApuesta = () => {

  }

  return (
    <div className="bg-fondo-morado h-screen ">

      <div className="grid grid-cols-3 gap-4 pt-36 px-10 py-10 mx-10 my-10">
        
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/src/assets/carousel/Calendario Valorant.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Valorant Masters 2022:</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Los Challengers han terminado, los equipos están listas y se acerca la hora de la verdad en la ‘bahía humeante’ de Islandia. Ya conocemos los equipos que van a participar, los horarios del calendario y el formato del primer torneo Valorant Masters de 2022 que se llevará a cabo en Reikiavik.</p>
                <button 
                  type="button"
                  className="py-2 px-10 bg-color-amarillo hover:bg-pink-600 text-white font-bold uppercase rounded-full "
                  onClick={ handleApuesta }
                >
                  Apuesta aquí!
                </button>
            </div>
        </div>

        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img class="rounded-t-lg" src="/src/assets/carousel/Rocket.webp" alt="" />
          </a>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TEMPORADA 2021-2022 DE LA RLCS:</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">¡La Rocket League Championship Series (RLCS) vuelve a lo grande! Con la mayor cantidad destinada a premios hasta ahora (6 millones de dólares estadounidenses), más regiones y un formato actualizado, la temporada 2021-2022 de la RLCS será la más emocionante hasta la fecha.</p>
              <button 
                type="button"
                className="py-2 px-10 bg-color-amarillo hover:bg-pink-600 text-white font-bold uppercase rounded-full "
                onClick={ handleApuesta }
              >
                Apuesta aquí!
              </button>
          </div>
        </div>

        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img class="rounded-t-lg" src="/src/assets/carousel/r6.webp" alt="" />
          </a>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">R6 Six Invitational 2022:</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">¡Estamos emocionados de que disfruten desde casa los apasionantes enfrentamientos internacionales, el mapa de ruta del año 7 y las nuevas experiencias de este evento!</p>
              <button 
                type="button"
                className="py-2 px-10 bg-color-amarillo hover:bg-pink-600 text-white font-bold uppercase rounded-full "
                onClick={ handleApuesta }
              >
                Apuesta aquí!
              </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Calendario