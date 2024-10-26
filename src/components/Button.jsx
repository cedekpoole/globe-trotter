import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

function Button({ children, type = "button" }) {
  return (
    <button
      type={type}
      className="px-6 py-2 rounded-full bg-[#A6714D] text-[#F3E9DC] text-lg font-medium hover:bg-[#91603C] transition-colors duration-300 ease-in-out shadow-md"
    >
      {children}
    </button>
  );
}

export default Button;
