import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

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

        <Button link={"/login"}>LOG IN</Button>
      </ul>
    </nav>
  );
}

export default PageNav;
