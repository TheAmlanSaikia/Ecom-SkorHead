import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { CartReducer } from "../reducer/CartReducer";



const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, {products:[]});

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
