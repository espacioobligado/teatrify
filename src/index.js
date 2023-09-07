import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Encuentra el elemento raíz de tu aplicación (por ejemplo, el elemento con id "root")
const appRoot = document.getElementById('root');

// Configura el elemento raíz para react-modal

const root = ReactDOM.createRoot(appRoot);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas medir el rendimiento en tu aplicación, puedes utilizar reportWebVitals
reportWebVitals();
