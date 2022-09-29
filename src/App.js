import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation, Toast } from "./components";
import { RequireAuth } from "./components/Authentication/Auth";
import { AddressManagement } from "./pages/Address/Address";
import { Cart } from "./pages/Cart/Cart";
import { ErrorPage } from "./pages/Error/Error";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/LogIn/Login";
import { Products } from "./pages/Product/Product";
import { SignUp } from "./pages/SignUp/SignUp";
import { SingleProductPage } from "./pages/SingleProduct/SingleProductPage";
import { WishList } from "./pages/WishList/WishList";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Toast />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
        <Route
          path='/cart'
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path='/address'
          element={
            <RequireAuth>
              <AddressManagement />
            </RequireAuth>
          }
        />

        <Route
          path='/wishlist'
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />

        <Route path='*' element={<ErrorPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mock' element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
