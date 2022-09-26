import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTitle } from "../../hooks/useTitle";
import { CircularProgress } from "@mui/material";
import "./SingleProductPage.css";
import axios from "axios";
import { useAuth, useCart } from "../../context";
import { useWishlist } from "../../context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, addToWishList, removeFromWishList } from "../../services";
import { toast } from "react-toastify";

const PRODUCTS = process.env.REACT_APP_SKORHEAD_PRODUCTS;

const SingleProductPage = () => {
  const { productId } = useParams();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const Navigate = useNavigate();
  const { userLogin } = useAuth();
  const [productList, setProductList] = useState(null);
  const [loader, setLoader] = useState(true);
  useTitle("Products/");

  /**
   * Side effect for calling products API
   */

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(PRODUCTS);
        const {
          data: { products },
        } = response;
        setProductList(products);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  /**
   * {Find the required product}
   */

  const clickedProduct =
    productList && productList.find((product) => product._id === productId);

  /**
   * {Add Products to Cart}
   * @param()
   * @returns {addToCart or Redirection To login Page}
   */

  const cartBtnHandler = () => {
    if (userLogin) {
      addToCart(clickedProduct, cartDispatch);
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
      addToWishList(clickedProduct, wishlistDispatch);
      toast.success("Added to Wishlist");
    } else {
      Navigate("/login", { replace: true });
    }
  };

  /**
   * @returns{Triggers removetoWishlist function}
   */
  const removesFromWishlist = () => {
    toast.warn("Succesfully removed from wishlist");
    removeFromWishList(clickedProduct, wishlistDispatch);
  };

  return (
    <>
      {loader ? (
        <div className='flex-center body-loader'>
          <CircularProgress size={70} />
        </div>
      ) : (
        <div className='flex-row mt-3 mx-3 flex-center product-container'>
          <section className='section-Image'>
            <div className='singleProductImage'>
              <img
                className='responsive-image productpage-image'
                loading='lazy'
                src={clickedProduct.image && clickedProduct.image}
                alt='Air-Jordan-1'
              />
            </div>
          </section>
          <section className='section-text text-left flex-col'>
            <h2 className='card-title title-icon'>
              {clickedProduct.brand} {clickedProduct.title}
            </h2>
            <h3 className='card-category my-1'>
              {clickedProduct.categoryName}
            </h3>
            {console.log(cartState, clickedProduct)}
            <h4 className='card-category mb-3'>{clickedProduct.description}</h4>
            <hr />
            <h3 className='my-2'>
              {" "}
              Rs {clickedProduct.price}{" "}
              <span className='ml-1 themetext'>
                ({clickedProduct.discount}%OFF)
              </span>{" "}
            </h3>
            <div className='flex-row space-between mb-3'>
              {cartState.products.some(
                (item) => item._id === clickedProduct._id
              ) ? (
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
              {wishlistState.items.some(
                (item) => item._id === clickedProduct._id
              ) ? (
                <button
                  className='btn-card btn-cart card-btn-fix'
                  onClick={() => removesFromWishlist()}>
                  Remove From WishList
                </button>
              ) : (
                <button
                  className='btn-card btn-cart card-btn-fix'
                  onClick={() => addsToWishlist()}>
                  Add to WishList
                </button>
              )}
            </div>
            <hr />
            <div className='flex-col mt-1 text-disabled'>
              <p className="mt-1">Assured Original Quality</p>
              <p className="mt-1">Cash on Delivery Available</p>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export { SingleProductPage };
