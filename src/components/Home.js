import React from "react";
import "../Styles/Home.css";
import { useProductsContext } from "../store/context/ProductContext";
import Spinner from "../UI/Spinner";
import { toast } from "react-toastify";
import FeatureProducts from "./FeatureProducts";

const Home = () => {
  const {
    productsLoading: loading,
    productsError: error,
    featuredProducts: featured,
  } = useProductsContext();

  const customId = "custom-id-yes";

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return toast.error("something went wrong", {
      toastId: customId,
    });
  }

  return (
    <section className="feature-bar">
      <div className="feature">
        <h1>Featured Products</h1>
        <h2 className="line"></h2>
      </div>

      <div className="section-feature">
        {featured.slice(0, 3).map((product) => {
          return <FeatureProducts key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default Home;
