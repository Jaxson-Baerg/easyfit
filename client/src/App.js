import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';
import Account from './components/Account';
import Login from './components/Login';
import Purchase from './components/Purchase';
import Register from './components/Register';

const App = () => {
  const [admin, setAdmin] = useState(false);

  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/admin/*' element={admin ? <Admin/> : <AdminLogin admin={admin} setAdmin={setAdmin}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/purchase' element={<Purchase/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
