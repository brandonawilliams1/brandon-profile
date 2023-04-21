
import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Info from './components/Info';
import Footer from './components/Footer';
import Works from './components/Works';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        
          <Route path='/' element={<Info />} />
          <Route path='/works' element={<Works />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>  
      <Footer />

    </div>
  );
}

export default App;
