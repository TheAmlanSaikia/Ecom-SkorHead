import { useFilter } from "../../context";

const BrandFilter = () => {
  const { state, dispatch } = useFilter();
  const { brands } = state;
  const { Nike, Adidas, Converse, Vans } = brands;

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
              value='Nike'
              onChange={(e) =>
                dispatch({ type: "BRAND_FILTER", payload: e.target.value })
              }
              checked={Nike}
            />
            NIKE
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='Adidas'
              onChange={(e) =>
                dispatch({ type: "BRAND_FILTER", payload: e.target.value })
              }
              checked={Adidas}
            />
            Adidas
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='Vans'
              onChange={(e) =>
                dispatch({ type: "BRAND_FILTER", payload: e.target.value })
              }
              checked={Vans}
            />
            VANS
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='Converse'
              onChange={(e) =>
                dispatch({ type: "BRAND_FILTER", payload: e.target.value })
              }
              checked={Converse}
            />
            Converse
          </label>
        </div>
      </li>
    </div>
  );
};

export { BrandFilter };
