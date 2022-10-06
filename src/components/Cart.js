import React from "react";
import "../Styles/Cart.css";
import CartContent from "./CartContent";
import { Link } from "react-router-dom";
import { useCartContext } from "../store/context/CartContext";
import PageRoute from "./PageRoute";

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <section className="emptyCart">
        <h2 className="cartEmptyBar">Your cart is empty.</h2>

        <Link to="/products" className="cartBackButton">
          Fill it
        </Link>
      </section>
    );
  }

  return (
    <section className="mainCart">
      <PageRoute title="cart" />

      <div className="mainCartContentBar">
        <CartContent />
      </div>
    </section>
  );
};

export default Cart;
