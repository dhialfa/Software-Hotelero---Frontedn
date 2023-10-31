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
              <NavLink to="/" className="nav-link">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/rooms" className="nav-link">Habitaciones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/book" className="nav-link">Reservar</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>

    </nav>

  )
}


