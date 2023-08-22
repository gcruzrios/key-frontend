import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderMain = () => {
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
      {/* <!-- inicio header --> */}
      <header className="header">
        {/* <!-- Buscar --> */}
        <div className="input-wrapper">
          <input
            type="search"
            className="input"
            placeholder="Buscar en el sitio"
          />
          <i className="bx bx-search input-icon"></i>
        </div>
        {/* <!-- Fin Buscar --> */}

        <div className="container-headers-botton">
          {/* <!-- dropdown Inicio --> */}
          <div className="dropdown ">
            <button
              className="btn btn-secondary dropdown-toggle dropdown-hover"
              type="button"
              id="btn_orgs"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {organizacionUsuario}
            </button>
            <div
              className="dropdown-menu data_orgs"
              aria-labelledby="dropdownMenuButton"
            >
              <p className="organitation-title">Organizaciones</p>
              <a className="dropdown-item" href="#">
                Organizacion 1{" "}
                <span className="ddi_current show">(actual)</span>
              </a>

              <a className="dropdown-item lineTop" href="#">
                Lista de Organizaciones
              </a>
            </div>
          </div>
          {/* <!-- dropdown Fin --> */}

          {/* <!-- user inicio --> */}
          <div className="dropdown ">
            <button
              className="btn btn-secondary dropdown-toggle dropdown-hover"
              type="button"
              id="btn_user"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bxs-user"></i>
              <h6>{nombreUsuario}</h6>
            </button>
            <div
              className="dropdown-menu data_user"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item" href="#">
                Configuraciones
              </a>
             
             <a className="dropdown-item" href="#">Cerrar sesión</a> 
             <Link
                to="/"
                onClick={() => logout()}
              >
                 Cerrar sesión
              </Link>
            </div>
          </div>
          {/* <!-- user Fin --> */}
        </div>
      </header>
    </div>
  );
};

export default HeaderMain;
