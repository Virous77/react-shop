import React from "react";
import CheckoutPage from "./CheckoutPage";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../store/context/UserContext";

const PrivateRoutePgae = () => {
  const { myUser } = useUserContext();

  return <div>{myUser ? <CheckoutPage /> : <Navigate replace to="/" />}</div>;
};

export default PrivateRoutePgae;
