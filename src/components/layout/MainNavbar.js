import React from "react";
import "../../Styles/Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartContext } from "../../store/context/CartContext";
import { useUserContext } from "../../store/context/UserContext";

const MainNavbar = () => {
  const { totalItems } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">
            <h1>React Shop</h1>
          </Link>
        </li>

        <li className="cart-Icons">
          <p className="cart">
            <Link to="/cart">
              <span>Cart</span> <FaShoppingCart className="Icons" />
              <span className="cartValue">
                <p className="cartNumberTotal">{totalItems}</p>
              </span>
            </Link>
          </p>

          {!myUser && (
            <button className="login" onClick={loginWithRedirect}>
              <span>Login</span> <AiOutlineUserAdd className="Icons" />
            </button>
          )}

          {myUser && (
            <button
              className="login"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <span>Logout</span> <AiOutlineUserDelete className="Icons" />
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
