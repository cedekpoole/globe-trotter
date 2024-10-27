import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import AppNav from "./AppNav";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-1/3 p-6 flex flex-col justify-between">
      <div className="space-y-20">
        <Logo />
        <div className="flex flex-col space-y-6">
          <AppNav />
          <Outlet />
        </div>
      </div>
      <footer className="self-end">
        <p>&copy; Copyright {new Date().getFullYear()} by GlobeTrotter Inc.</p>
      </footer>
    </aside>
  );
}
