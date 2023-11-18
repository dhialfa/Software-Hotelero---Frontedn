import React, { useState } from 'react';
import axios from 'axios';
import SelectCountry from './SelectCountry'
import '../../css/Book.css'; 
import Navbar from '../../components/mainPageComponents/Navbar';

function Book() {
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
    setFormData({ ...formData, [name]: value });
  };

  const actualizarDatos = async () => {
    try {
      const response = await axios.post('http://localhost:8000/client', formData);
      if (response.status === 200) {
        console.log('Datos actualizados exitosamente.');
      }
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
      
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarDatos();
  };

  return (
    <div>
      <Navbar/>
      <div className='background'>
        <div className='formulario'>
          <div className="formulario-container">
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cedula">Cédula:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cedula"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pais">País:</label>
                <SelectCountry/>
              </div>

              <div className="form-group">
                <label htmlFor="correo">Correo:</label>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
