import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/GlobeTrotter.svg" alt="GlobeTrotter" />
    </Link>
  );
}

export default Logo;
