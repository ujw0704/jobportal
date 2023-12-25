import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <nav>
        <Link to="/">
          <span>Nippon</span>
          <hr />
          <span>Career</span>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Login">Login</Link>
          </li>

          <li>
            <Link to="/about">About-us</Link>
          </li>

          <li>
            <Link to="/contact">Contact-us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
