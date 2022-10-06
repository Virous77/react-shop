import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../store/context/CartContext";
import CartButtons from "./CartButtons";
import "../Styles/Cart.css";

const CartItem = ({ id, image, name, price, amount, color }) => {
  const { removeCartItem, toggleCart } = useCartContext();

  const setPrice = (prices) => {
    return Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(prices / 100);
  };

  const increase = () => {
    toggleCart(id, "inc");
  };

  const decrease = () => {
    toggleCart(id, "dec");
  };

  return (
    <section className="cartItems">
      <div className="cartImg">
        <img src={image} alt={name} />

        <div className="cartProductInfo">
          <h4 className="itemName">{name}</h4>

          <p>
            Color :{" "}
            <span
              className="cartColor"
              style={{ backgroundColor: color }}
            ></span>
          </p>

          <h4 className="smallPrice">{setPrice(price)}</h4>
        </div>
      </div>

      <h4>{setPrice(price)}</h4>

      <div className="centerButtons">
        <CartButtons amount={amount} increase={increase} decrease={decrease} />
      </div>

      <h4>{setPrice(price * amount)}</h4>

      <button
        className="trash"
        type="button"
        onClick={() => removeCartItem(id)}
      >
        <FaTrash className="trashIcon" />
      </button>
    </section>
  );
};

export default CartItem;
