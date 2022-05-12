import { Link } from "react-router-dom";
import { useRef,useEffect } from "react";
import "./Login.css";

const Login = () => {
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div className='login-grid-container'>
      <main className='main main-login-container'>
        <div className='display-container-form'>
          <main className='form-container'>
            <form id='form' className='form'>
              <h3 className='title-text'>Welcome Back</h3>
              <section className='form-control form-control-email'>
                <input
                  type='text'
                  className='form-input email-input'
                  id='email'
                  placeholder='Enter email'
                  ref={inputRef}
                />
                <small className='error-msg'>Error Message</small>
              </section>
              <section className='form-control form-control-password1'>
                <input
                  type='password'
                  className='form-input password1-input'
                  id='password1'
                  placeholder='Enter Password'
                />
                <small className='error-msg'>Error Message</small>
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
              <button className='btn-submit btn-test' type='submit'>
                Test Credentials
              </button>
              <div className='signup-box ml-auto mr-auto'>
                <p className='text-sm mt-1'>
                  Don't have an account?
                  <Link to ='/signup' className='text-sm link-text'>
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
