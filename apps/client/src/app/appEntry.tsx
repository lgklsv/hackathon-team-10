import '@/shared/css/base.css'

import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { appStore } from './appStore'
import Routing from './routing'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={appStore}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </ReduxProvider>
)
