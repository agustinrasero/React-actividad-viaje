import React from 'react'
import { useContext } from 'react'
import Contexto from '../context/Contexto'



const Viaje = () => {
  const {contratacion,dispatch2,nombre,total,setTotal} = useContext(Contexto)
    
  

  return (
    <>
        <section className='ruta'>
        <h2>Usuario: {nombre}</h2>
        <h3>Lugares a visitar:</h3>
        {(contratacion.length === 0) && <h3>No selecciono ninguna Lugar!!</h3>}
        {contratacion.map(value => <div className='lista' key={value.lugar}><button onClick={()=> {dispatch2({type:'anular',payload:{nombre:value.lugar}});setTotal(total - value.precio)}}>Revocar</button> <h4>{value.lugar}</h4> <h4>${value.precio}</h4></div>)}
        <h3>Total: ${total}</h3>
        </section>
    </>
  )
}

export default Viaje
