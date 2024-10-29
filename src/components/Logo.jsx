import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Logo() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <Link to="/app">
      <img src="/GlobeTrotter.svg" alt="GlobeTrotter" />
    </Link>
  ) : (
    <Link to="/">
      <img src="/GlobeTrotter.svg" alt="GlobeTrotter" />
    </Link>
  );
}

export default Logo;
