const filterReducer = (state, action) => {
  if (action.type === "LOAD-ALL-PRODUCTS") {
    let MaxPrice = action.payload.map((p) => p.price);

    MaxPrice = Math.max(...MaxPrice);

    return {
      ...state,
      filteredProducts: [...action.payload],
      allProducts: [...action.payload],
      filters: {
        ...state.filters,
        maxPrice: MaxPrice,
        price: MaxPrice,
      },
    };
  }

  if (action.type === "GRID") {
    return {
      ...state,
      gridView: true,
    };
  }

  if (action.type === "LIST") {
    return {
      ...state,
      gridView: false,
    };
  }

  if (action.type === "UPDATE-SORT") {
    return {
      ...state,
      sort: action.payload,
    };
  }

  if (action.type === "SORTLIST") {
    const { sort, filteredProducts } = state;

    let tempProducts = [...filteredProducts];

    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return {
      ...state,
      filteredProducts: tempProducts,
    };
  }

  if (action.type === "UPDATE-FILTERS") {
    const { name, value } = action.payload;

    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    };
  }

  if (action.type === "FILTERLIST") {
    const { allProducts } = state;
    const { text, category, company, color, price, shipping } = state.filters;

    let tempProducts = [...allProducts];

    if (text) {
      tempProducts = tempProducts.filter((products) => {
        return products.name.toLowerCase().startsWith(text);
      });
    }

    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (products) => products.category === category
      );
    }

    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (products) => products.company === company
      );
    }

    if (color !== "all") {
      tempProducts = tempProducts.filter((products) => {
        return products.colors.find((c) => c === color);
      });
    }

    tempProducts = tempProducts.filter((products) => products.price <= price);

    if (shipping) {
      tempProducts = tempProducts.filter(
        (products) => products.shipping === true
      );
    }
    return {
      ...state,
      filteredProducts: tempProducts,
    };
  }

  if (action.type === "CLEAR-FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.maxPrice,
        shipping: false,
      },
    };
  }
};

export default filterReducer;
