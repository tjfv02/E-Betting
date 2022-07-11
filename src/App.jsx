import { useState } from "react"
import Header from "./Components/Header"
import Inicio from "./Components/Inicio"
import NavBarLogin from "./Components/NavBarLogin"


const App = () => {

  const [dummy, setDummy] = useState(false);
  return (
    <div className=" mx-auto ">
      {dummy? <Header/> : <NavBarLogin />}
      
      <div className=" mx-auto">
        <Inicio />

      </div>
    </div>
  )
}

export default App