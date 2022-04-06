import { useCart } from "../../context";

const CheckOut = () => {
  const { cartState } = useCart();

  const totalSum = (acc, value) => value.price * value.quantity + acc;
  const TotalBill = cartState.products.reduce(totalSum, 0);

  return (
    <div className='checkout-price-container'>
      <div className='checkout-box ml-5 pl-1 mt-8'>
        <h5>CHECKOUT</h5>
        <div className='bill-box flex-col mt-1'>
          <div className='mrp flex-row justify-between mt-2 checkout-row'>
            <p className='text-md'>Total MRP</p>
            <p className='value'>₹{TotalBill}</p>
          </div>
          <div className='mrp flex-row justify-between mt-1 checkout-row'>
            <p className='text-md'>Discount</p>
            <p className='value'>₹ 299.00</p>
          </div>
          <div className='mrp flex-row justify-between mt-1 checkout-row'>
            <p className='text-md'>Convenience Fee</p>
            <p className='value'>Free</p>
          </div>
          <hr />
          <div className='mrp flex-row justify-between'>
            <h6>Total</h6>
            <h6>₹{TotalBill-299}</h6>
          </div>
          <button className=' btn-card btn-checkout mt-3 ml-auto mr-auto'>
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export { CheckOut };
