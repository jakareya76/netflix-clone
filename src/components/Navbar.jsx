import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to="/netflix-clone">
        <h1 className="text-red-600 uppercase font-bold text-4xl cursor-pointer">
          Netflix
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/netflix-clone/account">
            <button className="text-white pr-4">Account</button>
          </Link>

          <button
            className="bg-red-600 text-white px-6 py-2 rounded"
            onClick={handleLogOut}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 text-white px-6 py-2 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
