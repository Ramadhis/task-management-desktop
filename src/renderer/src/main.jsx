// import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashbo from './pages/Dashbo'
import Usermanagement from './pages/Usermanagement'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashbo />}></Route>
          <Route path="/user-management" element={<Usermanagement />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
