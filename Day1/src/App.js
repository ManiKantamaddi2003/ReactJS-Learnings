import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Pagenotfound from './Pagenotfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Ensure all paths are in lowercase */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard/:name/:age" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Pagenotfound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
