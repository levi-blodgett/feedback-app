// Import Pages, Components, react-router, & useState
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import AboutPage from './pages/AboutPage'

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
        <Router>
            <Routes>
                <Route exact path='/' element={
                    <>
                        <Header />
                        <FeedbackForm handleAdd={addFeedback} />
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                    </>
                } />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </Router>
    )
}

// Export component so it can be used in index.js
export default App