import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../css/CreateClient.css';
import Navbar from '../../components/adminPageComponents/Navbar';
import { updateClient } from '../api/client.api';

function EditClient() {
  const location = useLocation();
  const client = location.state ? location.state.client : null;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    idDoc: '',
    country: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    // Si hay un objeto de cliente, establecer el estado con la información del cliente
    if (client) {
      setFormData(client);
    }
  }, [client]);

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
      await updateClient(client.id, formData);
      alert('Actualizado correctamente');
      navigate('/admin/showclients');
    } catch (error) {
      console.error('Error al actualizar el cliente:', error);
      alert('Error al actualizar el cliente');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='background'>
        <div className='formulario'>
          <div className="formulario-container">
            <h2>Actualizar Cliente</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="idDoc">Cédula:</label>
                <input
                  type="text"
                  className="form-control"
                  id="idDoc"
                  name="idDoc"
                  value={formData.idDoc}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pais">País:</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
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