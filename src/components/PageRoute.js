import React from "react";
import { Link } from "react-router-dom";
import "../Styles/PageRoute.css";

const PageRoute = ({ title, product }) => {
  return (
    <section className="page-route">
      <h4>
        <Link className="page-home" to={"/"}>
          Home
        </Link>
        {product && (
          <Link className="page-home" to="/products">
            / Products
          </Link>
        )}
        <span className="route"> / {title}</span>
      </h4>
    </section>
  );
};

export default PageRoute;
