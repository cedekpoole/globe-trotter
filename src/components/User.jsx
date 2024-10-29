import { useAuth } from "../contexts/AuthContext";

function User() {
  const { user } = useAuth();
  function handleClick() {}

  return (
    <div className="">
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
