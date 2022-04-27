import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import App from './App';
import { ToDoProvider } from './js/ToDoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToDoProvider>
    <App />
  </ToDoProvider>
);
