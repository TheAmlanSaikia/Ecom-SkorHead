import "./Category.css";
import { CategoriesData } from "../../data/Homedata";
import { Link } from "react-router-dom";
import { useFilter } from "../../context";

const CategoriesCards = () => {
  const { dispatch } = useFilter();

  return (
    <>
      {CategoriesData.map((e) => (
        <main
          key={e.category}
          style={{ backgroundColor: e.color }}
          className='category-card card-shadow mr-1'
          onClick={() =>
            dispatch({ type: "ADD_CATEGORIES", payload: e.category })
          }>
          <Link to='/products'>
            <section className='category-image-container'>
              <img src={e.image} alt='Category' className='category-image' />
            </section>
            <h2 className='ml-1 category-text-color'>Shop</h2>
            <h2 className='ml-1 pb-1 category-text-color'>{e.category}</h2>
          </Link>
        </main>
      ))}
    </>
  );
};

export { CategoriesCards };
