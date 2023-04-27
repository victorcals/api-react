

import React from 'react';
import ReactDOM from 'react-dom/client';
import './glabal.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Details from './pages/Details/details';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register/register';


function App() {
  return (
    <Router>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">
              <Link className="nav-item nav-link" to='/'>Home</Link>
              <Link className="nav-item nav-link" to='/planos'>Planos</Link>
              <Link className="nav-item nav-link" to='/about'>Sobre o Site</Link>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/registro' element={<Register />} />
      </Routes>
    </Router >
  );
}
export default App;
