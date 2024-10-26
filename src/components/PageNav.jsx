import { Link } from "react-router-dom";

function PageNav() {
  return (
    <nav className="flex justify-between items-center py-3">
      <h1 className="text-3xl">GlobeTrotter</h1>
      <ul className="flex w-1/2 justify-between p-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
