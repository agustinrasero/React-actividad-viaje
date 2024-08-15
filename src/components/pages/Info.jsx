import React, { useContext, useState } from 'react'
import data from '../data/data'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Contexto from '../context/Contexto'

const Info = () => {
    const {nombre} = useParams()

    const navigate = useNavigate()

    const lugar = data.find(value => value.nombre === nombre)

    const {dispatch2,contratacion,setTotal,total} = useContext(Contexto)

    const comprar = () =>{
      const action={
        type:'contratar',
        payload: {nombre:nombre,precio:lugar.precio}
      }
      dispatch2(action)
      setTotal(total + lugar.precio)
    }

    const revocar = () =>{
      const action={
        type:'anular',
        payload: {nombre:nombre}
      }
      dispatch2(action)
      setTotal(total - lugar.precio)
    }

  return (
    <div className='informacion'>
      <h3>{lugar.nombre}</h3>
      <img src={`${process.env.PUBLIC_URL}/img/${lugar.imagen}`}></img>
      <br/>
      <div className='botones'>
        {(!contratacion.find(item => item.lugar === lugar.nombre))&&<button className='botones c' onClick={comprar}>Comprar</button> /* ! Si es falso */}
        {(contratacion.find(value => value.lugar === lugar.nombre)) && <button className='botones r' onClick={revocar}>Revocar</button>}
        <button onClick={() => { navigate(-1); }}>Volver</button>
      </div>
      <h4>Ubicacion: {lugar.situacion}</h4>
      <h5>Que ofrece: {lugar.servicio}</h5>
      <h5>Precio: ${lugar.precio}</h5>
    </div>
  )
}

export default Info
