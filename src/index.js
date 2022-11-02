import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import { CarritoProvider } from './context/CarritoContext';
import App from '../src/components/App';
// import "./utils/bdd"
import "./utils/pruebas"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CarritoProvider>
        <App />
    </CarritoProvider>
);


