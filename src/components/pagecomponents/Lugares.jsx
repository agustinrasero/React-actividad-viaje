import React, { useContext } from 'react'
import data from '../data/data'
import { Link } from 'react-router-dom'
import Contexto from '../context/Contexto'

const Lugares = ({zona}) => {

    const {contratacion} = useContext(Contexto)

    const filter = data.filter(value => value.zona === zona)


    const map = filter.map(value => 
    <div key={value.nombre} className='zonas'>
      <h3>{value.nombre}</h3>
      <p>{value.situacion}</p>
      <img src={`${process.env.PUBLIC_URL}/img/${value.imagen}`}></img> 
      <div className='link-circ'>
        <Link className='link' to={`/destino/${value.nombre}`}>Mas info</Link>
        {(contratacion.find(item => item.lugar === value.nombre)) && <div className='circulo'></div> /*&& evalúa el valor de la izquierda y, si es true, retorna el valor de la derecha. */}
      </div>
    </div>)
    
  return (
    <div className='lugar'>
      {map}
    </div>
  )
}

export default Lugares
