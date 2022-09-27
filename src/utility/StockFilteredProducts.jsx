/**
 * 
 * @param {*} products 
 * @param {*} stockDisplay 
 * @returns In Stock and All Products
 */

const getStockFilteredProducts = (products, stockDisplay) => {
  if (stockDisplay) {
    return products && products.filter((item) => item.inStock === true);
  } else return products;
};

export { getStockFilteredProducts };
