const CartCard = () => {
  return (
    <>
      <li className='card-item mt-2'>
        <div className='cart-card flex-row items-center'>
          <img
            src='https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/air%20Jordon%20Myntra.webp'
            loading='lazy'
            className='square-image m-1 cart-card-image'
            alt='Jordon'
          />
          <div className='product-info '>
            <p className='text-md'>Nike AIR Jordan 1 Mid-Sole</p>
            <span className='text-sm'>Limited Edition Red Soles</span>
          </div>
          <div className='cart-card-price'>
            <h5 className='mt-1'>Rs 10988</h5>
            <div className='ml-2 flex-row'>
              <button className='cart-card-btn'>
                <i class='fa-solid fa-plus'></i>
              </button>
              <span className='text-md card-qty-text'>{2}</span>
              <button className='cart-card-btn'>
                <i class='fa-solid fa-minus'></i>
              </button>
            </div>
          </div>
          <button className='mr-1 no-style checkout-delete-btn'>
            <i className='fa-solid fa-trash fa-lg'></i>
          </button>
        </div>
      </li>
    </>
  );
};

export { CartCard };
