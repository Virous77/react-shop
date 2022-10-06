import React, { useEffect } from "react";
import Spinner from "../UI/Spinner";
import { useProductsContext } from "../store/context/ProductContext";
import { toast } from "react-toastify";
import { single_product_url as url } from "../Utils/Data";
import { useParams, useNavigate } from "react-router-dom";
import PageRoute from "./PageRoute";
import ProductImage from "./ProductImage";
import RatingStar from "./RatingStar";
import AddCart from "./AddCart";
import "../Styles/SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const singleError = "error-yes";

  const {
    fetchSingleProduct,
    singleProductLoading: loading,
    singleProductError: error,
    singleProduct: product,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
        toast.dismiss();
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return toast.error("Soemthing went wrong", {
      toastId: singleError,
    });
  }

  const {
    name,
    price,
    stock,
    stars,
    description,
    reviews,
    id: ids,
    company,
    images,
  } = product;

  const setPrice = (prices) => {
    return Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(prices / 100);
  };

  return (
    <section className="singleProductSection">
      <PageRoute title={name} product />

      <div className="product-container">
        <ProductImage images={images} />

        <div className="productInfo-bar">
          <div className="productName">
            <h2>{name}</h2>
            <RatingStar stars={stars} reviews={reviews} />
            <h4 className="setPrice">{setPrice(price)}</h4>
          </div>

          <p className="desc">{description}</p>

          <div className="stock">
            <p className="first">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>

            <p className="ids">
              <span>IDs : </span>
              {ids}
            </p>

            <p className="brand">
              <span>Brand : </span>
              {company}
            </p>
          </div>

          <hr />
          {stock > 0 && <AddCart product={product} />}
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
