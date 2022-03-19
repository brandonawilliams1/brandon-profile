import './App.css';
import React from 'react';
import { NavLink, Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Section from './components/Section';
import Info from './components/Info';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Works from './components/Works';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        
          <Route path='/' element={<Info/>}/>
          <Route path='/Works' element={<Works />} />
        </Routes>  
      <Footer />

    </div>
  );
}

export default App;
