import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/CreateClient.css'; 
import Navbar from '../../components/adminPageComponents/Navbar';
import { createRoom } from '../api/rooms.api';

function CreateRoom() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    numRoom: '',
    name: '',
    numBeds: '',
    kindRoom: '',
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
      const response = await createRoom(formData);
      alert('Creado correctamente')
      navigate('/admin/rooms')
    } catch (error) {
      // Puedes manejar los errores aquí
      console.error('Error al crear el cliente:', error);
      alert('Cuarto ya existe');
    }
    
  };
  
  return (
    <div>
      <Navbar/>
      <div className='background'>
        <div className='formulario'>
          <div className="formulario-container">
            <h2>Crear Habitacion</h2>
            <form onSubmit={handleSubmit}>
  
              <div className="form-group">
                <label htmlFor="numRoom">Habitacion:</label>
                <input
                  type="text"
                  className="form-control"
                  id="numRoom"
                  name="numRoom"
                  value={formData.numRoom}
                  onChange={handleChange}
                />
              </div>
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
                <label htmlFor="numBeds">Camas:</label>
                <input
                  type="text"
                  className="form-control"
                  id="numBeds"
                  name="numBeds"
                  value={formData.numBeds}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="kindRoom">Tipo:</label>
                <input
                  type="text"
                  className="form-control"
                  id="kindRoom"
                  name="kindRoom"
                  value={formData.kindRoom}
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

export default CreateRoom;
