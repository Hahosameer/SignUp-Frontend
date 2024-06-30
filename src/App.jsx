import { useState } from 'react'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { useSelector } from "react-redux"
function App() {
  const user = useSelector(state => state.user);
  console.log(user, "user");
  return (
    <>
       <Router>
       <Routes>
       <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
       <Route path='/login' element={
            user ? <Navigate to='/' /> : <Login />
          } />
           <Route path='/register' element={
            user ? <Navigate to='/' /> : <Register />
          } />
       </Routes>
       </Router>
    </>
  )
}

export default App
