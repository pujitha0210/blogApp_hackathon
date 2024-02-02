import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/authContext";

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className='link' to="/">
          <h1 >Welcome to blog app</h1>
          </Link>
        </div>
        <div className="links">
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;