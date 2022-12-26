// Import Components & useState
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
// import FeedbackItem from './components/FeedbackItem'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'

// Create main app using function, not class
function App() {
    // Init state
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Return either a div or a fragment with nested html elements
    return (
        <>
            <Header />
            {/* className, 'class' is protected */}
            <div className='container'>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

// Export component so it can be used in index.js
export default App