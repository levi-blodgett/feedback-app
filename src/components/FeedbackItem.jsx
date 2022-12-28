// Import useContext and FeedbackContext so we can add to context
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
// Import fontawesome X icon from react-icons
import { FaTimes } from "react-icons/fa";
// Import prop-types so we can define type for variables
import PropTypes from "prop-types";
// Import card div component
import Card from "./shared/Card";

// Main component
function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

// Export component
export default FeedbackItem;
