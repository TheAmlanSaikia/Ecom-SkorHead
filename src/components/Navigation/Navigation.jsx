import {  NavLink, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";

import { Logo } from "../Logo/Logo";
import "./Navigation.css";

const Navigation = () => {
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const NumOfProducts = cartState.products.length;
  const NumOfWishlist = wishlistState.items.length;
  const { user, setUser, userLogin, setUserLogin } = useAuth();
  const Navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setUserLogin(false);
    setUser("");
    Navigate("/");
  };

  return (
    <nav className='navbar sticky flex-row items-center flew-wrap'>
      <div className='hamburger'></div>
      <Logo />
      <div className='wrap'>
        <div className='search'>
          <input
            type='text'
            className='searchTerm'
            placeholder='What are you looking for?'
          />
          <button type='submit' className='searchButton'>
            <i className='fa fa-search'></i>
          </button>
        </div>
      </div>

      <ul className='navlinks-secondary flex-row ml-auto list-style-none'>
        <li className='navlinks text-md'>
          {!userLogin ? (
            <NavLink to='/login' className='link navbar-link'>
              <i className='fa-solid fal-lg fa-user'></i>
              <p className='text-sm'>Login</p>
            </NavLink>
          ) : (
            <div className='link navbar-link dropdown'>
              <i className='fa-solid fal-lg fa-user'></i>
              <p className='text-sm'>{user.firstName}</p>
              <div className='dropdown-content'>
                <p className='dropdown-tab pointer'>Products</p>
                <p className='dropdown-tab pointer'>User</p>
                <div className='dropdown-tab pointer' onClick={logoutHandler}>
                  Logout
                </div>
              </div>
            </div>
          )}
        </li>
        <li className='navlinks text-md mx-1'>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#ff385d" : "#80828d",
              };
            }}
            to='/wishlist'
            className='link navbar-link avatar themetext'>
            <i className='fa-solid fa-lg fa-heart'></i>
            {NumOfWishlist > 0 && (
              <span className='badge-status absolute  badge-status-number ml-1'>
                {NumOfWishlist}
              </span>
            )}
            <p className='text-sm'>Wishlist</p>
          </NavLink>
        </li>
        <li className='navlinks text-md mr-3'>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#ff385d" : "#80828d",
              };
            }}
            to='/cart'
            className='link navbar-link avatar themetext'>
            <i className='fa-solid fa-lg fa-bag-shopping'></i>
            {NumOfProducts > 0 && (
              <span className='badge-status absolute  badge-status-number ml-1'>
                {NumOfProducts}
              </span>
            )}
            <p className='text-sm'>Bag</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
