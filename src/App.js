import { Routes, Route } from "react-router-dom";
import React from 'react';
import "./App.css";
import Header from './components/Header';
import Info from "./components/Info";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route index element={<Info />} />
          <Route path="/brandon-profile" element={<Info />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
