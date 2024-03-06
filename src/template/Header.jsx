import React from "react";
import { Link } from "react-router-dom";
import { userData } from "../context/userContext";

const Header = () => {
  const { count } = userData();
  return (
    <>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              Home {count}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/services"}>
              Service's
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/contact"}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/user/1"}>
              User 1
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
