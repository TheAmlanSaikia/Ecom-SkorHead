import { useCart } from "../../context";
import { changeOfProducts, deleteFromCart } from "../../services";

const CartCard = (props) => {
  const { cartDispatch } = useCart();

  const deleteItem = () => {
    deleteFromCart(props, cartDispatch);
  };
  return (
    <>
      <li key={props.id} className='card-item mt-2'>
        <div className='cart-card flex-row items-center'>
          <img
            src={props.image}
            loading='lazy'
            className='square-image m-1 cart-card-image'
            alt='Shoe'
          />
          <div className='product-info '>
            <p className='text-md'>
              {props.brand} {props.title}
            </p>
            <span className='text-sm'>{props.description}</span>
          </div>
          <div className='cart-card-price'>
            <h5 className='mt-1 ml-1'>
              Rs {Number(props.price) * props.quantity}
            </h5>
            <div className='ml-2 flex-row'>
              <button
                className='cart-card-btn'
                onClick={()=>changeOfProducts(props, cartDispatch,"increment")}>
                <i className='fa-solid fa-plus'></i>
              </button>
              <span className='text-md card-qty-text'>
                <span className='text-lg'>{props.quantity}</span>
              </span>
              <button
                className='cart-card-btn'
                onClick={()=>changeOfProducts(props, cartDispatch,"decrement")}>
                <i className='fa-solid fa-minus'></i>
              </button>
            </div>
          </div>
          <button
            className='mr-1 no-style checkout-delete-btn pointer'
            onClick={()=>deleteItem()}>
            <i className='fa-solid fa-trash fa-lg'></i>
          </button>
        </div>
      </li>
    </>
  );
};

export { CartCard };
