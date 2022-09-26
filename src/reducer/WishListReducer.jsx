const WishListReducer = (wishlistState, { type, payload }) => {

  switch (type) {
    case "ADD_TO_WISHLIST":
      return {
        ...wishlistState,
        items: [...wishlistState["items"], payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...wishlistState,
        items: wishlistState.items.filter((value) => value._id !== payload._id),
      };

    default:
      return {
        ...wishlistState,
      };
  }
};

export { WishListReducer };
