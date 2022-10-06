import React from "react";
import "../Styles/FeatureProduct.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const FeatureProducts = ({ image, name, price, id }) => {
  const str = name;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);

  const setPrice = (prices) => {
    return Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(prices / 100);
  };

  return (
    <section className="home-feature">
      <div className="imgFeature">
        <img src={image} alt={name} />
        <Link to={`products/${id}`} className="link">
          <FaSearch className="searchIcon" />
        </Link>
      </div>

      <div className="info-bar">
        <h4>{str2}</h4>
        <p>{setPrice(price)}</p>
      </div>
    </section>
  );
};

export default FeatureProducts;
