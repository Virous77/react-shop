const cartReducer = (state, action) => {
  if (action.type === "ADDTO-CART") {
    const { id, amount, color, product } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id + color);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmmount = cartItem.amount + amount;

          if (newAmmount > cartItem.max) {
            newAmmount = cartItem.max;
          }

          return {
            ...cartItem,
            amount: newAmmount,
          };
        } else {
          return cartItem;
        }
      });

      return {
        ...state,
        cart: tempCart,
      };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === "REMOVE-ITEM") {
    const tempcart = state.cart.filter((item) => item.id !== action.payload);

    return {
      ...state,
      cart: tempcart,
    };
  }

  if (action.type === "CLEAR-CART-ITEMS") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "TOGGLE-ITEM") {
    const { id, value } = action.payload;

    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmmount = item.amount + 1;
          if (newAmmount > item.max) {
            newAmmount = item.max;
          }
          return {
            ...item,
            amount: newAmmount,
          };
        }

        if (value === "dec") {
          let newAmmount = item.amount - 1;
          if (newAmmount < 1) {
            newAmmount = 1;
          }
          return {
            ...item,
            amount: newAmmount,
          };
        }
      } else {
        return item;
      }
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === "COUNT-CART-ITEM") {
    const { totalAmount, totalItems } = state.cart.reduce(
      (total, curr) => {
        const { amount, price } = curr;

        total.totalItems += amount;
        total.totalAmount += price * amount;

        return total;
      },
      {
        totalAmount: 0,
        totalItems: 0,
      }
    );

    return {
      ...state,
      totalAmount,
      totalItems,
    };
  }
};

export default cartReducer;
