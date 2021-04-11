import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <div className="logo">
          <img src={logo} />
          <h4>TralvelWiser</h4>
        </div>
        <div className="links">
          <ul>
            <Link to="/">Find Destination</Link>
            <Link to="/">Plan Your Trip</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Community</Link>
          </ul>
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
