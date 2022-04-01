import { useFilter } from "../../context";

const CategoryFilter = () => {
  const { state, dispatch } = useFilter();
  const { categories } = state;
  const { ChuckTaylor, BasketBall, Authentic, Running, SlipOn } = categories;

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
              value='ChuckTaylor'
              onChange={(e) =>
                dispatch({ type: "CATEGORY_FILTER", payload: e.target.value })
              }
              checked={ChuckTaylor}
            />
            Chuck Taylor
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='BasketBall'
              onChange={(e) =>
                dispatch({ type: "CATEGORY_FILTER", payload: e.target.value })
              }
              checked={BasketBall}
            />
            BasketBall
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='Running'
              onChange={(e) =>
                dispatch({ type: "CATEGORY_FILTER", payload: e.target.value })
              }
              checked={Running}
            />
            Running
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='SlipOn'
              onChange={(e) =>
                dispatch({ type: "CATEGORY_FILTER", payload: e.target.value })
              }
              checked={SlipOn}
            />
            Slip-On
          </label>
          <label className='form-label'>
            <input
              className='form-checkbox-field'
              type='checkbox'
              name='category'
              value='Authentic'
              onChange={(e) =>
                dispatch({ type: "CATEGORY_FILTER", payload: e.target.value })
              }
              checked={Authentic}
            />
            Authentic Sneakers
          </label>
        </div>
      </li>
    </div>
  );
};

export { CategoryFilter };
