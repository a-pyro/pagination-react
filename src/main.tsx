import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log(
  "%cA black belt is a white belt that didn't quit.",
  'color: #fff; font-size: 20px; text-shadow: 1px 1px 1px #000; font-family: serif;'
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
