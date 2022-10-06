import React from "react";
import "../Styles/Cart.css";
import { Link } from "react-router-dom";
import CartTotals from "./CartTotals";
import CartColums from "./CartColums";
import CartItem from "./CartItem";
import { useCartContext } from "../store/context/CartContext";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <div className="cartItemConten">
      <CartColums />

      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <div className="linkCartContent">
        <Link to="/products" className="linkContent">
          continue Shopping
        </Link>

        <button type="button" onClick={clearCart}>
          Clear Shopping Cart
        </button>
      </div>

      <CartTotals />
    </div>
  );
};

export default CartContent;
