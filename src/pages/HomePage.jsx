import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1 className="text-5xl">Home Page</h1>
      <Link to="/pricing">This is the pricing page</Link>
    </div>
  );
}

export default HomePage;
