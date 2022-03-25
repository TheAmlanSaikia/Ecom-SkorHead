import LogoImage from "../../assests/images/Logo Image.png";

const Logo = () => {
  return (
    <a href='/' className="ml-2">
      <img src={LogoImage} height='50' width='50' alt='Logo' />
      <p className='text-lg logo-text'>SkorHead</p>
    </a>
  );
};

export { Logo };
