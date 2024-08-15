import React, { useContext } from 'react'
import Contexto from '../context/Contexto'
import { Navigate } from 'react-router-dom'

const RutasPublicas = ({children}) => {
  const {logeado} = useContext(Contexto)
  return logeado 
    ? <Navigate to="/cp" /> // Redirige a una ruta privada si el usuario está logeado
    : children; // Muestra los hijos si el usuario no está logeado
    
  
}

export default RutasPublicas
