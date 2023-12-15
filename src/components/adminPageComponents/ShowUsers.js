import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { getAllUser, deleteUser } from '../api/user.api';
import { Link, useNavigate } from 'react-router-dom';

const ShowUsers = () => {
  
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

    useEffect(() => {
      async function loadUser() {
        const res = await getAllUser();
        setUser(res.data);
      }
      loadUser();
    }, []);
    const handleDelete = async (userId) => {
      const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este Usuario?');
  
      if (confirmDelete) {
        try {
          // Llamada a la API para eliminar el cliente
          await deleteUser(userId);
  
          // Recargar la lista de clientes después de la eliminación
          const updatedUsers = user.filter((c) => c.id !== userId);
          setUser(updatedUsers);
        } catch (error) {
          console.error('Error al eliminar el :', error);
          // Manejar el error según tus necesidades (mostrar un mensaje de error, por ejemplo)
        }
      }
    };
    const handleEdit = (user) => {
      // Redirige a la página de edición con el ID de la habitación
      navigate(`/admin/updateuser`, { state: { user } });
    };
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <h2>Lista de Usuarios</h2>
        <Link to="/admin/createuser">
          <button className="btn btn-primary mb-3">Crear Usuarios</button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Usuarios</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id}>
                <td>{user.userName}</td>
                <td>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(user)}
                  >
                    Editar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)} 
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

export default ShowUsers;