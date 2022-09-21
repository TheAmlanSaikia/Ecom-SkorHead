const getBrandFilteredProducts = (products, brands) => {
  if (Object.values(brands).every((value) => value === false)) {
    return products;
  }
  return products && products.filter((product) => brands[product.brand]);
};

export {
  getBrandFilteredProducts
};