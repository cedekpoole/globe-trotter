import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav className="flex justify-between items-center py-3">
      <h1 className="text-3xl">GlobeTrotter</h1>
      <ul className="flex w-1/2 justify-between p-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
