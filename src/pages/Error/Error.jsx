import "./Error.css";
import ErrorImage from "../../assests/images/Error Image.svg";
const ErrorPage = () => {
  return (
    <>
      <main className='page-container my-7 pb-7'>
        <section className='error-container ml-7'>
          <h1 className='themetext'>404</h1>
          <h2>Ooooops!</h2>
          <h3>Page Not Found!</h3>
          <p className='md-text'>The page doesnt exist or it was removed!</p>
        </section>
        <section className='image-box'>
          <img
            src={ErrorImage}
            alt='Banner'
            className='error-image responsive-image'
          />
        </section>
      </main>
    </>
  );
};

export { ErrorPage };
