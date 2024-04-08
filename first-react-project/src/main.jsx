import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { Example } from "./Example";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  
  <React.StrictMode>
      <>
      <Example/>
      <div>
      <App />
      </div>
   
     
    </>
  </React.StrictMode>,
)
