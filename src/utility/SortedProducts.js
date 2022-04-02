

const getSortedProducts = (products, sortby) => {
  if (sortby === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => b.price - a.price);
  }

  if (sortby === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => a.price - b.price);
  }

  return products;
};

export { getSortedProducts };
