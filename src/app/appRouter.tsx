import { createBrowserRouter, Outlet } from 'react-router-dom'

import RootPage from '@/pages/root'
import { PATHS } from '@/shared/lib'

const appRouter = createBrowserRouter([
  {
    element: (
      <div>
        layout maybe <Outlet />
      </div>
    ),
    errorElement: <div>404</div>,
    children: [
      {
        path: PATHS.root,
        element: <RootPage />
      },
      {
        path: PATHS.test,
        element: <div>another page</div>
      },
      {
        path: PATHS.notFound,
        element: <div>404 NOT FOUND</div>
      }
    ]
  }
])

export default appRouter
