import { NavLink } from "react-router-dom";
import logo from "../assets/GlobeTrotter.svg";

function PageNav() {
  return (
    <nav className="flex justify-between items-center py-3 bg-[#242424]">
      <img src={logo} />
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
