import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">Soft Hotel</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/admin/main" className="nav-link">Main</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/rooms" className="nav-link">Habitaciones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/showclients" className="nav-link">Clientes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/showusers" className="nav-link">Usuarios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/booking" className="nav-link">Reservar</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>

    </nav>

  )
}


