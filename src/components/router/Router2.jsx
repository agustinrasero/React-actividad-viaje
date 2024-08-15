import React from 'react'
import Cp from '../pages/Cp'
import No from '../pages/No'
import Viaje from '../pages/Viaje'
import NavBar from '../navbar/NavBar'


import { Route,Routes } from 'react-router-dom'
import Info from '../pages/Info'


function Router2() {
  return (
    <div>
    <NavBar/>
      <Routes>
        <Route path='cp' element={<Cp/>}></Route>
        <Route path='no' element={<No/>}></Route>
        <Route path='viaje' element={<Viaje/>}></Route>
        <Route path='/destino/:nombre' element={<Info/>}></Route>
        <Route path='/' element={<Cp/>}></Route>
      </Routes>
    </div>
  )
}

export default Router2