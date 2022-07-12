import React, { Fragment, useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Header from "./Components/Header"
import Inicio from "./Components/Inicio"
import NavBarLogin from "./Components/NavBarLogin"
import SeleccionPartido from "./Components/SeleccionPartido"
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
      
      <Router>
      {dummy? <Header/> : <NavBarLogin />}
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />            
          <Route exact path='/aboutus' element={<Nosotros />} />
          <Route exact path='/calendar' element={<Calendario />} />    
          <Route exact path='/seleccionpartido' element={<SeleccionPartido />} />
        </Routes>
      </Router>
   
    </div>
  )
}

export default App