import "./Category.css";
import { Link } from "react-router-dom";
import { useCategory, useFilter } from "../../context";

const CategoriesCards = () => {
  const { dispatch } = useFilter();
  const { categoriesdata } = useCategory();
  return (
    <>
      {categoriesdata &&
        categoriesdata.map((item) => (
          <main
            key={item._id}
            style={{ backgroundColor: item.color }}
            className='category-card card-shadow mr-1'
            onClick={() =>
              dispatch({ type: "ADD_CATEGORIES", payload: item.categoryName })
            }>
            <Link to='/products'>
              <section className='category-image-container'>
                <img
                  src={item.image}
                  alt='Category'
                  className='category-image'
                />
              </section>
              <h2 className='ml-1 category-text-color'>Shop</h2>
              <h2 className='ml-1 pb-1 category-text-color'>
                {item.categoryName}
              </h2>
            </Link>
            {categoriesdata && console.log(categoriesdata)}
          </main>
        ))}
    </>
  );
};

export { CategoriesCards };
