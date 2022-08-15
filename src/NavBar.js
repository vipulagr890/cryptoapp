import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="" className="site-title">
          CryptoFind
        </Link>
        <ul>
          <li>
            <Link to="./Home">Home</Link>
          </li>
          <li>
            <Link to="./Exchanges">Exchanges</Link>
          </li>
          <li>
            <Link to="./About">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
