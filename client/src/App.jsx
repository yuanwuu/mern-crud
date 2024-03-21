import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Login from './pages/users/Login'
import Register from './pages/users/Register'
import Dashboard from './pages/users/Dashboard'
import Home from './pages/posts/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App



