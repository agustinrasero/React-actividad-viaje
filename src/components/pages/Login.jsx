import React, { useContext,useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto';


function Login() {

    const {nombre,setNombre} = useContext(Contexto)

    const {logearse} = useContext(Contexto)
    const navegacion = useNavigate();
    const login = () =>{
        logearse(nombre)
        navegacion('/cp',{replace:true})
    }

    const registro = (e) =>{
      setNombre(e.currentTarget.value)
    }

    

    

  return (
    <div className='login-container'>
      <div className='login'>
        <h3>Bienvenido!</h3>
        <p>Ingrese su nombre</p>
        <input type='text' onChange={registro}></input>
        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default Login
