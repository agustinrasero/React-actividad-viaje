import React, { useContext } from 'react'
import { NavLink, replace, useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

function NavBar() {
    const {deslogearse} = useContext(Contexto)
    const navegacion = useNavigate()
    const logout = () =>{
        deslogearse()
        navegacion('/login',{replace:true})
    }
  return (
    
    <div>
      <nav>
        <div>
            <NavLink to='cp' >Centro</NavLink>
            <NavLink to='no'>Noreste</NavLink>
            <NavLink to='viaje'>Mi viaje</NavLink>
            
        </div>
        <button onClick={logout}>Logout</button>
      </nav>
    </div>
  )
}

export default NavBar
