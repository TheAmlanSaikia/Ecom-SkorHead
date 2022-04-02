
const getCategoryFilteredProducts=(products,category)=> {

if(Object.values(category).every( value => value === false)){
    return products;
}

return products && products.filter((product)=> category[product.categoryName]);
  




}

export{ getCategoryFilteredProducts };