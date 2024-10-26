import { useState } from "react";
import Button from "../components/Button";
import PropTypes from "prop-types";

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty12345");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <main className="mt-5 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-lg p-8 space-y-6 rounded-lg shadow-lg bg-[#302e2e]"
      >
        <h2 className="text-2xl font-bold text-center font-montserrat">
          Log in to GlobeTrotter
        </h2>

        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <Button type="submit" link={"/app"}>
          Log in
        </Button>
      </form>
    </main>
  );
}
