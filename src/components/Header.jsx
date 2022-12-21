// Generate boilerplate with ES7 snippets extension: '_rfce'
// Import prop-types with ES7 snippets extension: 'impt'
// The '_' before 'rfce' is used to generate boilerplate without importing react

// Import prop-types so we can define type for variables
import PropTypes from "prop-types";

// Define header
// Can use 'props' & props.text or { text } & {text}
function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Define default property value if not passed
Header.defaultProps = {
  text: "Feedback UI",
};

// Define type of variables
// Can add '.isRequired' to the end
Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
