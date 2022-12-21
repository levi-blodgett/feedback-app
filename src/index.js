// React dependency
import React from 'react';
// Allows React to interact with DOM in browser
import ReactDOM from 'react-dom/client';
// Import main css
import './index.css';
// Import App component
import App from './App';

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Insert app component inside of root
root.render(
    // Use strict mode for additional checks
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

