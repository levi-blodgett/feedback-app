// Import Components & useState
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'

// Create main app using function, not class
function App() {
    // Init state
    const [feedback, setFeedback] = useState(FeedbackData)
    // Return either a div or a fragment with nested html elements
    return (
        <>
            <Header />
            {/* className, 'class' is protected */}
            <div className='container'>
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )
}

// Export component so it can be used in index.js
export default App