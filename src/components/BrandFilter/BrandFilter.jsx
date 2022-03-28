



const BrandFilter = () => {
  return (
    <div>
      <li className='filter-category-container'>
        <div className='filter-shoebrand-container'>
          <p className='text-lg filter-name'> BRAND </p>
          <label className='form-label'>
            <input
              type='checkbox'
              name='category'
              className='form-checkbox-field'
              value='NIKE'
            />
            NIKE
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='Adidas'
            />
            Adidas
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='VANS'
            />
            VANS
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='Puma'
            />
            Converse
          </label>
        </div>
      </li>
    </div>
  );
};

export { BrandFilter };