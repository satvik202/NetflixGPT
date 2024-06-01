import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './Body.jsx'
import './index.css'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
    <Body />
    </Provider>
  </React.StrictMode>,
)
