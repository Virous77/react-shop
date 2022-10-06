import React from "react";
import GridView from "./GridView";
import "../Styles/Grid.css";

const ProductGrid = ({ products }) => {
  return (
    <main className="gridContainer">
      {products.map((product) => {
        return <GridView key={product.id} {...product} />;
      })}
    </main>
  );
};

export default ProductGrid;
