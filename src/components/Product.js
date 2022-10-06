import React from "react";
import Filters from "./Filters";
import ProductList from "./ProductList";
import PageRoute from "../components/PageRoute";
import Sort from "./Sort";
import "../Styles/ProductFilter.css";

const Product = () => {
  return (
    <section className="filter-bar">
      <PageRoute title={`products`} />

      <main className="productFilter">
        <div className="filter">
          <Filters />
        </div>

        <div>
          <Sort />
          <ProductList />
        </div>
      </main>
    </section>
  );
};

export default Product;
