import { Link } from "react-router-dom";
import { CartCard, CheckOut } from "../../components";
import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";
import "./Cart.css";
import { useEffect, useState } from "react";
import { fetchCartProducts } from "../../services";
import { CircularProgress } from "@mui/material";

const Cart = () => {
  const { cartState } = useCart();
  const [cartProducts, setCartProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useTitle("Cart");

  useEffect(() => {
    let fetchCart;
    (async () => {
      fetchCart = await fetchCartProducts();
      setCartProducts(fetchCart);
      setLoader(false);
    })();
  }, [cartState.products]);

  return (
     <>
     {loader ? (
        <div className='flex-center body-loader'>
          <CircularProgress size={70} />
        </div>
      ) : (

    <div className='cart-grid-container'>
      <header className='header header-container'>
        <div className='header-box flex-row justify-center'>
          <button className='no-style pointer'>
            <p className='text-md filter-clear'> Home </p>
          </button>
          <button className='no-style pointer'>
            <p className='text-md filter-clear'> Address </p>
          </button>
          <button className='no-style pointer'>
            <p className='text-md filter-clear'> Payment </p>
          </button>
        </div>
      </header>
      <main className='main main-cart-container'>
        
        {cartState.products.length  === 0 && (
          <div className='ml-auto mr-auto mt-5'>
            <h3> Hey, your bag is so empty! </h3>
            <Link
              to='/products'
              className='btn-card btn-cart empty-btn ml-6 mt-3 flex-row items-center justify-center'>
              Shop Now <i className='fa-solid fa-bag-shopping ml-1'> </i>
            </Link>
          </div>
        )}
        {cartState.products.length !== 0 && (
          <>
            <div className='checkout-list-container flex-column'>
              <h5 className='checkout-list-title mt-2 ml-2'> Shopping Bag </h5>
              <p className='text-md ml-2 mt-1'>
                You have {cartState.products && cartState.products.length}
                  items in your cart
              </p>
              <hr /> {console.log(cartProducts)}
              <ul className='checkout-card-list list-style-none ml-2'>
                
                {cartState.products.map(
                    ({
                      _id,
                      title,
                      brand,
                      price,
                      image,
                      discount,
                      categoryName,
                      inStock,
                      description,
                      quantity,
                    }) => (
                      <CartCard
                        _id={_id}
                        title={title}
                        brand={brand}
                        price={price}
                        image={image}
                        discount={discount}
                        categoryName={categoryName}
                        inStock={inStock}
                        description={description}
                        quantity={quantity}
                      />
                    )
                  )}
              </ul>
            </div>
            <CheckOut />
          </>
        )}
      </main>
      <footer />
    </div>
      )}
    </>
  );
};

export { Cart };
