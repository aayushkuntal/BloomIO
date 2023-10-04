import React from 'react';
import './App.css';
import Auth from './pages/Auth/Auth';
import { Routes, Route, Navigate } from 'react-router-dom';
import Chat from './pages/Chat/Chat';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.auth.authData);

  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
        <Route path="/signin" element={user ? <Navigate to="/chat" /> : <Auth />} />
        <Route path="/signup" element={user ? <Navigate to="/chat" /> : <Auth isSignInPage={false} />} />
        <Route path="/chat" element={user ? <Chat /> : <Navigate to="/signin" />} />
      </Routes>
    </div>
  );
};

export default App;
