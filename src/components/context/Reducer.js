import React from 'react'

const Reducer = (state,action) => {
    switch (action.type) {
        case 'login':
            return {
                logeado:true,
                usuario:action.payload
            };

        case 'logout':
            return {
                logeado:false,
                usuario:null
            };

        default:
            break;
    }
  
}

export default Reducer
