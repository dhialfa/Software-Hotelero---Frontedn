import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/CreateClient.css'; 
import Navbar from '../../components/adminPageComponents/Navbar';
import { createClient } from '../api/client.api';

function CreateClient() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    idDoc: '',
    country: '',
    email: '',
    phone: '',
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
      const response = await createClient(formData);
      alert('Creado correctamente')
      navigate('/admin/showclients')
    } catch (error) {
      // Puedes manejar los errores aquí
      console.error('Error al crear el cliente:', error);
      alert('La persona ya existe');
    }
    
  };
  
  return (
    <div>
      <Navbar/>
      <div className='background'>
        <div className='formulario'>
          <div className="formulario-container">
            <h2>Crear Cliente</h2>
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

              <button type="submit" className="btn btn-primary">Crear</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateClient;
