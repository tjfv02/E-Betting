import Footer from "./Footer"
import Presentacion from "./Presentacion"

const Inicio = () => {

const handleApuesta = () => {

}
const handleConoceMas = () => {

}

  return (
    <div className="bg-fondo-morado h-screen">
      <div class="h-3/4 bg-[url('/src/assets/images/fondo1.jpg')] ">

        <div clasName="pt-14">
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          
          <h2 className="font-black text-7xl text-left text-color-amarillo pt-20 p-9">            
            <img src="/src/assets/images/titulo-02.png" className="w-2/5"></img>
          </h2>

          <p className="text-3xl mt-5 text-left text-white mb-10 p-9">
            Una plataforma en la cuál podrás 
            visualizar los torneos más esperados,
            y apostar por tu equipo favorito.
          </p>

          <p className="text-3xl mt-5 text-left text-white mb-10 p-9">
            Vive el gaming intensamente con los 
            mejores torneos y lo último de los e-Sports.
          </p>

          <div  clasName="flex space-x-2 justify-center">
            <button 
              type="button"
              className="py-2 px-10 bg-color-amarillo hover:bg-pink-600 text-white font-bold uppercase rounded-full "
              onClick={ handleConoceMas }
            >
              Conoce más!
            </button>
          </div>
        </div>
       
    
        
      </div>
      <div class="h-3/a bg-[url('/src/assets/images/A.jpg')] mx-auto">

        <h2 className=" text-4xl text-center text-white pt-14 pb-14">
            Comprueba todo lo que tenemos para tí
        </h2>

        <div class="flex justify-around p-9">
          <div className=" bg-fondo-morado rounded-xl overflow-hidden pt-14 p-9">
            <h2 className=" text-3xl text-center text-color-amarillo">
              Visualiza torneos en vivo
            </h2>
            <br/>
            <p className="text-white text-center text-2xl p-9"> 
              Cada torneo se encuentra dividido por categoría,
              podrás visualizar cada uno por los 
              cuales realizaste una apuesta.
            </p>
          </div>

          <div className=" bg-fondo-morado rounded-xl overflow-hidden pt-14 p-9">
            <h2 className=" text-3xl text-center text-color-amarillo ">
              Analiza como se encuentra tu equipo favorito
            </h2>
            <br/>
            <p className="text-white text-center text-2xl p-9"> 
              Al finalizar cada torneo se encuentran las estadísticas del progreso
              de cada equipo que ha participado en los torneos. 
            </p>
          </div>

          <div className=" bg-fondo-morado rounded-xl overflow-hidden pt-14 ">            
            <h2 className=" text-3xl text-center text-color-amarillo ">
              Puedes ingresar tu wallet de criptomonedas
            </h2>
            <br/>
            <p className="text-white text-center text-2xl p-9"> 
              Si posees una wallet de criptomonedas, puedes aposter con ellas.
            </p>
            <br/>
            <p className="text-white text-center text-2xl p-9"> 
              Si en caso no cuentas con una, puedes apostar con tu moneda local.
            </p>
          </div>

          <div className=" bg-fondo-morado rounded-xl overflow-hidden pt-14 p-9">
            <h2 className=" text-3xl text-center text-color-amarillo p-9">
              No te pierdas ningún momento
            </h2>
            <br/>
            <p className="text-white text-center text-2xl p-9"> 
              Contamos con un calendario en el que puedes cisualizar los próximos eventos,
              e inidicar el de tu interés para que recibas un recordatorio y no te lo pierdas.
            </p>
          </div>

          

        </div>
        <div class="flex space-x-2 justify-center pb-6">
          <button 
            type="button"
            className="py-2 px-10 bg-color-amarillo hover:bg-pink-600 text-white font-bold uppercase rounded-full "
            onClick={ handleApuesta }
          >
            Apuesta aquí!
          </button>
        </div>


        <div>

        </div>
        
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Inicio
