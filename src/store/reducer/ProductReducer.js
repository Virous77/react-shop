const productsReducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      ...state,
      productsLoading: true,
    };
  }

  if (action.type === "ERROR") {
    return {
      ...state,
      productsLoading: false,
      productsError: true,
    };
  }

  if (action.type === "SUCCESS") {
    const featuredProducts = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      productsLoading: false,
      featuredProducts,
      products: action.payload,
    };
  }

  if (action.type === "SINGLE-LOADING") {
    return {
      ...state,
      singleProductLoading: true,
    };
  }

  if (action.type === "SINGLE-ERROR") {
    return {
      ...state,
      singleProductLoading: false,
      singleProductError: true,
    };
  }

  if (action.type === "SINGLE-SUCCESS") {
    return {
      ...state,
      singleProductLoading: false,
      singleProduct: action.payload,
    };
  }
};

export default productsReducer;
