import React from 'react'

const Header = () => {
  return (
    <div>
         {/* <!-- inicio header --> */}
    <header class="header">

      {/* <!-- Buscar --> */}
      <div class="input-wrapper">
        <input type="search" class="input" placeholder="Buscar en el sitio" />
        <i class='bx bx-search input-icon'></i>
      </div>
      {/* <!-- Fin Buscar --> */}

      <div class="container-headers-botton">
        {/* <!-- dropdown Inicio --> */}
        <div class="dropdown ">
          <button class="btn btn-secondary dropdown-toggle dropdown-hover" type="button" id="btn_orgs"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Organización 1
          </button>
          <div class="dropdown-menu data_orgs" aria-labelledby="dropdownMenuButton">
            <p class="organitation-title">Organizaciones</p>
            <a class="dropdown-item" href="#">Organizacion 1 <span class="ddi_current show">(actual)</span></a>
            <a class="dropdown-item" href="#">Organizacion 2 <span class="ddi_current">(actual)</span></a>
            <a class="dropdown-item" href="#">Organizacion 3 <span class="ddi_current">(actual)</span></a>
            <a class="dropdown-item" href="#">Organizacion 4 <span class="ddi_current">(actual)</span></a>
            <a class="dropdown-item" href="#">Organizacion 5 <span class="ddi_current">(actual)</span></a>
            <a class="dropdown-item" href="#">Organizacion 6 <span class="ddi_current">(actual)</span></a>
            <a class="dropdown-item lineTop" href="#">Lista de Organizaciones</a>
          </div>
        </div>
        {/* <!-- dropdown Fin --> */}

        {/* <!-- user inicio --> */}
        <div class="dropdown ">
          <button class="btn btn-secondary dropdown-toggle dropdown-hover" type="button" id="btn_user"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class='bx bxs-user' style='color:#ffffff'></i>
          </button>
          <div class="dropdown-menu data_user" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Configuraciones</a>
            <a class="dropdown-item" href="#">Cerrar sesión</a>
          </div>
        </div>
        {/* <!-- user Fin --> */}
      </div>
    </header>
    </div>
  )
}

export default Header