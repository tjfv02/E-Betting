import Footer from "./Footer"

const Nosotros = () => {
  return (
    <div className="bg-fondo-morado h-screen">
        <div class="mt-20 md:flex p-6  pt-11">

            <div className="px-5 py-10 m-5 my-10  shadow-lg rounded-lg bg-fondo-morado-2 md:w-3/4 lg:w-1/2">
                <h2 class="font-semibold text-3xl mb-5 text-color-amarillo">E-Betting</h2>
                <p className="text-white">
                    Debido al auge de los deportes electrónicos (eSports) "E-Betting" nació
                    como un facilitador para los fanáticos que disfrutan de conocer el mundo competitivo de sus juegos
                    favoritos.
                </p>
                <hr class="my-6 border-gray-300" />
                <p className="text-white">
                    Para lograr un extra de emoción a cada partidad lograda, utilizar tus conocimientos
                    en apuestas te otorgará esa emoción extra que tanto buscas
                </p>
                
            </div>

            <div className="px-5 py-10 m-5 my-10  shadow-lg rounded-lg bg-fondo-morado-2 md:w-3/4 lg:w-1/2 ">
                <h2 class="font-semibold text-3xl mb-5 text-color-amarillo">Detrás de E-Betting</h2>
                <p className="text-white">
                    A través de nuestros dedicados asociados, ofrecemos servicios y soluciones de misión crítica
                    en nombre de empresas y gobiernos, creando resultados excepcionales para nuestros clientes y los miilones
                    de personas que cuentan con ellos.
                </p>
                <hr class="my-6 border-gray-300" />
                <p className="text-white">
                    Somos un equipo con una sola misión y trabajamos en un entorno abierto e inclusivo para crear valor 
                    para nuestros clientes cada día.
                </p>
                
            </div>
        </div>
        <div class="flex flex-wrap justify-center">
            <img
            src="/src/assets/images/sharklabs logo.png"
            class="p-1 max-w-sm pb-10"
            alt="..."
            />
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Nosotros