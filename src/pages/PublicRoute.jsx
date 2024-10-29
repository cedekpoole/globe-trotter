import PageNav from "../components/PageNav";
import PropTypes from "prop-types";

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function PublicRoute({ children }) {
  return (
    <>
      <PageNav />
      {children}
    </>
  );
}

export default PublicRoute;
