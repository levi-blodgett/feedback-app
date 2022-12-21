// If you don't use JSX, import react
// import React from 'react'

// If we didn't use JSX, which is not scalable
// function App() {
//     // If we didn't use JSX, this is how it would look
//     return React.createElement(
//         'div',
//         { className: 'container' },
//         React.createElement('h1'),
//         [],
//         'My App'
//     )
// }

// Create component using function, not class
function App() {
    // Can set variables, create other functions inside of this function
    // Usually if you have data like this, it would be a component and be part
    // of your state, and this is  NOT how you set state in react.
    // In functional components there is a hook you use called 'use state'
    // which we will get to later
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        { id: 1, text: 'Comment one' },
        { id: 2, text: 'Comment two' },
        { id: 3, text: 'Comment three' }
    ]
    // Return either a div or a fragment with nested html elements
    return (
        // Have to use className instead of class because 'class' is protected
        <div className='container'>
            {/* Can use methods or anything for these */}
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            {Math.random() * (5 + 5)}

            <div className='comments'>
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {/* Use map() to iterate and make each one a unique li */}
                    {comments.map((comment, id) => (
                        /* Each one must have unique key */
                        <li key={id}>
                            {comment.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

// Export component so it can be used in index.js
export default App