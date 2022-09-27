import { useFilter } from "../../context";

const PriceRangeFilter = () => {
  const { state, dispatch } = useFilter();
  const { maxPrice, inStock } = state;

  return (
    <div>
      <li className='filter-category-container'>
        <div className='filter-price-container'>
          <p className='text-lg filter-name'>PRICE RANGE</p>
          <label className='form-label'>
            <input
              type='checkbox'
              className='form-checkbox-field'
              checked={inStock}
              value={inStock}
              onChange={(e) => {
                dispatch({
                  type: "REMOVE_OUTOFSTOCK",
                  payload: e.target.value,
                });
              }}
            />
            In Stock Only
          </label>
          <div>
            <p className='form-label text-md'>Price Range: 0 to {maxPrice}</p>
            <input
              type='range'
              value={maxPrice}
              min= '0'
              max='20000'
              onChange={(e) =>
                dispatch({ type: "SET_PRICERANGE", payload: e.target.value })
              }
            />
          </div>
        </div>
      </li>
    </div>
  );
};

export { PriceRangeFilter };
