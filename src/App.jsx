import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Tasks from './pages/Tasks'
import Notification from './pages/Notification'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/tasks' element={<Tasks/>} />
            <Route path='/home' element={<Notification/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
