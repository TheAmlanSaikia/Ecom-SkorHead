import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrandFilter,
  CategoryFilter,
  Footer,
  PriceFilter,
  PriceRangeFilter,
  VerticalCards,
} from "../../components";
import { CircularProgress } from "@mui/material";
import { useFilter } from "../../context/Filtercontext";
import { useTitle } from "../../hooks/useTitle";

import {
  getSortedProducts,
  getCategoryFilteredProducts,
  getBrandFilteredProducts,
  getStockFilteredProducts,
  getPricedFilteredProducts,
} from "../../utility";
import "./Product.css";

const PRODUCTS = process.env.REACT_APP_SKORHEAD_PRODUCTS;

const Products = () => {
  const [productList, setProductList] = useState(null);
  const [loader, setLoader] = useState(true);
  useTitle("Products");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(PRODUCTS);
        const {
          data: { products },
        } = response;
        setProductList(products);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    })();
  }, []);

  const { state, dispatch } = useFilter();
  const sortedProducts = getSortedProducts(productList, state.sortBy);
  const inStockedProducts = getStockFilteredProducts(
    sortedProducts,
    state.inStock
  );
  const priceFilteredProducts = getPricedFilteredProducts(
    inStockedProducts,
    state.maxPrice
  );
  const categoryfilteredProducts = getCategoryFilteredProducts(
    priceFilteredProducts,
    state.categories
  );
  const brandfilteredProducts = getBrandFilteredProducts(
    categoryfilteredProducts,
    state.brands
  );

  const lengthOfProducts =
    brandfilteredProducts && brandfilteredProducts.length;

  return (
    <>
      {loader ? (
        <div className='flex-center body-loader'>
          <CircularProgress size={70} />
        </div>
      ) : (
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
              <PriceRangeFilter />
              <CategoryFilter />
              <BrandFilter />
            </ul>
          </aside>

          <main className='main main-container-product'>
            <div className='products-cards-display flex-row flex-wrap p-3'>
              {lengthOfProducts === 0 ? (
                <div className='flex-center body-loader'>
                  <h2>Oops! No Products.</h2>
                </div>
              ) : (
                productList &&
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
                      _id={_id}
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
                )
              )}
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export { Products };
