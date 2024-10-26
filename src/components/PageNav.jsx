import { NavLink } from "react-router-dom";
import logo from "../assets/GlobeTrotter.svg";

function PageNav() {
  return (
    <nav className="flex justify-between items-center py-3 bg-[#242424] font-bold text-xl">
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <ul className="flex w-1/2 justify-between p-5">
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
