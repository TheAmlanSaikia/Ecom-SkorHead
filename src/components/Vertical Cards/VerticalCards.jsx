import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart } from "../../context";
import { useWishlist } from "../../context/WishlistContext";
import { addToCart, addToWishList, removeFromWishList } from "../../services";
import { toast } from "react-toastify";
import "./ProductVerticalCards.css";

const VerticalCards = (props) => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const Navigate = useNavigate();
  const { userLogin } = useAuth();

  /**
   * {Add Products to Cart}
   * @param()
   * @returns {addToCart or Redirection To login Page}
   */

  const cartBtnHandler = () => {
    if (userLogin) {
      addToCart(props, cartDispatch);
      toast.success("Added to Cart");
    } else {
      Navigate("/login", { replace: true });
    }
  };

  /**
   * {Redirection to cart page}
   * @param()
   * @returns{Navigate to Cart or Login}
   */

  const goCartBtnHandler = () => {
    if (userLogin) {
      <Navigate to='/cart' replace={false} />;
    } else {
      Navigate("/login", { replace: true });
    }
  };

  /**
   * @returns{Triggers addToWishist function}
   */
  const addsToWishlist = () => {
    if (userLogin) {
      addToWishList(props, wishlistDispatch);
      toast.success("Added to Wishlist");
    } else {
      Navigate("/login", { replace: true });
    }
  };

  /**
   * @returns{Triggers removetoWishlist function}
   */
  const removesFromWishlist = () => {
    removeFromWishList(props, wishlistDispatch);
    toast.warn("Removed to Wishlist");
  };

  return (
    <div>
      <main key={props._id} className='vertical-cardbody card-shadow'>
        {props.inStock === false && (
          <section className='overlay-section'>
            <h3 className='overlay-text'> Out of stock </h3>
          </section>
        )}
        <section className='pointer image-container'>
          <Link to={`/products/${props._id}`}>
            <img
              className='cover-image potrait-image'
              loading='lazy'
              src={props.image}
              alt='Air-Jordan-1'
            />
          </Link>
        </section>
        <section className='information-container'>
          <div className='card-text-container'>
            <div className='title-container'>
              <h5 className='card-title title-icon'>{props.title}</h5>
              {wishlistState.items.some((item) => item._id === props._id) ? (
                <button
                  className='wishlist-btn wishlist-btn-hover themetext'
                  onClick={
                    () => removesFromWishlist()
                    // wishlistDispatch({
                    //   type: "REMOVE_FROM_WISHLIST",
                    //   payload: props,
                    // })
                  }>
                  <i className='fa-solid fa-heart fa-lg wishlist-icon'></i>
                </button>
              ) : (
                <button
                  className='wishlist-btn wishlist-btn-hover'
                  onClick={
                    () => addsToWishlist()
                  }>
                  <i className='fa-solid fa-heart fa-lg wishlist-icon'></i>
                </button>
              )}
            </div>
            <h6 className='text-md'>{props.brand}</h6>
            <p className='card-category'>{props.categoryName}</p>
            <h6 className='price'>
              ₹{props.price}
              <span className='ml-1 text-md themetext'>
                ({props.discount}%OFF)
              </span>
            </h6>
          </div>
          {cartState.products.some((item) => item._id === props._id) ? (
            <>
              <Link to='/cart'>
                <button
                  className='btn-card btn-cart card-btn-fix'
                  onClick={() => goCartBtnHandler()}>
                  Go to Cart
                </button>
              </Link>
            </>
          ) : (
            <>
              <button
                className='btn-card btn-cart card-btn-fix'
                onClick={() => cartBtnHandler()}>
                Add to Cart
              </button>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export { VerticalCards };
