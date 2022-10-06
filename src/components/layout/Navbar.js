import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathName = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => navigate("/")}>
          <BiHomeSmile
            fill={pathName("/") ? "#2c2c2c" : "#8f8f8f"}
            className="Icon"
          />

          <p className={pathName("/") ? "active" : "not-active"}>Home</p>
        </li>

        <li onClick={() => navigate("/products")}>
          <MdOutlineExplore
            className="Icon  explore"
            fill={pathName("/products") ? "#2c2c2c" : "#8f8f8f"}
          />
          <p className={pathName("/products") ? "active" : "not-active"}>
            Products
          </p>
        </li>

        <li onClick={() => navigate("/about")}>
          <SiAboutdotme
            className="Icon"
            fill={pathName("/about") ? "#2c2c2c" : "#8f8f8f"}
          />
          <p className={pathName("/about") ? "active" : "not-active"}>About</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
