import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../css/CreateClient.css';
import Navbar from '../../components/adminPageComponents/Navbar';
import { updateUser } from '../api/user.api';

function EditClient() {
  const location = useLocation();
  const user = location.state ? location.state.user : null;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    isAdmin: false,
  });

  useEffect(() => {
    // Si hay un objeto de usuario, establecer el estado con la información del usuario
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Para manejar los campos de checkbox
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      // Para otros campos
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user.id, formData);
      alert('Actualizado correctamente');
      navigate('/admin/showusers');
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      alert('Error al actualizar el usuario');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='background'>
        <div className='formulario'>
          <div className="formulario-container">
            <h2>Actualizar Usuario</h2>
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
                <label htmlFor="isAdmin">Administrador:</label>
                <input
                  type="checkbox"
                  label="¿Es administrador?"
                  name="isAdmin"
                  checked={formData.isAdmin}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditClient;
