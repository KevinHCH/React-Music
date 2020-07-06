import React from "react";
import { Link } from "wouter";
import "./style.css"
const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
          <Link href="/" >
            Home
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
