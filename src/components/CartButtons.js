import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../Styles/AddCart.css";

const CartButtons = ({ amount, increase, decrease }) => {
  return (
    <div className="buttons">
      <button type="button" className="inc" onClick={decrease}>
        <FaMinus className="buttonIcon" />
      </button>

      <h2 className="amount">{amount}</h2>

      <button type="button" onClick={increase} className="dec">
        <FaPlus className="buttonIcon" />
      </button>
    </div>
  );
};

export default CartButtons;
