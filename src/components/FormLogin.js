import React from "react";

const FormLogin = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-10">
          <main className="form-signin w-100 m-auto">
            <form>
              <img
                className="mb-4"
                src="../assets/brand/bootstrap-logo.svg"
                alt=""
                width="72"
                height="57"
              />
              <h1 className="h3 mb-3 fw-normal text-white">Please sign in</h1>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3 text-white">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
              <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
