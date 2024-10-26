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

ProtectedRoutes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

function ProtectedRoutes({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();

  useEffect(() => {
    // List of protected routes that require the user to be logged in
    const protectedRoutes = ["/app"];

    // Check if the current path is a protected route
    if (!protectedRoutes.includes(location.pathname)) {
      // Set isLoggedIn to false when navigating away from protected routes
      setIsLoggedIn(false);
    }
  }, [location.pathname, setIsLoggedIn]);

  return (
    <>
      {!isLoggedIn && <PageNav />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout isLoggedIn={isLoggedIn} />} />
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
