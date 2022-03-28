import { Logo } from "../Logo/Logo";
import "./Navigation.css";

const Navigation = () => {
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
            <i class='fa-solid fal-lg fa-user'></i>
            <p className='text-sm'>Profile</p>
          </a>
        </li>
        <li className='navlinks text-md mx-1'>
          <a href='/Wishlist/wishlist.html' className='link navbar-link'>
            <i class='fa-solid fa-lg fa-heart'></i>
            <p className='text-sm'>Wishlist</p>
          </a>
        </li>
        <li className='navlinks text-md mr-3'>
          <a href='/Cart/Cart.html' className='link navbar-link'>
            <i class='fa-solid fa-lg fa-bag-shopping'></i>
            <p className='text-sm'>Bag</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
