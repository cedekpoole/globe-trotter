import { useState } from "react";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty12345");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <main className="mt-5 flex items-center justify-center min-h-[calc(100vh-8rem)] bg-[url('/login.jpg')] bg-cover bg-center bg-no-repeat rounded-lg">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-[#242424] bg-opacity-80"
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

        <Button type="submit">Log in</Button>
      </form>
    </main>
  );
}
