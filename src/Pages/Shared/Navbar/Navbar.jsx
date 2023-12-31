import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip, Tooltip } from "react-tooltip";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, setLoading, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    setLoading(true);
    LogOut();
  };

  return (
    <nav>
      <div className="navbar bg-purple-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/blog"> Blog </Link>
              </li>
              <li>
                <Link to="/alltoys"> All Toys </Link>
              </li>
              <li>
                <Link to="/login"> Login </Link>
              </li>
              <li>
                <Link to="/register"> Register </Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <button className="btn text-purple-950 hover:text-white font-extrabold bg-purple-400 hover:bg-purple-800 btn-ghost normal-case text-xl">
              Warrior Kids
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold px-1">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/blog"> Blog </Link>
            </li>
            <li>
              <Link to="/alltoys"> All Toys </Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link to="/addtoys"> Add Toys </Link>
                </li>
                <li>
                  <Link to="/mytoy"> My Toys </Link>
                </li>
                <li>
                  <Link to="/register">
                    <button onClick={handleLogOut}>Log Out</button>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login"> Login </Link>
              </li>
            )}

            <li>
              <Link to="/register"> Register </Link>
            </li>
            {user && (
              <>
                <li>
                  <h6 id="userName" className="font-bold text-purple-800">
                    {user.displayName}
                  </h6>
                </li>
                <li>
                  <div className="w-20">
                    <img
                      id="userPhoto"
                      className="rounded-full"
                      src={user.photoURL}
                      alt="profile_image"
                    />
                    <Tooltip
                      anchorSelect="#userPhoto"
                      place="right"
                      content={user.displayName}
                    ></Tooltip>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </nav>
  );
};

export default Navbar;
