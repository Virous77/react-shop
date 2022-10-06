import { createContext, useReducer, useContext, useEffect } from "react";
import cartReducer from "../reducer/CartReducer";

const CartContext = createContext();

const localStorageCart = () => {
  let cart = localStorage.getItem("cartItem");

  if (cart) {
    return JSON.parse(localStorage.getItem("cartItem"));
  } else {
    return [];
  }
};

const initialstate = {
  cart: localStorageCart(),
  totalAmount: 0,
  totalItems: 0,
  shippingFee: 534,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialstate);

  //AddToCart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADDTO-CART", payload: { id, color, amount, product } });
  };

  //RemoveFromCart
  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE-ITEM", payload: id });
  };

  //ClearCart
  const clearCart = () => {
    dispatch({ type: "CLEAR-CART-ITEMS" });
  };

  //Toggle Inc & Dec Button
  const toggleCart = (id, value) => {
    dispatch({ type: "TOGGLE-ITEM", payload: { id, value } });
  };

  //Upload Item to LocalStorage
  useEffect(() => {
    dispatch({ type: "COUNT-CART-ITEM" });
    localStorage.setItem("cartItem", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeCartItem, toggleCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
