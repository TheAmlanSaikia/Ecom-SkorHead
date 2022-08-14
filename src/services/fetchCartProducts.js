import axios from "axios";
const CART = process.env.REACT_APP_SKORHEAD_CART;

export const fetchCartProducts = async () => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const response = await axios.get(CART, config);
        console.log(response.data.cart);
        return response.data.cart;
    } catch (error) {
       return error;
    }
};