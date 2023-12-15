import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { getAllRoom, deleteRoom } from '../api/rooms.api';
import { Link, useNavigate } from 'react-router-dom';

const ShowRooms = () => {
  
  const navigate = useNavigate();
  const [room, setRoom] = useState([]);

    useEffect(() => {
      async function loadRoom() {
        const res = await getAllRoom();
        setRoom(res.data);
      }
      loadRoom();
    }, []);
    const handleDeleteRoom = async (roomId) => {
      const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta Habitacion?');
  
      if (confirmDelete) {
        try {
          // Llamada a la API para eliminar el cliente
          await deleteRoom(roomId);
  
          // Recargar la lista de clientes después de la eliminación
          const updatedRooms = room.filter((c) => c.id !== roomId);
          setRoom(updatedRooms);
        } catch (error) {
          console.error('Error al eliminar el :', error);
          // Manejar el error según tus necesidades (mostrar un mensaje de error, por ejemplo)
        }
      }
    };
    const handleEdit = (room) => {
      // Redirige a la página de edición con el ID de la habitación
      navigate(`/admin/updateroom`, { state: { room } });
    };
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <h2>Lista de Habitaciones</h2>
        <Link to="/admin/createroom">
          <button className="btn btn-primary mb-3">Crear Habitación</button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Habitación</th>
              <th>Nombre</th>
              <th>Camas</th>
              <th>Tipo</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {room.map((room) => (
              <tr key={room.id}>
                <td>{room.numRoom}</td>
                <td>{room.name}</td>
                <td>{room.numBeds}</td>
                <td>{room.kindRoom}</td>
                <td>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(room)}
                  >
                    Editar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteRoom(room.id)} 
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowRooms;