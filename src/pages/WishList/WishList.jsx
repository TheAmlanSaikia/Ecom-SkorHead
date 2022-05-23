import { Footer } from "../../components";
import { useCart, useWishlist } from "../../context";
import { useTitle } from "../../hooks/useTitle";
import "./WishList.css";

const WishList = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();

  useTitle("Wishlist");

  return (
    <div className='wishlist-grid-container'>
      <header className='header wishlist-header-container mr-auto ml-auto mt-3'>
        <h3>
          My <span className='themetext'>Wishlist</span>
        </h3>
        {/* //Code to be refactored */}

        {/* {wishlistState.items.length === 0 && (
          <div className= 'mt-5  wishlist-box'>
            <Link to="/products" className='btn-card btn-cart empty-btn ml-6 mt-3 flex-row items-center justify-center'>
              Add Products
              <i className='fa-solid fa-bag-shopping ml-1'></i>
            </Link>
          </div>
        )} */}
      </header>
      <main className='main wishlist-main-container'>
        <div className='wishlist-container flex-row flex-wrap justify-center mt-2'>
          {wishlistState.items.map((item) => (
            <main key={item.id} className='vertical-cardbody card-shadow'>
              <section className='image-container'>
                <img
                  className='cover-image dismiss-image'
                  loading='lazy'
                  src={item.image}
                  alt='Shoes'
                />
                <button
                  className='cross-btn'
                  onClick={() =>
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item,
                    })
                  }>
                  <i className='fa-solid fa-xmark cross-mark fa-xl'></i>
                </button>
              </section>
              <section className='information-container'>
                <div className='card-text-container'>
                  <div className='title-container'>
                    <h5 className='card-title title-icon'>{item.title}</h5>
                    <button className='wishlist-btn selected-wishlist-btn'>
                      <i className='fa-solid fa-heart fa-lg wishlist-icon'></i>
                    </button>
                  </div>
                  <h6 className='text-md'>{item.brand}</h6>
                  <p className='card-category'>{item.category}</p>
                  <h6 className='price'>
                    ₹{item.price}
                    <span className='ml-1 text-md themetext'>
                      ({item.discount}%OFF)
                    </span>
                  </h6>
                </div>
                <button
                  className='btn-card btn-cart card-btn-fix'
                  onClick={() => {
                    cartDispatch({ type: "ADD_TO_CART", payload: item });
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item,
                    });
                  }}>
                  Add to Cart
                </button>
              </section>
            </main>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { WishList };
