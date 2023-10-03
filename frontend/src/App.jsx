import React from 'react'
import './App.css'
import Auth from './pages/Auth/Auth'
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="blur" style ={{top:'-18%',right:'0'}}></div>
      <div className="blur" style ={{top:'36%',left:'-8rem'}}></div>

      <Routes>
        <Route path="/signin" element={<Auth />}/>
        <Route path="/signup" element={<Auth isSignInPage ={false} />} />
      </Routes>
    </div>
  )
}

export default App