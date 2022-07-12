import { useState } from "react"
import Header from "./Components/Header"
import Inicio from "./Components/Inicio"
import NavBarLogin from "./Components/NavBarLogin"

import Footer from "./Components/Footer"


const App = () => {

  const [dummy, setDummy] = useState(false);
  return (
    <div className=" mx-auto ">
      {dummy? <Header/> : <NavBarLogin />}
      
      <Inicio/>
   
    </div>
  )
}

export default App