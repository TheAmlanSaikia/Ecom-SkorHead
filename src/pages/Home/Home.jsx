import "./Home.css";
import bannerImage from "../../assests/images/Shoe Banner Picture -1.jpg";
import { CategoriesCards } from "../../components/Category Cards/Category";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context";


const Home = () => {
 
  useTitle("Home");
  const { dispatch } = useFilter();

  return (
    <div className='home-grid-container'>
      <header className='header-banner'>
        <section className='banner-wrapper flex-row justify-center relative'>
          <img
            src={bannerImage}
            alt='Banner'
            className='banner-image responsive-image'
          />
        </section>
        <p className='banner-title absolute'>
          Hungry for a sneaker?<span className='themetext'>Perfect.</span>
        </p>
        <Link
          to='/products'
          className='btn btn-primary-round btn-primary-outline banner-btn absolute'
           onClick={() => dispatch({ type: "ALL_CLEAR", payload: "" })}>
          <h5>Take Me!</h5>
        </Link>
      </header>
      <main className='main main-container mt-2'>
        <h2 className='mid-text'>
          We Sell The <span className='themetext'>Shoe.</span>
          <br /> You Make The <span className='themetext'>Stories.</span>
        </h2>
        <h3 className='main-title pt-4'>Featured Categories</h3>
        <section className='home-cards-display mt-5'>
          <CategoriesCards />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export { Home };
