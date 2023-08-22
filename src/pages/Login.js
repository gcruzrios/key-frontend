import FormLogin from "../components/FormLogin";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    obtenerToken();
  }, []);

  const obtenerToken = async () => {
    const auth_user = {
      Username: "c0n4p4n$AppSIPAMUser",
      Password: "c0n4p4n$AppSIPAMpass",
    };
    const respuesta = await axios.post(`/wsSIPAM/Authenticate`, auth_user);

    const token = respuesta.data.Token;

    localStorage.setItem("Token", token);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const ingreso = { usuario, password };
    const Token = localStorage.getItem("Token");

    console.log(Token);

    const response = await axios.post(`/wsSIPAM/GetUsuario`, ingreso, {
      headers: { Authorization: "Bearer " + Token },
    });

    const mensaje = response.data.CodigoResultado;
    const mensaje_alerta = response.data.MensajeResultado;

    if (mensaje !== "200") {
      Swal.fire({
        text: "Usuario o contraseña incorrectas..",
        icon: "error",
      });
    } else {
      const idUsuario = response.data.Resultado[0].idUsuario;
      const nombreUsuario = response.data.Resultado[0].nombreCompleto;
      const rolUsuario = response.data.Resultado[0].nombreRol;
      const estadoUsuario = response.data.Resultado[0].estado;

      const idOrganizacion = response.data.Resultado[0].idOrganizacion;
      const organizacionUsuario = response.data.Resultado[0].organizacion;
      const correoUsuario = response.data.Resultado[0].correo;

      console.log("EstadoLogin: " + estadoUsuario);

      const estado = "activo";
      localStorage.setItem("Estado", estadoUsuario);
      localStorage.setItem("idUsuario", idUsuario);
      localStorage.setItem("nombreUsuario", nombreUsuario);
      localStorage.setItem("rolUsuario", rolUsuario);
      localStorage.setItem("correoUsuario", correoUsuario);
      localStorage.setItem("organizacionUsuario", organizacionUsuario);
      localStorage.setItem("idOrganizacion", idOrganizacion);

      window.location.href = "/index";
    }
  };
  return (
    <div>
      <main className="main-login">
        {/* <!-- IMAGE SECTION --> */}
        <div className="img-container">
          {/* <img src="/../public/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg" alt="Imagen de ingreso" />  */}
        </div>
        {/* <!-- INFO SECTION --> */}
        <div className="info-login">
          <div className="form-wrapper">
            <h1 className="text-dark">Bienvenido</h1>

            <form class="form-signin">
              <img
                class="mb-4"
                src="https://conapam.go.cr/wp-content/uploads/2023/02/CONAPAM_WEB.jpg"
                alt=""
                width="125"
                height="170"
              />
              <h1 class="h3 mb-3 font-weight-normal">Ingrese sus datos</h1>
              <label for="inputEmail" class="sr-only">
                Email
              </label>
              <input
                type="email"
                id="username"
                class="form-control"
                placeholder="Su Email "
                required 
                onChange={(e) => setUsuario(e.target.value)}
                
                autofocus
              />
              <label for="inputPassword" class="sr-only">
                Contraseña
              </label>
              <input
                type="password"
               
                id="password"
                class="form-control"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Su Password"
                required
              />
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Recordarme
                </label>
              </div>
              <button class="btn btn-lg btn-primary btn-block"  onClick={handleLogin} >
                Ingresar
              </button>
            </form>
          </div>
          <footer className="footer">© COPYRIGHT - CONAPAM 2023</footer>
        </div>
      </main>
    </div>
  );
};

export default Login;
