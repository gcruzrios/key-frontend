import React from "react";
import FormLogin from "../components/FormLogin";

const Login = () => {
  return (
    <div>
      <main className="main-login">
        {/* <!-- IMAGE SECTION --> */}
        <div className="img-container">
           <img src="/../public/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg" alt="Imagen de ingreso" /> 
        </div>
        {/* <!-- INFO SECTION --> */}
        <div className="info-login">
          <div className="form-wrapper">
            <h1 className="text-dark">Bienvenido</h1>
            
            <form class="form-signin">
      <img class="mb-4" src="https://conapam.go.cr/wp-content/uploads/2023/02/CONAPAM_WEB.jpg" alt="" width="125" height="170"/>
      <h1 class="h3 mb-3 font-weight-normal">Ingrese sus datos</h1>
      <label for="inputEmail" class="sr-only">Email</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Su Email " required autofocus/>
      <label for="inputPassword" class="sr-only">Contraseña</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Su Password" required/>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
          </div>
          <footer className="footer">© COPYRIGHT - CONAPAM 2023</footer>
        </div>
      </main>
    </div>
  );
};

export default Login;
