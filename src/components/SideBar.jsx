import Logo from "./Logo";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-1/3 p-6 flex flex-col justify-between space-y-5">
      <Logo />

      <p>List of cities</p>
      <footer>
        <p>&copy; Copyright {new Date().getFullYear()} by GlobeTrotter Inc.</p>
      </footer>
    </aside>
  );
}
