import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/CreateClient.css';
import Navbar from '../../components/adminPageComponents/Navbar';
import { createUser } from '../api/user.api';

function CreateClient() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    isAdmin: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createUser(formData);
      alert('Creado correctamente')
      navigate('/admin/showusers')
    } catch (error) {
      // Puedes manejar los errores aquí
      console.error('Error al crear el Usuario:', error);
      alert('Usuario ya existe');
    }
    
  };

  return (
    <div>
      <Navbar />
      <div className='background'>
        <div className='formulario'>
          <div className="formulario-container">
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="userName">Nombre de usuario:</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="isAdmin">Administrador:   </label>
                <input
                  type="checkbox"
                  label="¿Es administrador?"
                  name="isAdmin"
                  checked={formData.isAdmin}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">Crear</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateClient;
