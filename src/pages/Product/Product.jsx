import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrandFilter,
  CategoryFilter,
  Footer,
  PriceFilter,
  VerticalCards,
} from "../../components";

import { useFilter } from "../../context/Filtercontext";
import {
  getSortedProducts,
  getCategoryFilteredProducts,
  getBrandFilteredProducts,
} from "../../utility";
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

  const { state, dispatch } = useFilter();
  const sortedProducts = getSortedProducts(productList, state.sortBy);
  const categoryfilteredProducts = getCategoryFilteredProducts(
    sortedProducts,
    state.categories
  );
  const brandfilteredProducts = getBrandFilteredProducts(
    categoryfilteredProducts,
    state.brands
  );

  const lengthOfProducts =
    brandfilteredProducts && brandfilteredProducts.length;

  return (
    <div className='grid-container-product'>
      <header className='header-container flex-col'>
        <h6 className='header-info'>
          SkorHead Products-
          <span className='text-md'> {lengthOfProducts} Items</span>
        </h6>
      </header>

      <aside className='aside-container flex-col'>
        <div className='filter-title-container flex-row items-center justify-between'>
          <button className='no-style pointer'>
            <h6 className='filter-header'>FILTER</h6>
          </button>
          <button
            className='no-style pointer'
            onClick={() => dispatch({ type: "ALL_CLEAR", payload: "" })}>
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
            brandfilteredProducts.map(
              ({
                _id,
                title,
                brand,
                price,
                image,
                discount,
                categoryName,
                inStock,
                description,
              }) => (
                <VerticalCards
                  id={_id}
                  title={title}
                  brand={brand}
                  price={price}
                  image={image}
                  discount={discount}
                  categoryName={categoryName}
                  inStock={inStock}
                  description={description}
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
