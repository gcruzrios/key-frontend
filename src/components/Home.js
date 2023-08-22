import React from 'react'

const Home = () => {
  return (
    <div>
        {/* <!-- inicio contenido --> */}
    <div class="div-main">
      <section>
        <h1 class="title-page">Dashboard</h1>
      </section>
      <section class="content-main lineBot">
        <div>
        <p class="lineBot-text">Vista General</p>
       </div>
        <div class="dropdown ">
          <button class="btn btn-save dropdown-toggle dropdown-hover " type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            GUARDAR
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Como imagene</a>
            <a class="dropdown-item lineTop" href="#">Como PDF</a>
          </div>
        </div>

      </section>
      <section class="cards">
        <div class="row row-cols-1 row-cols-md-3">

          <div class="col mb-4">
            <div class="card">
              <div class="card-body wrapper-title">
                <h5 class="card-title">Notificaciones</h5>
              </div>
              
              <img src="./imagenes/campana.png" class="card-img-top img-cards" alt="Icono de notificaciones"/>

              <div class="card-body">
                <p class="card-text text-notification">No hay notificaciones en este momento.</p>
              </div>
            </div>
          </div>

          <div class="col mb-4">
            <div class="card">
              <div class="card-body wrapper-title">
                <h5 class="card-title">Estado de PAM</h5>
              </div>
              
              <img src="./imagenes/datos-PAM.png" class="card-img-top img-cards-two" alt="..."/>

              <div class="card-body">
                <div class="applicable_style"><i class='bx bxs-square'></i><p class="card-text">59 Aplicables</p></div>
                <div class="no_applicable_style"><i class='bx bxs-square no_appli'></i><p class="card-text">20 No aplicables</p></div>
              </div>
            </div>
          </div>


        </div>
      </section>

    </div>

    </div>
  )
}

export default Home