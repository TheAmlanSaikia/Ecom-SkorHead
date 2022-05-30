import axios from "axios";

export const addToCart = async (product, cartDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.post(
      "/api/user/cart",
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
    console.log("Something went wrong");
  }
};
