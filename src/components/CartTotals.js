import React from "react";
import { useCartContext } from "../store/context/CartContext";
import { Link } from "react-router-dom";
import "../Styles/Cart.css";
import { useUserContext } from "../store/context/UserContext";

const CartTotals = () => {
  const { totalAmount, shippingFee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  const setPrice = (prices) => {
    return Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(prices / 100);
  };

  return (
    <section className="cartTotal">
      <div className="div">
        <h4>
          SubTotal : <span>{setPrice(totalAmount)}</span>
        </h4>

        <p>
          Shipping : <span>{setPrice(shippingFee)}</span>{" "}
        </p>

        <h4 className="grandTotal">
          Order Total : <span>{setPrice(totalAmount + shippingFee)}</span>
        </h4>

        {myUser ? (
          <Link to="/check-out" className="checkout ">
            proceed to checkout
          </Link>
        ) : (
          <button className="checkouts " onClick={loginWithRedirect}>
            Login
          </button>
        )}
      </div>
    </section>
  );
};

export default CartTotals;
