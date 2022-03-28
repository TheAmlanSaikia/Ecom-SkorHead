const CategoryFilter = () => {
  return (
    <div>
      <li className='filter-category-container'>
        <div className='filter-shoetype-container'>
          <p className='text-lg filter-name'>CATEGORY</p>
          <label className='form-label'>
            <input
              type='checkbox'
              name='category'
              className='form-checkbox-field'
              value='Chuck Taylor Sneakers'
            />
            Chuck Taylor Sneakers
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='BasketBall'
            />
            BasketBall
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='Running'
            />
            Running
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='SliponSneakers'
            />
            Slip-on Sneakers
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='AuthenticSneakers'
            />
            Authentic Sneakers
          </label>
        </div>
      </li>
    </div>
  );
};

export { CategoryFilter };
