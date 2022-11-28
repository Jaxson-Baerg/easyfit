import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import AllClassTypes from './components/AllClassTypes';

const App = () => {
  const [optionsActive, setOptionsActive] = useState(false);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllClassTypes/>}/>
      </Routes>
    </>
  );
};

export default App;
