import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const GridView = ({ image, name, price, id }) => {
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
        <Link to={`${id}`} className="link">
          <FaSearch className="searchIcon" />
        </Link>
      </div>

      <div className="info-bar">
        <h4>{name}</h4>
        <p>{setPrice(price)}</p>
      </div>
    </section>
  );
};

export default GridView;
