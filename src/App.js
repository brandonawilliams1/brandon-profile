import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from './components/Header'
// import React from 'react';

import Info from "./components/Info";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <>
      <Header />
        <Routes>
          <Route index element={<Info />} />
          <Route path="/brandon-profile" element={<Info />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
