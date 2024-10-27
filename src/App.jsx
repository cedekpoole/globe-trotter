import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import PageNav from "./components/PageNav";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";

const protectedRoutes = ["/app", "/app/cities", "/app/countries", "/app/form"];
const BASE_URL = "http://localhost:8000/";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useLocation can now safely be used here because App is wrapped by BrowserRouter
  const location = useLocation();
  const isProtectedRoute = protectedRoutes.includes(location.pathname);

  useEffect(() => {
    async function fetchCities() {
      try {
        const res = await fetch(`${BASE_URL}cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <div className="container mx-auto min-h-screen font-raleway">
      {/* Render PageNav if not on a protected route */}
      {!isProtectedRoute && <PageNav />}

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout isLoggedIn={isLoggedIn} />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<h1>List of Countries</h1>} />
          <Route path="form" element={<h1>Form</h1>} />
        </Route>
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
