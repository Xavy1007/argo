import React from 'react';
import { Link } from 'react-router-dom';
const Menu=()=>{
    return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="./">Inicio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/categorias">Categorias</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/almacenes">Almacenes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/articulos">Articulos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/proveedores">Provedores</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </>
}

export default Menu;