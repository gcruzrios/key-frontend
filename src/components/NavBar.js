import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const idUsuario = localStorage.getItem("idUsuario");
  const nombreUsuario = localStorage.getItem("nombreUsuario");
  const rolUsuario = localStorage.getItem("rolUsuario");
  const organizacionUsuario = localStorage.getItem("organizacionUsuario");

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setMenu(true);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          SIPAM 2.0.0        
          </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/index">
                Inicio <span className="sr-only">(current)</span>
              </a>
            </li>
            

            <li className="nav-item">
              <a className="nav-link disabled" href="#"></a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {" "}
                <span className="sr-only text-white"></span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {" "}
                Usuario : {organizacionUsuario} - {nombreUsuario}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Opciones
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Configuración
                </a>

                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div className="text-center">
                  <Link to="/" onClick={() => logout()}>
                    Cerrar sesión
                  </Link>
                </div>
              </div>
            </li> 
          </ul> 

          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> 

            <li className="nav-item active">
              
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Opciones
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Configuración
                </a>

                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div className="text-center">
                  <Link to="/" onClick={() => logout()}>
                    Cerrar sesión
                  </Link>
                </div>
              </div>
            </li>
            
          </form> */} 
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
