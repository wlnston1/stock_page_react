import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import StockDetail from './components/StockDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className='header'>
          <h2> React Stock Page </h2>
          <nav>
            <Link className='navigation-link' to="/">Home</Link>
            <Link className='navigation-link' to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="stocks/:id" element={<StockDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
