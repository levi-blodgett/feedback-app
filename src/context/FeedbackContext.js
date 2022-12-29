import { createContext, useState } from 'react'

// Create context
export const FeedbackContext = createContext()

// Create provider so we can wrap everything in App.js in it
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is feedback item 2',
            rating: 1
        },
        {
            id: 3,
            text: 'This item is feedback item 3',
            rating: 4
        },
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    // Add feedback
    const addFeedback = (newFeedback) => {
        // Add random ID to new feedback object
        newFeedback.id = Math.floor(Math.random() * 100000 * Math.random());
        // Create new array by adding newFeedback and then using spread operator over existing array
        setFeedback([newFeedback, ...feedback]);
    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Update feedback item
    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updatedItem } : item));
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        addFeedback,
        editFeedback,
        deleteFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext