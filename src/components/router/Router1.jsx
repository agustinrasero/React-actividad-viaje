import React from 'react'
import Login from '../pages/Login'
import { Route,Routes } from 'react-router-dom'
import Router2 from './Router2'
import RutasPrivadas from './RutasPrivadas'
import RutasPublicas from './RutasPublicas'


function Router1() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={
            <RutasPublicas>
                <Login/>
            </RutasPublicas>
        }></Route>
        <Route path='/*' element={
            <RutasPrivadas>
                <Router2/>
            </RutasPrivadas>
        }></Route>
      </Routes>
    </div>
  )
}

export default Router1
