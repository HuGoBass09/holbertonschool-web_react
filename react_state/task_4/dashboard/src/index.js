import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

// Vérifier et rendre l'application principale
const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        rootElement
    );
} else {
    console.error('Failed to find the root element');
}
