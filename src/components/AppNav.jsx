import AppNavLink from "./AppNavLink";

function AppNav() {
  return (
    <nav>
      <ul className="flex justify-center">
        <AppNavLink path="cities" roundedX={"rounded-l-lg"}>
          Cities
        </AppNavLink>
        <AppNavLink path="countries" roundedX={"rounded-r-lg"}>
          Countries
        </AppNavLink>
      </ul>
    </nav>
  );
}

export default AppNav;
