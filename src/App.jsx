import { useState } from "react"
import Header from "./Components/Header"
import Inicio from "./Components/Inicio"
import NavBarLogin from "./Components/NavBarLogin"

import Footer from "./Components/Footer"

import Login from "./Components/Login"
import Presentacion from "./Components/Presentacion"
import Register from "./Components/Register"
import Calendario from "./Components/Calendario"
import Nosotros from "./Components/Nosotros"

const App = () => {

  const [dummy, setDummy] = useState(false);
  const [usuario, setUsuario] = useState({});

  return (
    <div className=" mx-auto ">
      {dummy? <Header/> : <NavBarLogin />}
      
      <Inicio/>
   
    </div>
  )
}

export default App