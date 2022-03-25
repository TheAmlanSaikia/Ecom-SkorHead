import "./Category.css";
import { CategoriesData } from "../../data/Homedata";

const CategoriesCards = () => {
  return (
    <>
      {CategoriesData.map((e) => (
        <main
          style={{ backgroundColor: e.color }}
          className='category-card card-shadow mr-1'>
          <section className='category-image-container'>
            <img src={e.image} alt='Category' className='category-image' />
          </section>
          <h2 className='ml-1'>Shop</h2>
          {console.log(e)}
          <h2 className='ml-1 pb-1'>{e.category}</h2>
        </main>
      ))}
    </>
  );
};

export { CategoriesCards };
