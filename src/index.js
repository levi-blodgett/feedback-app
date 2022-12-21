// React dependency
import React from 'react';
// Allows React to interact with DOM in browser
import ReactDOM from 'react-dom';
// Import main css
import './index.css';
// Import App component
import App from './App';

// Main app component to insert, and where to insert
ReactDOM.render(
    // Use strict mode for additional checks
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'))

