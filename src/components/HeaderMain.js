import React from 'react'

const HeaderMain = () => {
  return (
    <div>
         {/* <!-- inicio header --> */}
    <header className="header">

      {/* <!-- Buscar --> */}
      <div className="input-wrapper">
        <input type="search" className="input" placeholder="Buscar en el sitio" />
        <i className='bx bx-search input-icon'></i>
      </div>
      {/* <!-- Fin Buscar --> */}

      <div className="container-headers-botton">
        {/* <!-- dropdown Inicio --> */}
        <div className="dropdown ">
          <button className="btn btn-secondary dropdown-toggle dropdown-hover" type="button" id="btn_orgs"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Organización 1
          </button>
          <div className="dropdown-menu data_orgs" aria-labelledby="dropdownMenuButton">
            <p className="organitation-title">Organizaciones</p>
            <a className="dropdown-item" href="#">Organizacion 1 <span className="ddi_current show">(actual)</span></a>
      
            <a className="dropdown-item lineTop" href="#">Lista de Organizaciones</a>
          </div>
        </div>
        {/* <!-- dropdown Fin --> */}

        {/* <!-- user inicio --> */}
        <div className="dropdown ">
          <button className="btn btn-secondary dropdown-toggle dropdown-hover" type="button" id="btn_user"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className='bx bxs-user'></i>
          </button>
          <div className="dropdown-menu data_user" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Configuraciones</a>
            <a className="dropdown-item" href="#">Cerrar sesión</a>
          </div>
        </div>
        {/* <!-- user Fin --> */}
      </div>
    </header>
    </div>
  )
}

export default HeaderMain