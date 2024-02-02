import React from 'react'
import { path } from '../../utils/constants'
import Layout from '../Layout/Layout'
import Index from '../../pages/Index'
import { Route, Routes, useLocation } from 'react-router-dom'
import Tabata from '../../pages/Tabata/Tabata'
import User from '../../pages/User/User'
import NotFound from '../../pages/NotFound/NotFound'
import Help from '../../pages/Help/Help'
import Meta from '../Meta/Meta'
import Create from '../../pages/Tabata/Create'
import Start from '../../pages/Tabata/Start'

function App() {
  const location = useLocation()

  return (
    <Layout>
      <Routes>
        <Route
          index
          path={path.index.url}
          element={<Meta element={<Index />} />}
        />
        <Route
          path={path.tabata_list.url}
          element={<Meta element={<Tabata />} />}
        />
        <Route
          path={path.tabata_start.url}
          element={<Meta element={<Start />} />}
        />
        <Route
          path={path.tabata_create.url}
          element={<Meta element={<Create />} />}
        />
        <Route
          path={path.user.url}
          element={<Meta element={<User />} />}
        />
        <Route
          path={path.help.url}
          element={<Meta element={<Help />} />}
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
