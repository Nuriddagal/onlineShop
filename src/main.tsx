import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './redux/state.ts'
 
import './styles/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/onlineShop/'>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
