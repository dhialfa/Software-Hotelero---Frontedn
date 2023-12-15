import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../css/CreateClient.css';
import Navbar from '../../components/adminPageComponents/Navbar';
import { updateRoom } from '../api/rooms.api';

function EditRoom() {
  const location = useLocation();
  const room = location.state ? location.state.room : null;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    numRoom: '',
    name: '',
    numBeds: '',
    kindRoom: '',
  });

  useEffect(() => {
    // Utiliza el objeto de la habitación recibido para establecer el formulario
    if (room) {
      setFormData(room);
    }
  }, [room]);

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
      await updateRoom(room.id, formData);
      alert('Actualizado correctamente');
      navigate('/admin/rooms');
    } catch (error) {
      console.error('Error al actualizar la habitación:', error);
      alert('Error al actualizar la habitación');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='background'>
        <div className='formulario'>
          <div className="formulario-container">
            <h2>Editar Habitación</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="numRoom">Habitación:</label>
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
              <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditRoom;

