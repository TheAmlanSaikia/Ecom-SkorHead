import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import "./SignUp.css";

const SignUp = () => {
  const inputRef = useRef(null);
  const SIGN_UP = process.env.REACT_APP_SKORHEAD_SIGNUP;
  const { setUser, setUserLogin } = useAuth();
  const initialForm = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formdata, setFormData] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formdata, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formdata));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const regexvalue =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexvalue.test(values.email.trim())) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Passwords must be more than 6 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Password is required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Password doesnt match";
    }
    return errors;
  };

  const signupSuccess = async () => {
    try {
      const {
        data: { encodedToken, createdUser },
        status,
      } = await axios.post(SIGN_UP, formdata);
      if (status === 201) {
        setUserLogin(true);
        console.log(createdUser.username)
        setUser(createdUser.username);
        localStorage.setItem("token", encodedToken);
        navigate(from, { replace: true });
      } else {
        console.log("Something  went wrong");
       }
    } catch (error) {
      error.response.status === 422
        ? setFormErrors({ ...formErrors, email: "The email is already taken" })
        : setFormErrors({ ...formErrors, email: "Oops,something went wrong!" });
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      signupSuccess();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='grid-login-container'>
      <main className='main main-login-container'>
        <div className='display-container-form'>
          <main className='form-container signup-form'>
            <form id='form' className='form' onSubmit={handleSubmit}>
              <h3 className='title-text'> Register Here </h3>
              <section className='form-control form-control-username'>
                <label for='username' className='form-label username-label'>
                  Username
                </label>
                <input
                  type='text'
                  className='form-input username-input'
                  id='username'
                  value={formdata.username}
                  placeholder='Enter Username'
                  onChange={handleChange}
                  ref={inputRef}
                />
                <small className='class-error'>{formErrors.username}</small>
              </section>
              <section className='form-control form-control-email'>
                <label for='email' className='form-label email-label'>
                  Email
                </label>
                <input
                  type='text'
                  className='form-input email-input'
                  id='email'
                  value={formdata.email}
                  placeholder='Enter email'
                  onChange={handleChange}
                />
                <small className='class-error'>{formErrors.email}</small>
              </section>
              <section className='form-control form-control-password1'>
                <label for='password1' className='form-label pasword1-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-input password1-input'
                  id='password'
                  value={formdata.password}
                  placeholder='Enter Password'
                  onChange={handleChange}
                />
                <small className='class-error'>{formErrors.password}</small>
              </section>
              <section className='form-control form-control-password2'>
                <label for='password2' className='form-label password2-label'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  className='form-input password2-input'
                  id='confirmpassword'
                  value={formdata.confirmpassword}
                  placeholder='Confirm Password'
                  onChange={handleChange}
                />
                <small className='class-error'>
                  {formErrors.confirmpassword}
                </small>
              </section>
              <button className='btn-submit' type='submit'>
                Submit
              </button>
            </form>
          </main>
        </div>
      </main>
    </div>
  );
};

export { SignUp };
