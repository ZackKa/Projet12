import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './index.css';
import Coming from './pages/Coming'
import Error from './pages/Error'
import Profil from './pages/Profil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Profil/:id" element={<Profil />} />
        <Route path='/Coming' element={<Coming />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);