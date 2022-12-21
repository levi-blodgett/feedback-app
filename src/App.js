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

// Export component so it can be used in index.js
export default App