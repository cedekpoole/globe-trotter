import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

BackBtn.propTypes = {
  children: PropTypes.node.isRequired,
};

function BackBtn({ children }) {
  const navigate = useNavigate();

  return (
    <button
      className="border"
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
