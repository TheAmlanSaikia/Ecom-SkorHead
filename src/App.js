import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components";
import { Cart } from "./pages/Cart/Cart";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Product/Product";
import { WishList } from "./pages/WishList/WishList";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;
