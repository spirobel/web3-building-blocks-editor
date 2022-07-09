import React from 'react'
import {
  Outlet,
  ReactLocation,
  Router,
  Navigate,
} from '@tanstack/react-location'
import 'antd/dist/antd.css'
import Login from './editor-ui/Login'

const location = new ReactLocation()
function App() {
  // the components that need a menu should be wrapped in the MenuWrapper.tsx component
  return (
    <Router
      location={location}
      routes={[{ path: '/login', element: <Login /> }]}
    >
      <Outlet />
      <Navigate to="./login" />
    </Router>
  )
}

export default App
