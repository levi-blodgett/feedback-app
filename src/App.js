// Import Components & useState
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import { FeedbackProvider } from './context/FeedbackContext'

// Create main app using function, not class
function App() {
    // Init state
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback, id) => {
        // Add random ID to new feedback object
        newFeedback.id = Math.floor(Math.random() * 100000 * Math.random());
        // Create new array by adding newFeedback and then using spread operator over existing array
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Return either a div or a fragment with nested html elements
    return (
        <FeedbackProvider>
            <Header />
            {/* className, 'class' is protected */}
            <div className='container'>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </FeedbackProvider >
    )
}

// Export component so it can be used in index.js
export default App