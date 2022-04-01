import { useFilter } from "../../context/Filtercontext.js";

const PriceFilter = () => {
  const { state, dispatch } = useFilter();
  const { sortBy } = state;

  return (
    <div>
      <li className='filter-category-container'>
        <div className='filter-price-container'>
          <p className='text-lg filter-name'>SORT PRICE</p>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='radio'
              name='sort'
              value='HIGH_TO_LOW_PRICE'
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
              }
              checked={sortBy === "HIGH_TO_LOW"}
            />
            Price High to low
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='radio'
              name='sort'
              value='LOW_TO_HIGH_PRICE'
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
              }
              checked={sortBy === "LOW_TO_HIGH"}
            />
            Price Low to high
          </label>
        </div>
      </li>
    </div>
  );
};

export { PriceFilter };
