import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import PageNav from "./components/PageNav";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PropTypes from "prop-types";
import CityList from "./components/CityList";

ProtectedRoutes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

const protectedRoutes = ["/app", "/app/cities", "/app/countries", "/app/form"];

function ProtectedRoutes({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is a protected route
    if (!protectedRoutes.includes(location.pathname) && !isLoggedIn) {
      // Set isLoggedIn to false when navigating away from protected routes
      setIsLoggedIn(false);
    }
  }, [location.pathname, isLoggedIn, setIsLoggedIn]);

  return (
    <>
      {!isLoggedIn && !protectedRoutes.includes(location.pathname) && (
        <PageNav />
      )}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout isLoggedIn={isLoggedIn} />}>
          <Route index element={<CityList />} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<h1>List of Countries</h1>} />
          <Route path="form" element={<h1>Form</h1>} />
        </Route>
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container mx-auto min-h-screen font-raleway">
      <BrowserRouter>
        <ProtectedRoutes
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
