import './App.css';
import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Info from './components/Info';
import Works from './components/Works';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Routes>
          <Route path='/' element={<Info />} />
          <Route path='/works' element={<Works />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>  

    </div>
  );
}

export default App;
