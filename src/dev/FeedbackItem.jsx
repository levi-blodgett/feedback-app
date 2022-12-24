// Import state so we can maintain the state across app
import { useState } from "react";

// Main component
function FeedbackItem() {
  // Init states
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of a feedback item");

  // Set state on click via a function so we can pass in previous state if desired
  const handleClick = () => {
    setRating((prev) => {
      return prev + 1;
    });
  };
  // Set state on click by directly passing in
  //   const handleClick = () => {
  //     setRating(10);
  //   };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      {/* Button for changing state at component level */}
      <button onClick={handleClick}>Increase Rating</button>
    </div>
  );
}

// Export component
export default FeedbackItem;
