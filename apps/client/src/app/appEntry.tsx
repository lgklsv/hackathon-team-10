import '@/shared/css/base.css'

import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import appRouter from './appRouter'
// import { appStore, persistedStore } from './appStore'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <ReduxProvider store={appStore}>
  <RouterProvider router={appRouter} />
  // {/* </ReduxProvider> */}
)
