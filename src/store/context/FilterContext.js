import { createContext, useContext, useEffect, useReducer } from "react";
import filterReducer from "../reducer/FilterReducer";
import { useProductsContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const { products } = useProductsContext();

  //Loading item from productContext of Products to filterContext states..
  useEffect(() => {
    dispatch({ type: "LOAD-ALL-PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTERLIST" });
    dispatch({ type: "SORTLIST" });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: "GRID" });
  };

  const setListView = () => {
    dispatch({ type: "LIST" });
  };

  const updateSort = (e) => {
    const value = e.target.value;

    dispatch({ type: "UPDATE-SORT", payload: value });
  };

  const updateFilters = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "category") {
      value = e.target.textContent;
    }

    if (name === "color") {
      value = e.target.dataset.color;
    }

    if (name === "price") {
      value = Number(value);
    }

    if (name === "shipping") {
      value = e.target.checked;
    }

    dispatch({ type: "UPDATE-FILTERS", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR-FILTERS" });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
