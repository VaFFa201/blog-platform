import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import store from './stores/store'
import App from './App'

import 'antd/dist/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
