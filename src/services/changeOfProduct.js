import axios from "axios";
const CART = process.env.REACT_APP_SKORHEAD_CART;

export const changeOfProducts = async (product, cartDispatch, action) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.post(
      CART,
      {
        action: {
          type: action,
        },
      },
      config
    );
    console.log(response);

    action === "increment"
      ? cartDispatch({ type: "INCREASE_QUANTITY", payload: product })
      : cartDispatch({ type: "DECREASE_QUANTITY", payload: product });
  } catch (error) {
    console.log(error);
  }
};
