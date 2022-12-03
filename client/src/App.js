import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Cookies from 'universal-cookie';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';
import Account from './components/Account';
import Login from './components/Login';
import Purchase from './components/Purchase';
import RegisterAccount from './components/RegisterAccount';

const App = () => {
  const [admin, setAdmin] = useState(false);
  const cookies = new Cookies();

  const setCookieValue = (val) => {
    cookies.set('loggedIn', val, { path: "/", sameSite: "none" });
  };

  const logout = () => {
    cookies.remove('loggedIn', { path: "/" });
  };

  return (
    <>
      <Router>
      <NavBar loggedInId={cookies.get('loggedIn')} logout={logout} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/account' element={cookies.get('loggedIn') ? <Account/> : <Navigate to='/login' replace={true}/>}/>
          <Route path='/admin/*' element={admin ? <Admin/> : <AdminLogin admin={admin} setAdmin={setAdmin}/>}/>
          <Route path='/login/*' element={<Login setCookieValue={setCookieValue}/>}/>
          <Route path='/purchase' element={<Purchase/>}/>
          <Route path='/register-account' element={<RegisterAccount/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
