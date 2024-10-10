import './style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.tsx';
import { setupCounter } from './counter.ts';

function Home() {
  return(
    <App/>
  );
}