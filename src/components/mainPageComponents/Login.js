import React, { useState } from 'react';
import '../../css/Login.css';
import Navbar from '../../components/mainPageComponents/Navbar';
import { getAllUser } from '../api/user.api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();  // Evita que el formulario se envíe automáticamente
    try {
      const response = await getAllUser();  
      const user = response.data.find((user) => user.userName === username && user.password === password);
      if (user) {
        navigate('/admin/main')
      } else {
        console.error('Credenciales incorrectas');
        alert("Nombre de usuario o contrasena invalidos");
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert("Prueba");
    }
  };

  return (
    <div>
    <Navbar />
    <div className="background">
      <div className="login">
        <div className="login-container">
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">Iniciar sesión</button>
          </form>

        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;