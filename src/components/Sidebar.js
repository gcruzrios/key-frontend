import React from 'react'

const Sidebar = () => {
  return (
    <div>

<nav className="nav_styles">
    <div>
      <img src="./imagenes/logo.png" alt="Logo CONAPAM" className="logo"/>
    </div>
    <ul className="ul_styles">
      <li className="list_item"><a className="a" href="dashbord.html"><i className='bx bxs-dashboard'></i> Dashboard</a> </li>
      <li className="list_item"><a href="lista_usuarios.html" className="a"><i className='bx bxs-dashboard'></i> Usuarios</a> </li>
      <li className="list_item"><a href="consultar_planilla.html" className="a"><i className='bx bxs-dashboard'></i> Consultar Planilla</a> </li>
      <li className="list_item"><a href="#" className="a"><i className='bx bxs-dashboard'></i> Distribución de recursos</a></li>
      <li className="list_item"><a href="lista_leyes.html" className="a"><i className='bx bxs-dashboard'></i> Leyes</a></li>
      <li className="list_item"><a href="lista_pam.html" className="a"><i className='bx bxs-dashboard'></i> PAM</a></li>
      <li className="list_item"><a href="lista_organizaciones.html" className="a"><i className='bx bxs-dashboard'></i> Organizaciones</a></li>
    </ul>
  </nav>

    </div>
  )
}

export default Sidebar