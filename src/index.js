import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assurez-vous que le fichier App.js existe également dans src
import './index.css'; // Importez un fichier CSS si nécessaire

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
