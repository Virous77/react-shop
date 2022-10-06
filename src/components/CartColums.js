import React from "react";
import "../Styles/Cart.css";

const CartColums = () => {
  return (
    <main className="cartColums">
      <h4 className="itemH4">Item</h4>
      <h4 className="itemPH4">Price</h4>
      <h4 className="itemQH4">Quanity</h4>
      <h4 className="itemSH4">SubTotal</h4>
      <h4 className="itemDH4">Delete</h4>
    </main>
  );
};

export default CartColums;
