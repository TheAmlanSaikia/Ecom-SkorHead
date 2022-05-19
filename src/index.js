import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CartProvider,
  CategoryProvider,
  FilterProvider,
  WishListProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
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
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
