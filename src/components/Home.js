import React from "react";
import TableHome from "./TableHome";

const Home = () => {
  return (
    <div>
      {/* <!-- inicio contenido --> */}
      <div className="div-main">
        <div className="container-lg">
          <section className="content-main mb-5"></section>


          <section className="cards">
            <div className="row row-cols-1 row-cols-md-3">

              {/* Caja Número 1 */}
              <div className="col mb-4">
                <div className="card">
                  <div className="card-body wrapper-title">
                    <h5 className="card-title">Notificaciones</h5>
                  </div>

                  <img
                    src="./imagenes/campana.png"
                    className="card-img-top img-cards"
                    alt="Icono de notificaciones"
                  />

                  <div className="card-body">
                    <p className="card-text text-notification">
                      No hay notificaciones en este momento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Caja Número 2 */}

              <div className="col mb-4">
                <div className="card">
                  <div className="card-body wrapper-title">
                    <h5 className="card-title">Estado de PAM</h5>
                  </div>

                  <img
                    src="./imagenes/datos-PAM.png"
                    className="card-img-top img-cards-two"
                    alt="..."
                  />

                  <div className="card-body">
                    <div className="applicable_style">
                      <i className="bx bxs-square"></i>
                      <p className="card-text">59 Aplicables</p>
                    </div>
                    <div className="no_applicable_style">
                      <i className="bx bxs-square no_appli"></i>
                      <p className="card-text">20 No aplicables</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caja Número 3  */}
              <div className="col mb-4">
                <div className="card">
                  <div className="card-body wrapper-title">
                    <h5 className="card-title">Estado de PAM</h5>
                  </div>

                  <img
                    src="./imagenes/datos-PAM.png"
                    className="card-img-top img-cards-two"
                    alt="..."
                  />

                  <div className="card-body">
                    <div className="applicable_style">
                      <i className="bx bxs-square"></i>
                      <p className="card-text">59 Aplicables</p>
                    </div>
                    <div className="no_applicable_style">
                      <i className="bx bxs-square no_appli"></i>
                      <p className="card-text">20 No aplicables</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <TableHome/>
        </div>
      </div>
    </div>
  );
};

export default Home;
