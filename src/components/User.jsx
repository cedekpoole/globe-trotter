import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className="absolute top-10 right-10 p-2 z-[1000] flex items-center text-xs gap-2 bg-[#242424] rounded-lg shadow-lg">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-12 h-auto rounded-full"
      />
      <span>Welcome, {user.name}</span>
      <button
        className="p-2 bg-[#302e2e] shadow-md transition duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-700 rounded"
        onClick={handleClick}
      >
        Log out
      </button>
    </div>
  );
}

export default User;
