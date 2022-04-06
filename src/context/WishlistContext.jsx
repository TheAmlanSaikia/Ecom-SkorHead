import { useContext } from "react";
import { createContext, useReducer } from "react";
import { WishListReducer } from "../reducer/WishListReducer";

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(WishListReducer, {
    items: [],
  });

  return (
    <WishListContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishListContext.Provider>
  );
};

const useWishlist = () => useContext(WishListContext);

export { useWishlist, WishListProvider };
