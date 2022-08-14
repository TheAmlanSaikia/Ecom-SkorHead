import axios from "axios";
const CART = process.env.REACT_APP_SKORHEAD_CART;

export const addToCart = async (product, cartDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.post(
      CART,
      {
        product,
      },
      config
    );
    console.log(response);
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  } catch (error) {
    console.log(error);
  }
};
