// Generate boilerplate with ES7 snippets extension: '_rfce'
// Import prop-types with ES7 snippets extension: 'impt'
// The '_' before 'rfce' is used to generate boilerplate without importing react

// Import prop-types so we can define type for variables
import PropTypes from "prop-types";

// Define header
// Can use 'props' & props.text or { text } & {text}
function Header({ text, bgColor, textColor }) {
  // Can use a var to edit header styles directly in jsx
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    // Add to header element: style={headerStyles}
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Define default property value if not passed
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0, 0, 0, 0.4)",
  textColor: "#ff6a95",
};

// Define type of variables
// Can add '.isRequired' to the end if you want it to always be defined
Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Header;
