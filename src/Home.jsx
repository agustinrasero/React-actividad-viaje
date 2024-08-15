import React from 'react'
import Router1 from './components/router/Router1'
import Provider from './components/context/Provider'
function Home() {
  return (
    <div>
      <Provider>
        <Router1/>
      </Provider>
    </div>
  )
}

export default Home
