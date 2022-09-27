const getPricedFilteredProducts = (products, maxPrice) => {
  return products && products.filter((item) => Number(item.price) <= Number(maxPrice));
};

export { getPricedFilteredProducts };
