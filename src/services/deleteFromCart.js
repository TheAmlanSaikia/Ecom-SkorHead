import axios from "axios";
const CART = process.env.REACT_APP_SKORHEAD_CART;

export const deleteFromCart = async (product, cartDispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const response = await axios.delete(
     `${CART}/:${product.id}`,
      config
    );
    console.log(response,"Delete Item Array");
    cartDispatch({
      type: "DELETE_FROM_CART",
      payload: product,
    });
  } catch (error) {
    console.log(error);
  }
};