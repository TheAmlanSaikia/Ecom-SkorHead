import { CartCard, CheckOut } from "../../components";
import "./Cart.css";

const Cart = () => {
  return (
    <div className='cart-grid-container'>
      <header className='header header-container'>
        <div className='header-box flex-row justify-center'>
          <button className='no-style pointer'>
            <p className='text-md filter-clear'>Home</p>
          </button>
          <button className='no-style pointer'>
            <p className='text-md filter-clear'>Address</p>
          </button>
          <button className='no-style pointer'>
            <p className='text-md filter-clear'>Payment</p>
          </button>
        </div>
      </header>
      <main className='main main-cart-container'>
        <div className='checkout-list-container flex-column'>
          <h5 className='checkout-list-title mt-2 ml-2'>Shopping Bag</h5>
          <p className='text-md ml-2 mt-1'>You have 4 items in your cart</p>
          <hr />
          <ul className='checkout-card-list list-style-none ml-2'>
            <CartCard />
          </ul>
        </div>
        <CheckOut />
      </main>
      <footer />
    </div>
  );
};

export { Cart };
