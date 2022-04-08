import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  CartProvider,
  CategoryProvider,
  FilterProvider,
  WishListProvider,
} from "./context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <CartProvider>
          <WishListProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </WishListProvider>
        </CartProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
