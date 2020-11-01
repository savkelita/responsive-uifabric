import { initializeIcons } from '@uifabric/icons'
import 'office-ui-fabric-core/dist/css/fabric.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/default.css'
import { App } from './main'

initializeIcons()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
