import React, { useReducer, useState } from 'react'
import Contexto from './Contexto'
import Reducer from './Reducer'
import Reducer2 from './Reducer2'

const init = ()=> {
    const user = localStorage.getItem('valor')
    return{
        logeado:!!user,
        usuario:user
    }
}



const Provider = ({children}) =>{

    const logearse = (user='') =>{
        const action = {
            type:'login',
            payload:user
            
        }
        localStorage.setItem('valor',user)
        dispatch(action)
    }
    
    const deslogearse = () =>{
        const action = {
            type:'logout',
            payload:null
            
        }
        localStorage.removeItem('valor')
        dispatch(action)
    }



    const [aut,dispatch] = useReducer(Reducer,{},init)





    const valorInicial = [
        
    ]



    const [contratacion,dispatch2] = useReducer(Reducer2,valorInicial)



    const [nombre, setNombre] = useState('')

    const [total, setTotal] = useState(0);



    return(
        <Contexto.Provider value={{contratacion,dispatch2,...aut,logearse,deslogearse,nombre,setNombre,total,setTotal}}>
            {children}
        </Contexto.Provider>
    )
}

export default Provider
