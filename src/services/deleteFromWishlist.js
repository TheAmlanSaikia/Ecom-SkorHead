import axios from "axios";
const WISHLIST = process.env.REACT_APP_SKORHEAD_WISHLIST;

export const removeFromWishList = async (product, wishlistDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.delete(
      `${WISHLIST}/:${product.id}`,config
    );
    console.log(response);
    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: product,
    });
  } catch (error) {
    console.log(error);
  }
};