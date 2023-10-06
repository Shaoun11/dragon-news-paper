import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route.jsx'
import Authrovider from './Authrovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Authrovider>  <RouterProvider router={Route}></RouterProvider></Authrovider>
  </React.StrictMode>,
)
