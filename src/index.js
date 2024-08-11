import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './1.MainComponent/App';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>
);

