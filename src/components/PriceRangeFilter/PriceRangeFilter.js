import { useState } from "react";

const PriceRangeFilter = () => {
    const [ range, setRange ] = useState(0);
    return (
    <div>
      <li className='filter-category-container'>
      <div className='filter-price-container'>
          <p className='text-lg filter-name'>PRICE RANGE</p>
           <label className="form-label">
           <input type="checkbox" />
           In Stock Only
           </label>
           <div>
           <p className='form-label text-md'>Price Range: 0 to {range}</p>
            <input type="range" value={range} min="0" max="20000" onChange={(e)=> setRange(e.target.value)}  />
           </div>      
       </div>
      </li>
      {console.log(range)}
    </div>
  );
};

export   { PriceRangeFilter };
