import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import store from './store/store.js'
import { Provider } from 'react-redux'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
