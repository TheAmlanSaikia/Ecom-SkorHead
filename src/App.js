import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components";
import { RequireAuth } from "./components/Authentication/Auth";
import { Cart } from "./pages/Cart/Cart";
import { ErrorPage } from "./pages/Error/Error";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/LogIn/Login";
import { Products } from "./pages/Product/Product";
import { SignUp } from "./pages/SignUp/SignUp";
import { WishList } from "./pages/WishList/WishList";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route
          path='/cart'
          element={
            <RequireAuth>
              <Cart />
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
