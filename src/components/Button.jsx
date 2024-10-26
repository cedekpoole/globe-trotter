import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  link: PropTypes.string,
};

function Button({ children, type = "button", link = "/" }) {
  return (
    <Link to={link}>
      <button
        type={type}
        className="px-6 py-2 rounded-full bg-[#A6714D] text-[#F3E9DC] text-lg font-medium hover:bg-[#91603C] transition-colors duration-300 ease-in-out shadow-md"
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
