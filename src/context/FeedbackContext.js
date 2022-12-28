import { createContext, useState } from 'react'

// Create context
export const FeedbackContext = createContext()

// Create provider so we can wrap everything in App.js in it
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])

    return <FeedbackContext.Provider value={{
        feedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext