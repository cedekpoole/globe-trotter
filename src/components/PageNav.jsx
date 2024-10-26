import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className="flex justify-between items-center py-5 bg-[#242424] font-medium text-lg">
      <Logo />
      <ul className="flex w-1/2 justify-between items-center">
        <li className="hover:text-[#E2B07E]">
          <NavLink to="/product">PRODUCT</NavLink>
        </li>
        <li className="hover:text-[#E2B07E]">
          <NavLink to="/pricing">PRICING</NavLink>
        </li>
        <NavLink to="/login">
          <li className="px-6 py-2 rounded-full bg-[#A6714D] text-[#F3E9DC] hover:bg-[#91603C] transition-colors duration-300 ease-in-out shadow-md">
            LOGIN
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default PageNav;
