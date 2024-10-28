import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  matchPath,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import PageNav from "./components/PageNav";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

const protectedRoutes = ["/app", "/app/cities", "/app/countries", "/app/form"];
const dynamicProtectedRoutes = ["/app/cities/:id"];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useLocation can now safely be used here because App is wrapped by BrowserRouter
  const location = useLocation();
  const isProtectedRoute =
    protectedRoutes.includes(location.pathname) ||
    dynamicProtectedRoutes.some((route) => matchPath(route, location.pathname));

  return (
    <div className="container mx-auto min-h-screen font-raleway">
      {/* Render PageNav if not on a protected route */}
      {!isProtectedRoute && <PageNav />}

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout isLoggedIn={isLoggedIn} />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList />} />
          <Route path="cities/:id" element={<City />} />
          <Route path="countries" element={<CountriesList />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default function RootApp() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CitiesProvider>
  );
}
