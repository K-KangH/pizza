import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/css/styles.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>
);
