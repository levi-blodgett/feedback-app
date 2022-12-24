// Import prop-types so we can define type for variables
import PropTypes from "prop-types";

// Component to simplify creating card divs
// Reverse is conditional on if passed then it adds the class
function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

Card.defaultProps = {
  reverse: true,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
