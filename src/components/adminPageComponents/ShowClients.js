import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { getAllClient, deleteClient } from '../api/client.api';
import { Link, useNavigate } from 'react-router-dom';


const ShowClients = () => {
  
  const [client, setClient] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
      async function loadClient() {
        const res = await getAllClient();
        setClient(res.data);
      }
      loadClient();
    }, []);
    const handleDeleteClient = async (clientId) => {
      const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este cliente?');
  
      if (confirmDelete) {
        try {
          // Llamada a la API para eliminar el cliente
          await deleteClient(clientId);
  
          // Recargar la lista de clientes después de la eliminación
          const updatedClients = client.filter((c) => c.id !== clientId);
          setClient(updatedClients);
        } catch (error) {
          console.error('Error al eliminar el cliente:', error);
          // Manejar el error según tus necesidades (mostrar un mensaje de error, por ejemplo)
        }
      }
    };
    const handleEditClient = (client) => {
      // Redirige a la página de edición con el ID de la habitación
      navigate(`/admin/updateclient`, { state: { client } });
    };
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <h2>Lista de Clientes</h2>
        <Link to="/admin/createclient">
          <button className="btn btn-primary mb-3">Crear Cliente</button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cédula</th>
              <th>País</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {client.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.lastName}</td>
                <td>{client.idDoc}</td>
                <td>{client.country}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEditClient(client)}
                  >
                    Editar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteClient(client.id)}
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

export default ShowClients;