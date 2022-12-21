// Used to have to import react to use JSX, now you don't
// import React from 'react';

// Create component using function, not class
function App() {
    // Return either a div or a fragment with nested html elements
    return (
        // Have to use className instead of class because 'class' is protected
        <div className='container'>
            <h1>My app</h1>
            <p>Hello</p>
        </div>
    )
}

export default App