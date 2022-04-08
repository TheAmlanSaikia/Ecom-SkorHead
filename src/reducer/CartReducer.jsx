const CartReducer = (cartState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        products: [...cartState["products"], { ...payload, quantity: 1 }],
      };
    case "INCREASE_QUANTITY":
      return {
        ...cartState,
        products: cartState.products.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...cartState,
        products: cartState.products.map((item) => {
           if( item.id === payload.id){
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
           } else {
             return item;
           }
         
        }),
      };

    case "DELETE_FROM_CART": {
      return {
        ...cartState,
        products: cartState.products.filter((item) => item.id !== payload.id),
      };
    }

    default:
      return cartState;
  }
};

export { CartReducer };
