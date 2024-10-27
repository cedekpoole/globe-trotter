import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

AppNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  roundedX: PropTypes.string,
};

function AppNavLink({ children, path, roundedX = "" }) {
  const location = useLocation();
  const isActive =
    (location.pathname === "/app" && path === "cities") ||
    location.pathname === `/app/${path}`;

  return (
    <NavLink
      to={path}
      className={`px-4 py-1 text-sm shadow-lg border border-[#1d1c1c] ${roundedX} ${
        isActive ? "bg-[#1d1c1c]" : "bg-[#302e2e]"
      }`}
    >
      <li>{children}</li>
    </NavLink>
  );
}

export default AppNavLink;
