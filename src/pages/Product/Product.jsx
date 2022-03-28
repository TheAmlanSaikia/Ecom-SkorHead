import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrandFilter,
  CategoryFilter,
  Footer,
  NilStockVerticalCards,
  PriceFilter,
  VerticalCards,
} from "../../components";
import "./Product.css";

const Products = () => {
  
  
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        const {
          data: { products },
        } = response;
        setProductList(products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (

    <div className='grid-container-product'>
      
      <header className='header-container flex-col'>
        <h6 className='header-info'>
          SkorHead Products-<span className='text-md'> 200 Items</span>
        </h6>
      </header>

      <aside className='aside-container flex-col'>
        <div className='filter-title-container flex-row items-center justify-between'>
          <button className='no-style pointer'>
            <h6 className='filter-header'>FILTER</h6>
          </button>
          <button className='no-style pointer'>
            <p className='text-md filter-clear'>CLEAR ALL</p>
          </button>
        </div>
        <ul className='list-style-none filter-list'>
          <PriceFilter />
          <CategoryFilter />
          <BrandFilter />
        </ul>
      </aside>

      <main className='main main-container-product'>
        <div className='products-cards-display flex-row flex-wrap p-3'>
          {productList &&
            productList.map(
              ({
                _id,
                title,
                brand,
                price,
                image,
                discount,
                categoryName,
                inStock,
              }) =>
                inStock === true ? (
                  <VerticalCards
                    id={_id}
                    title={title}
                    brand={brand}
                    price={price}
                    image={image}
                    discount={discount}
                    categoryName={categoryName}
                  />
                ) : (
                  <NilStockVerticalCards
                    id={_id}
                    title={title}
                    brand={brand}
                    price={price}
                    image={image}
                    discount={discount}
                    categoryName={categoryName}
                  />
                )
            )}
        </div>
      </main>
    <Footer />
    </div>
  );
};

export { Products };
