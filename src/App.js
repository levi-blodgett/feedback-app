// Import header
import Header from './components/Header'

// Create component using function, not class
function App() {
    // Return either a div or a fragment with nested html elements
    return (
        <>
            <Header />
            {/* className, 'class' is protected */}
            <div className='container'>
                <h1>My app</h1>
            </div>
        </>
    )
}

// Export component so it can be used in index.js
export default App