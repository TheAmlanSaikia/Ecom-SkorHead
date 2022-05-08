import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {


 const [ formdata, setFormData ] = useState({
     username:"",
     email:"",
     password:"",
     confirmpassword:""
 })

  return (
    <div className='grid-login-container'>
      <main className='main main-login-container'>
        <div className='display-container-form'>
          <main className='form-container signup-form'>
            <form id='form' className='form'>
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
                  onChange={(e)=> setFormData({...formdata,username: e.target.value})}
                />
                <small className='error-msg'> Error Message </small>
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
                  onChange={(e)=> setFormData({...formdata,email: e.target.value})}
                />
                <small className='error-msg'> Error Message </small>
              </section>
              <section className='form-control form-control-password1'>
                <label for='password1' className='form-label pasword1-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-input password1-input'
                  id='password1'
                  placeholder='Enter Password'
                />
                <small className='error-msg'> Error Message </small>
              </section>
              <section className='form-control form-control-password2'>
                <label for='password2' className='form-label password2-label'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  className='form-input password2-input'
                  id='password2'
                  placeholder='Confirm Password'
                />
                <small className='error-msg'> Error Message </small>
              </section>
              <button className='btn-submit' type='submit'>
                Submit
              </button>
            </form>
          </main>
        </div>
        {console.log(formdata)}
      </main>
    </div>
  );
};

export { SignUp };
