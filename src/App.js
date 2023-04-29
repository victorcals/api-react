

import React from 'react';
import ReactDOM from 'react-dom/client';
import './glabal.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Details from './pages/Details/details';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register/register';
import Nonexistent from './pages/NotFound/nonexistent';
import Navbar from './components/Headers/navbar';
import Logar from './pages/Login/logar';


function App() {
  return (


    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/logar' element={<Logar />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/cadastrado' element={<Register />} />
        <Route path='/*' element={<div> pagina não existe</div>} />

      </Routes>
    </Router >
  );
}
export default App;
