import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const SearchRoom = () => {
  const [data, setData] = useState([]); // Estado para almacenar los datos
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  // Función para manejar la solicitud GET
  const fetchData = async () => {
    try {
      const response = await axios.get(`URL_DE_TU_API_AQUI`, {
        params: { search: searchTerm }
      });

      if (response.status === 200) {
        setData(response.data);
      } else {
        console.error('Error al obtener los datos');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  // Actualizar los datos cuando searchTerm cambie
  useEffect(() => {
    fetchData();
  }, [searchTerm]);

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={fetchData}>
              Buscar
            </button>
            <ul className="list-group mt-3">
              {data.map((item) => (
                <li key={item.id} className="list-group-item">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchRoom;