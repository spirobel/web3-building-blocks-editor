import React, { useState, useEffect } from 'react'
import {
  Outlet,
  ReactLocation,
  Router,
  Navigate,
} from '@tanstack/react-location'
import 'antd/dist/antd.css'
import { useSelector } from 'react-redux'
import Login from './editor-ui/Login'
import { selectCurrentUser } from './entry-point/boring-background-plumbing/current-user-slice'
import { PageBuilder } from './editor-ui/PageBuilder'
import { CategoryCreator } from './editor-ui/CategoryCreator'

const location = new ReactLocation()
function App() {
  // the components that need a menu should be wrapped in the MenuWrapper.tsx component
  const currentUser = useSelector(selectCurrentUser)
  const [waitedAbit, setWaitedAbit] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setWaitedAbit(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Router
      location={location}
      routes={[
        { path: '/', element: <PageBuilder /> },
        { path: '/categories', element: <CategoryCreator /> },
        //    { path: '/pages/pagebuilder', element: <PageBuilder /> },
        { path: '/login', element: <Login /> },
      ]}
    >
      <Outlet />
      {currentUser && <Navigate to="./" />}
      {!currentUser && waitedAbit && <Navigate to="./login" />}
    </Router>
  )
}

export default App
