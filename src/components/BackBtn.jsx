import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

BackBtn.propTypes = {
  children: PropTypes.node.isRequired,
};

function BackBtn({ children }) {
  const navigate = useNavigate();

  return (
    <button
      className="border border-gray-300 px-2 py-1 rounded transition duration-200 ease-in-out hover:bg-gray-200 hover:border-gray-400 hover:text-gray-700"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      {children}
    </button>
  );
}

export default BackBtn;
