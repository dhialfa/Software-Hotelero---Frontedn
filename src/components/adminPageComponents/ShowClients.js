import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { getAllClient } from '../api/client.api';

const ShowClients = () => {
  const [client, setClient] = useState([]);

    useEffect(() => {
      async function loadClient() {
        const res = await getAllClient();
        setClient(res.data);
      }
      loadClient();
    }, []);

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                
                
              />
            </div>
            <button className="btn btn-primary">
              Buscar
            </button>
            <ul className="list-group mt-3">
              {client.map((client) => (
                <li key={client.id} className="list-group-item">
                  <div>
                    <strong>Nombre: {client.name}</strong>
                  </div>
                  <div>Apellido: {client.lastName}</div>
                  <div>Cédula: {client.idDoc}</div>
                  <div>País: {client.country}</div>
                  <div>Correo: {client.email}</div>
                  <div>Teléfono: {client.phone}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowClients;