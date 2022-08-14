import axios from "axios";
const WISHLIST = process.env.REACT_APP_SKORHEAD_WISHLIST;

export const addToWishList = async (product, wishlistDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.post(
      WISHLIST,
      {
        product,
      },
      config
    );
    console.log(response);
    wishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
  } catch (error) {
    console.log(error);
  }
};
