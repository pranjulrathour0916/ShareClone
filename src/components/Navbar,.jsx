import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-transparent text-white font-semibold md:font-semibold p-3 m-auto md:text-sm">
        <div className="md:flex md:justify-between flex justify-between">
          <div>
            <h3>Logo</h3>
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
                <li className="hover:text-red-500"><Link to="/login">Login</Link></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
