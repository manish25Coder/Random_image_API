import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { AppOne } from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppOne/>
  <App/>
  
</BrowserRouter>
)
