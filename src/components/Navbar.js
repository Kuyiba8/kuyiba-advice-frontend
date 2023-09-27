import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAthContext";
import "../components/Navbar.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="navbar-container w-full">
      <div className="contain">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button
                className="m-1 border p-1.5 bg-white text-green-500 hover:bg-green-400 rounded-lg hover:text-white"
                onClick={handleClick}
              >
                Log out
              </button>
            </div>
          )}
          {!user && (
            <div>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
