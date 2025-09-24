import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuthActions } from "../redux/postSlice";
import logo from "../images/wipro.jpeg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(isAuthActions.login());
    console.log("works");
  };
  return (
    <div>
      <nav className="bg-transparent text-white font-semibold md:font-semibold p-3 m-auto md:text-sm">
        <div className="md:flex md:justify-between flex justify-between">
          <div>
            <img
              src={logo}
              alt="Logo"
              className="absolute z-10 w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] md:w-[80px] md:h-[80px] rounded-full object-cover"
            />
          </div>

          <div>
            <ul className="md:flex hidden space-x-10 cursor-pointer">
              <li className="hover:text-red-500">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-red-500">
                {" "}
                <Link to="/posts">All Posts</Link>
              </li>
              <li className="hover:text-red-500">
                <Link to="/create">Create Blog</Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h3 className="hover:text-green-400">
              <Link to="/login">Login</Link>
            </h3>
          </div>
          <div className="md:hidden text-white font-semibold text-xl">
            <button onClick={handleClick}>{"\u2261"}</button>
          </div>
        </div>
        <div className="">
          {isOpen && (
            <div className="md:hidden mt-2 space-y-2 text-right">
              <ul>
                <li className="hover:text-red-500">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-red-500">
                  {" "}
                  <Link to="/posts">All Posts</Link>
                </li>
                <li className="hover:text-red-500">
                  <Link to="/create">Create Blog</Link>
                </li>
                <li className="hover:text-red-500">
                  <Link to="/login" onClick={loginHandler}>
                    {isAuth ? "login" : "logout"}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
