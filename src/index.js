import React from 'react';
import ReactDOM from 'react-dom/client';
import './glabal.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Details from './pages/Details/details';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <BrowserRouter>

    <Routes>

      <Route path='/' element={Home} />
      <Route path='/details/:id' element={Details} />

    </Routes>



    <Home />
  </BrowserRouter>
  // <React.StrictMode>

  //   <Home />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
