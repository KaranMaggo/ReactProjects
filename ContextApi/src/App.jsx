import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Navbar from './components/Navbar'
import UserContext from './Contexts/UserContext'


const App = () => {
  const [user, setUser] = useState({}); // Initialize user with a default value
  return (
   <>
  <UserContext.Provider value={{ id: "123", package: "premium", user, setUser }} >
   <BrowserRouter>
   <Navbar/>
   <Routes> 
    <Route path='/' element={<HomePage/>} />
    <Route path='/login' element={<Login/>} />
   </Routes>
   </BrowserRouter>
   </UserContext.Provider>
   </>
  )
}

export default App