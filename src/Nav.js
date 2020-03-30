import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <Link to="/" style={navStyle}>
        <h3>logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="./Shop" style={navStyle}>
          <li>shop</li>
        </Link>
        <Link to="./About" style={navStyle}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
