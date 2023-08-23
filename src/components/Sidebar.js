import React from 'react'

const Sidebar = () => {
  return (
    <div>

<nav className="nav_styles">
    <div>
    
      <img src="https://conapam.go.cr/wp-content/uploads/2023/02/CONAPAM_WEB.jpg" alt="Logo CONAPAM"  width="125" height="170" className="mt-4" />
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