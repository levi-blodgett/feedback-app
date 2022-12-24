// Import header
import Header from './components/Header'
// Import Feedback Item
import FeedbackItem from './components/FeedbackItem'

// Create component using function, not class
function App() {
    // Return either a div or a fragment with nested html elements
    return (
        <>
            <Header />
            {/* className, 'class' is protected */}
            <div className='container'>
                <FeedbackItem />
            </div>
        </>
    )
}

// Export component so it can be used in index.js
export default App