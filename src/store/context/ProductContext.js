import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import { productsUrl as url } from "../../Utils/Data";
import productsReducer from "../reducer/ProductReducer";

const ProductContext = createContext();

const initialState = {
  productsLoading: false,
  productsError: false,
  products: [],

  featuredProducts: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  //Fecth Featured Product
  const fetchProduct = async (url) => {
    dispatch({ type: "LOADING" });

    try {
      const response = await axios.get(url);
      const products = response.data;

      dispatch({ type: "SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  //Fetch Single Product

  const fetchSingleProduct = async (url) => {
    dispatch({ type: "SINGLE-LOADING" });

    try {
      const res = await axios.get(url);
      const singleProduct = res.data;

      dispatch({ type: "SINGLE-SUCCESS", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE-ERROR" });
    }
  };

  useEffect(() => {
    fetchProduct(url);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductContext);
};
