import { Route, Routes } from 'react-router-dom'

import MazePage from '@/pages/maze'
import { PATHS } from '@/shared/lib'

import { Layout } from './layouts'

export default function Routing() {
  return (
    <Routes>
      <Route path={PATHS.root} element={<Layout />}>
        <Route path="" element={<MazePage />} />
        <Route path={PATHS.notFound} element={<div>404</div>} />
      </Route>
    </Routes>
  )
}
