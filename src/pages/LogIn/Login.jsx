import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const inputRef = useRef(null);
  const LOG_IN = process.env.REACT_APP_SKORHEAD_LOGIN;
  const initialLogin = {
    username: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialLogin);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setLoginData({ ...loginData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(loginData));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const regexvalue =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexvalue.test(values.email.trim())) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const logInSuccess = async () => {
    try {
      const {
        data: { user, encodedToken },
      } = await axios.post(LOG_IN, loginData);
      localStorage.setItem("token", encodedToken);
      //   console.log(encodedToken, "Response block");
      console.log(user, encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      logInSuccess();
    }
  }, [formErrors]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='login-grid-container'>
      <main className='main main-login-container'>
        <div className='display-container-form'>
          <main className='form-container'>
            <form id='form' className='form' onSubmit={handleSubmit}>
              <h3 className='title-text'>Welcome Back</h3>
              <section className='form-control form-control-email'>
                <input
                  type='text'
                  className='form-input email-input'
                  id='email'
                  placeholder='Enter email'
                  ref={inputRef}
                  onChange={handleChange}
                  value={loginData.email}
                />
                <small className='class-error'>{formErrors.email}</small>
              </section>
              <section className='form-control form-control-password1'>
                <input
                  type='password'
                  className='form-input password1-input'
                  id='password'
                  placeholder='Enter Password'
                  onChange={handleChange}
                  value={loginData.password}
                />
                <small className='class-error'>{formErrors.password}</small>
                <div className='passwordforget-box flex-row justify-between mt-1'>
                  <div className='remember-me'>
                    <input
                      type='checkbox'
                      name='password-remember'
                      id='paswordcheckbox'
                    />
                    <label for='password-remember' className='text-sm'>
                      Remember me!
                    </label>
                  </div>
                  <a href='http://' className='text-sm link-text'>
                    Forgot password?
                  </a>
                </div>
              </section>
              <button className='btn-submit' type='submit'>
                LogIn
              </button>
              <button
                className='btn-submit btn-test'
                type='submit'
                onClick={() =>
                  setLoginData({
                    email: "adarshbalika@gmail.com",
                    password: "adarshbalika",
                  })
                }>
                Test Credentials
              </button>
              <div className='signup-box ml-auto mr-auto'>
                <p className='text-sm mt-1'>
                  Don't have an account?
                  <Link to='/signup' className='text-sm link-text'>
                    Sign up for Free!
                  </Link>
                </p>
              </div>
            </form>
          </main>
        </div>
      </main>
    </div>
  );
};

export { Login };
