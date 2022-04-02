import "./ProductVerticalCards.css";

const VerticalCards = (props) => {
  return (
    <div>
      <main key={props.id} className='vertical-cardbody card-shadow'>
        <section className='image-container'>
          <img
            className='cover-image potrait-image'
            loading='lazy'
            src={props.image}
            alt='Air-Jordan-1'
          />
        </section>
        <section className='information-container'>
          <div className='card-text-container'>
            <div className='title-container'>
              <h5 className='card-title title-icon'>{props.title}</h5>
              <button className='wishlist-btn wishlist-btn-hover'>
                <i className='fa-solid fa-heart fa-lg wishlist-icon'></i>
              </button>
            </div>
            <h6 className='text-md'>{props.brand}</h6>
            <p className='card-category'>{props.categoryName}</p>
            <h6 className='price'>
              ₹{props.price}
              <span className='ml-1 text-md'>({props.discount}%OFF)</span>
            </h6>
          </div>
          <button className='btn-card btn-cart card-btn-fix'>
            Add to Cart
          </button>
        </section>
      </main>
    </div>
  );
};

export { VerticalCards };
