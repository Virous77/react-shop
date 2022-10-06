import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ListView.css";

const ProductListView = ({ products }) => {
  const setPrice = (prices) => {
    return Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(prices / 100);
  };

  return (
    <section>
      {products.map((product) => {
        const { id, image, name, price, description } = product;

        return (
          <div className="listMain">
            <div className="listImg">
              <img src={image} alt={name} />
            </div>

            <div className="listInfo">
              <h4>{name}</h4>
              <h5 className="listPrice">{setPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>

              <Link to={`${id}`} className="listLink">
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProductListView;
