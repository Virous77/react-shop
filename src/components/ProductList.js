import React from "react";
import ProductGrid from "./ProductGrid";
import ProductListView from "./ProductListView";
import { useFilterContext } from "../store/context/FilterContext";
import "../Styles/ProductFilter.css";

const ProductList = () => {
  const { filteredProducts: products, gridView } = useFilterContext();

  if (products.length < 1) {
    return <h4 className="emptyMsg">Sorry, products matched not found</h4>;
  }

  if (gridView === false) {
    return <ProductListView products={products} />;
  }

  return <ProductGrid products={products}>Product List</ProductGrid>;
};

export default ProductList;
