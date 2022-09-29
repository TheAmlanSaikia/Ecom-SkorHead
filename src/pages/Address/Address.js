import { useState, useReducer } from "react";
import { AddressCard, AddressModal } from "../../components";
import { userData } from "../../data/AddressData";
import { AddressReducerFunction } from "../../reducer/AddressReducer";
import "./Address.css";
import { AddressCheckOut } from "./Component/AddressCheckout/AddressCheckout";

const AddressManagement = () => {
  const [open, setOpen] = useState(false);
  const [ addressState, addressDispatch] = useReducer(AddressReducerFunction, userData);

  return (
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
        <div className='checkout-list-container flex-column'>
          <h5 className='checkout-list-title mt-2 ml-2'> Address </h5>
          <p className='text-md ml-2 mt-1'>Select Delivery Address</p>
          <hr />
          <button
            className=' btn-card btn-address mt-3 ml-8'
            onClick={() => setOpen(true)}>
            Add New Address
          </button>
          <ul className='checkout-card-list list-style-none ml-2'>
            {addressState &&
              addressState.map(
                ({
                  id,
                  name,
                  lastName,
                  houseNo,
                  address,
                  city,
                  state,
                  phone,
                }) => (
                  <AddressCard
                    id={id}
                    name={name}
                    lastName={lastName}
                    houseNo={houseNo}
                    address={address}
                    city={city}
                    state={state}
                    phone={phone}
                  />
                )
              )}
            <AddressModal addressState={addressState} addressDispatch={addressDispatch} open={open} setOpen={setOpen} />
          </ul>
        </div>
       <AddressCheckOut />
      </main>
    </div>
  );
};

export { AddressManagement };
