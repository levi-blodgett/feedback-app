// Import prop-types so we can define type for variables
import PropTypes from "prop-types";

// Component to simplify creating buttons
// version is conditional on if passed then it adds the class
function Button({ children, version, type, isdisabled }) {
  return (
    <button
      type={type}
      isdisabled={isdisabled}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isdisabled: "false",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  // Received errors when it was a boolean and was camelCase in console log
  isdisabled: PropTypes.string,
};

export default Button;
