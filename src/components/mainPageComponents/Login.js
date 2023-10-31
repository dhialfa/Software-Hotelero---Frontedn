import React, { useState } from 'react';
import '../../css/Login.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/mainPageComponents/Navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    console.log("prueba");
  };

  return (
    <div>
      <Navbar/>
      <div className="background">
        <div className="login">
          <div className="login-container">
            <h2>Iniciar sesión</h2>
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="nombre">Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <Link to="/admin">
                <button onClick={handleLogin}>Iniciar sesión</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;