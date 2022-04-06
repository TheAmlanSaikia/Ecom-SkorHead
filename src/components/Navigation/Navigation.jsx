import { Link } from "react-router-dom";
import { useCart } from "../../context";
import { Logo } from "../Logo/Logo";
import "./Navigation.css";

const Navigation = () => {
  const { cartState } = useCart();
  const NumOfProducts = cartState.products.length;

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
          <a href='/Login/login.html' className='link navbar-link'>
            <i className='fa-solid fal-lg fa-user'></i>
            <p className='text-sm'>Profile</p>
          </a>
        </li>
        <li className='navlinks text-md mx-1'>
          <a href='/Wishlist/wishlist.html' className='link navbar-link'>
            <i className='fa-solid fa-lg fa-heart'></i>
            <p className='text-sm'>Wishlist</p>
          </a>
        </li>
        <li className='navlinks text-md mr-3'>
          <Link to='/cart' className='link navbar-link avatar'>
            <i className='fa-solid fa-lg fa-bag-shopping'></i>
            {NumOfProducts > 0 && (
              <span className='badge-status absolute  badge-status-number ml-1'>
                {NumOfProducts}
              </span>
            )}
            <p className='text-sm'>Bag</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
