import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './index.css';
import Coming from './pages/Coming'
import Error from './pages/Error'
import Profil from './pages/Profil';

// Création du point d'ancrage de l'application React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* StrictMode aide à détecter les problèmes dans l'application pendant le développement */}
    <Router> {/* Composant Router qui permet de gérer la navigation dans l'application */}
      <Routes> {/* Composant Routes qui permet de définir toutes les routes de l'application */}
        <Route path="/Profil/:id" element={<Profil />} />
        <Route path='/Coming' element={<Coming />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);