import "./SignUp.css";
const SignUp = () => {
  return (
    <div class='grid-login-container'>
      <main class='main main-login-container'>
        <div class='display-container-form'>
          <main class='form-container'>
            <form id='form' class='form'>
              <h3 class='title-text'>Register Here</h3>
              <section class='form-control form-control-username'>
                <label for='username' class='form-label username-label'>
                  Username
                </label>
                <input
                  type='text'
                  class='form-input username-input'
                  id='username'
                  placeholder='Enter Username'
                />
                <small class='error-msg'>Error Message</small>
              </section>

              <section class='form-control form-control-email'>
                <label for='email' class='form-label email-label'>
                  Email
                </label>
                <input
                  type='text'
                  class='form-input email-input'
                  id='email'
                  placeholder='Enter email'
                />
                <small class='error-msg'>Error Message</small>
              </section>

              <section class='form-control form-control-password1'>
                <label for='password1' class='form-label pasword1-label'>
                  Password
                </label>
                <input
                  type='password'
                  class='form-input password1-input'
                  id='password1'
                  placeholder='Enter Password'
                />
                <small class='error-msg'>Error Message</small>
              </section>

              <section class='form-control form-control-password2'>
                <label for='password2' class='form-label password2-label'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  class='form-input password2-input'
                  id='password2'
                  placeholder='Confirm Password'
                />
                <small class='error-msg'>Error Message</small>
              </section>
              <button class='btn-submit' type='submit'>
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
