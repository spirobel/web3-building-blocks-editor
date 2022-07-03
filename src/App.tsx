import React from 'react'
import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import './App.css'

const location = new ReactLocation()
function App() {
  return (
    <Router
      location={location}
      routes={[{ path: '/login', element: <div>not logged in</div> }]}
    >
      <Outlet />
    </Router>
  )
}

export default App
