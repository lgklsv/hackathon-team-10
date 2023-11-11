import { Route, Routes } from 'react-router-dom'

import RootPage from '@/pages/root'
import { PATHS } from '@/shared/lib'

export default function Routing() {
  return (
    <Routes>
      <Route path={PATHS.root} element={<RootPage />} />
      <Route path={PATHS.test} element={<div>another page</div>} />
      <Route path={PATHS.notFound} element={<div>404</div>} />
    </Routes>
  )
}
