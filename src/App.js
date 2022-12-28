// Import Components
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import { FeedbackProvider } from './context/FeedbackContext'

// Create main app using function, not class
function App() {

    // Return either a div or a fragment with nested html elements
    return (
        <FeedbackProvider>
            <Header />
            {/* className, 'class' is protected */}
            <div className='container'>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
            </div>
        </FeedbackProvider >
    )
}

// Export component so it can be used in index.js
export default App