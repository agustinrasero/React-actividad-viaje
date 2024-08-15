import React from 'react'

const Reducer2 = (state=[],action) => {
    switch (action.type) {
        case 'contratar':
            return [...state, { lugar: action.payload.nombre, precio: action.payload.precio }] ;

        case 'anular':
            return state.filter(item => item.lugar !== action.payload.nombre);

        default:
            return state; // Siempre devolver el estado actual por defecto
    }
  
}

export default Reducer2