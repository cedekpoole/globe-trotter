import PropTypes from "prop-types";

Message.propTypes = {
  children: PropTypes.node.isRequired,
};

function Message({ children }) {
  return (
    <div className="text-2xl font-semibold text-center min-h-52 relative">
      {children}
      <img
        src="/globe-icon.svg"
        alt="Globe"
        className="absolute right-1 bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-auto animate-pulse"
      />
    </div>
  );
}

export default Message;
