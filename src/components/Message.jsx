import PropTypes from "prop-types";

Message.propTypes = {
  children: PropTypes.node.isRequired,
};

function Message({ children }) {
  return <p className="text-2xl font-semibold text-center">{children}</p>;
}

export default Message;
