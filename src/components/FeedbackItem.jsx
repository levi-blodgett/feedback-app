// Import state so we can maintain the state across app
import { useState } from "react";

// Main component
function FeedbackItem() {
  // Init states
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of a feedback item");

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

// Export component
export default FeedbackItem;
