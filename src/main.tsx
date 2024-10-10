import './style.css'
import React from 'react';
import App from './app';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('app');
if (rootElement) {
    const root = createRoot(rootElement); 
    root.render(<App />);
} else {
  console.error("Elemento co  ID 'app' não encontrado. :(");
}

// ReactDOM.render(<App />, document.getElementById('app'));