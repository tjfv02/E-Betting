import { useState, useEffect } from "react";
import Footer from "./Footer"

const Register = () => {
    //Datos Formulario
    const[nombreRegister, setNombreRegister] = useState('');
    const[apellidoRegister, setApellidoRegister] = useState('');
    const[emailRegister, setEmailRegister] = useState('');
    const[usuarioRegister, setUsuarioRegister] = useState('');
    const[contrasenaRegister, setContrasenaRegister] = useState('');



    return (
      <div className="bg-fondo-morado h-screen">
        <div clasName="pt-14">
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <div className=" p-10 grid grid-cols-2  bg-fondo-morado-2 text-center">

                <div className="align-center">
                    <img src="/src/assets/images/logo_f.png" className="w-2/3"></img>
                </div>

                <div className="block bg-fondo-morado w-2/3 rounded-lg p-3">
                    <div className="p-6 grid grid-row-12 gap-y-3">
                        <div>
                            <p className="font-sans text-xl font-semibold text-white text-center ">¡Únete a la experiencia!</p>
                        </div>
                        <div>
                            <p className="font-sans text-base font-normal text-white text-left">Nombres</p>
                        </div>
                        <div>
                            <input type="text" id="nombre_r" className="mt-1 px-3 py-2 bg-white placeholder-slate-400  block w-full rounded-md focus:ring-1" placeholder="Juan Alejandro" value={nombreRegister} onChange = { (e) => setNombreRegister(e.target.value)}/>                 
                        </div>
                        <div>
                            <p className="font-sans text-base font-normal text-white text-left">Apellidos</p>
                        </div>
                        <div>
                            <input type="text" id="apellido_r" className="mt-1 px-3 py-2 bg-white placeholder-slate-400  block w-full rounded-md focus:ring-1" placeholder="Mota Garcia" value={apellidoRegister} onChange = { (e) => setApellidoRegister(e.target.value)}/>                 
                        </div>
                        <div>
                            <p className="font-sans text-base font-normal text-white text-left">Correo Electrónico</p>
                        </div>
                        <div>
                            <input type="text" id="correo_r" className="mt-1 px-3 py-2 bg-white placeholder-slate-400  block w-full rounded-md focus:ring-1" placeholder="ejemplo@gmail.com" value={emailRegister} onChange = { (e) => setEmailRegister(e.target.value)}/>                   
                        </div> 
                        <div>
                            <p className="font-sans text-base font-normal text-white text-left">Usuario</p>
                        </div>
                        <div>
                            <input type="text" id="usuario_r" className="mt-1 px-3 py-2 bg-white placeholder-slate-400  block w-full rounded-md focus:ring-1" placeholder="ejemplo123" value={usuarioRegister} onChange = { (e) => setUsuarioRegister(e.target.value)}/>                  
                        </div> 
                        <div>
                            <p className="font-sans text-base font-normal text-white text-left">Contraseña</p>
                        </div>
                        <div>
                            <input type="text" name="contra_r" className="mt-1 px-3 py-2 bg-white placeholder-slate-400  block w-full rounded-md focus:ring-1" placeholder="******************" value={contrasenaRegister} onChange = { (e) => setContrasenaRegister(e.target.value)}/>                   
                        </div>
                        <div className="items-center">
                            <button className="bg-color-amarillo rounded-lg border-solid border-4 border-color-amarillo p-2">Inscribirse</button>
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
  
  export default Register