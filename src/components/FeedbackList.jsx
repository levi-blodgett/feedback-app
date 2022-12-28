// Import useContext and FeedbackContext so we can add to context
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
// Import animation for adding and removing feedback from library
import { motion, AnimatePresence } from "framer-motion";
// Import FeedbackItem so we can iterate over the list and display each item
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
