const AddressCard = ({
  id,
  name,
  lastName,
  houseNo,
  address,
  city,
  state,
  phone,
}) => {
  return (
    <>
      <li key={id} className='card-item mt-2'>
        <div className='cart-card flex-col'>
          <div className='product-info mt-1 ml-1'>
            <div className='flex-row'>
              <input type='radio' name='address' />
              <p className='text-lg ml-1'>
                {name}
                {" "}
                {lastName}
              </p>
            </div>

            <span className='text-sm ml-2 mt-2'>
              House No: {houseNo} {address} {" "}
              {city}{" "}{state}
            </span>
            <h6 className='mt-1 ml-2'>
              Phone: <span className='text-sm'>{phone}</span>
            </h6>
            <p className='text-xs themetext ml-3 my-2'>
              Cash on Delivery available
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export { AddressCard };
