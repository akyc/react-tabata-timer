import React from 'react'
import { path } from '../../utils/constants'
import Layout from '../Layout/Layout'
import Index from '../../pages/Index'
import { Route, Routes, useLocation } from 'react-router-dom'
import Tabata from '../../pages/Tabata/Tabata'
import User from '../../pages/User/User'
import NotFound from '../../pages/NotFound/NotFound'
import Help from '../../pages/Help/Help'

function App() {
  const location = useLocation()

  return (
    <Layout>
      <Routes>
        <Route
          index
          path={path.index}
          element={<Index />}
        />
        <Route
          path={path.tabata}
          element={<Tabata />}
        />
        <Route
          path={path.user}
          element={<User />}
        />
        <Route
          path={path.help}
          element={<Help />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </Layout>
  )
}

export default App
