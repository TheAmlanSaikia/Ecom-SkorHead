import "./Home.css";
import bannerImage from "../../assests/images/Shoe Banner Picture -1.jpg";
import { Navigation } from "../../components";
import { CategoriesCards } from "../../components/Category Cards/Category";

const Home = () => {
  return (
    <div className='grid-container'>
      <Navigation />
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
        <a
          href='/'
          className='btn btn-primary-round btn-primary-outline banner-btn absolute'>
          <h5>Take Me!</h5>
        </a>
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
      <footer className='footer footer-container'></footer>
    </div>
  );
};

export { Home };
