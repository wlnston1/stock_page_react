import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import StockDetail from './components/StockDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> React Stock Page </h2>
      </header>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="stocks/:id" element={<StockDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
