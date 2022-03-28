

const PriceFilter=()=>{

    return (
    
     <div>
      <li className="filter-category-container">
            <div className="filter-price-container">
              <p className="text-lg filter-name">SORT PRICE</p>
              <label className="form-label">
                <input
                  className="form-checkbox-field"
                  type="radio"
                  name="sort"
                  value="HIGH_TO_LOW_PRICE"
                />
                Price High to low
              </label>
              <label className="form-label">
                <input
                  className="form-checkbox-field"
                  type="radio"
                  name="sort"
                  value="HIGH_TO_LOW_PRICE"
                />
                Price High to low
              </label>
            </div>
          </li>
    </div>

    )
}


export { PriceFilter };