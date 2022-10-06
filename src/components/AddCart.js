import React, { useState } from "react";
import CartButtons from "./CartButtons";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "../Styles/AddCart.css";
import { useCartContext } from "../store/context/CartContext";

const AddCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const { addToCart } = useCartContext();

  const increase = () => {
    setAmount((prevState) => {
      let tempAmount = prevState + 1;

      if (tempAmount > stock) {
        tempAmount = stock;
      }

      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((prevState) => {
      let tempAmount = prevState - 1;

      if (tempAmount === 0) {
        tempAmount = 1;
      }

      return tempAmount;
    });
  };

  return (
    <section className="addToCart">
      <div className="colors-bar">
        <span> Colors : </span>

        <div className="colors">
          {colors.map((color, idx) => {
            return (
              <button
                style={{ background: color }}
                key={idx}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck className="check" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="cart-btn">
        <CartButtons amount={amount} increase={increase} decrease={decrease} />

        <div className="goCart">
          <Link
            to="/cart"
            className="btn-go"
            onClick={() => addToCart(id, mainColor, amount, product)}
          >
            Add to cart
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddCart;
