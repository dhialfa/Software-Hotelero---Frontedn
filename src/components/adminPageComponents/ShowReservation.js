import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Table } from 'react-bootstrap';
import { getAllBooking, deleteBooking } from '../api/booking.api';
import { getAllClient } from '../api/client.api';
import { getAllRoom } from '../api/rooms.api';
import Navbar from './Navbar';
import { format } from 'date-fns';
import '../../css/ShowReservations.css';
import { useNavigate } from 'react-router-dom';
import { isSameDay } from 'date-fns';


const ShowReservation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [clients, setClients] = useState([]);
  const [rooms, setRooms] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function loadReservations() {
      const res = await getAllBooking();
      setReservations(res.data);
    }
    loadReservations();
  }, []);
  
  useEffect(() => {
    async function loadClients() {
      const res = await getAllClient();
      setClients(res.data);
    }
    loadClients();
  }, []);

  useEffect(() => {
    async function loadRooms() {
      const res = await getAllRoom();
      setRooms(res.data);
    }
    loadRooms();
  }, []);

  const formattedSelectedDate = format(selectedDate, 'MMMM d, yyyy');

  const filteredReservations = reservations.filter(
    (reservation) =>
      format(new Date(reservation.checkIn), 'MMMM d, yyyy') === formattedSelectedDate ||
      format(new Date(reservation.checkOut), 'MMMM d, yyyy') === formattedSelectedDate
  );
	const isDateBetween = (date, checkIn, checkOut) => {
    return date >= new Date(checkIn) && date <= new Date(checkOut);
  };
  const handleDelete = async (reservationId) => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta reserva?');

    if (confirmDelete) {
      try {
        // Llamada a la API para eliminar el cliente
        await deleteBooking(reservationId);

        // Recargar la lista de clientes después de la eliminación
        const updatedReservations = reservations.filter((c) => c.id !== reservationId);
        setReservations(updatedReservations);
      } catch (error) {
        console.error('Error al eliminar el :', error);
        // Manejar el error según tus necesidades (mostrar un mensaje de error, por ejemplo)
      }
    }
  };
  const handleEdit = (reservation) => {
    // Redirige a la página de edición con el ID de la habitación
    navigate(`/admin/updateBooking`, { state: { reservation } });
  };
  return (
    <div>
      <Navbar />
      <div className='title-calendar'>
        <div>
          <h2>Calendario de reservas</h2>
        </div>
        <div className="calendar-container">  
        <Calendar
          className="custom-calendar"
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={({ date }) => {
            const isDateHighlighted = reservations.some((reservation) =>
              isDateBetween(date, reservation.checkIn, reservation.checkOut)
            );

            // Verificar también si la fecha es igual al checkIn de alguna reserva
            const isCheckInDate = reservations.some((reservation) =>
              isSameDay(date, new Date(reservation.checkIn))
            );

            return isDateHighlighted || isCheckInDate ? (
              <div className="highlighted-date"></div>
            ) : null;
          }}
        />
        </div>
      </div>
        <h2>Reservas para {formattedSelectedDate}</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha de Check-in</th>
              <th>Fecha de Check-out</th>
              <th>Cliente</th>
              <th>Habitación</th>
              <th>Desayuno</th>
              <th>Pago</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.map((reservation, index) => {
              // Buscar el cliente correspondiente
              const client = clients.find((c) => c.id === reservation.client);
              // Buscar la habitación correspondiente
              const room = rooms.find((r) => r.id === reservation.room);

              return (
                <tr key={index}>
                  <td>{reservation.id}</td>
                  <td>{format(new Date(reservation.checkIn), 'MMMM d, yyyy')}</td>
                  <td>{format(new Date(reservation.checkOut), 'MMMM d, yyyy')}</td>
                  <td>{client ? client.name + " " + client.lastName : 'Cliente no encontrado'}</td>
                  <td>{room ? room.numRoom : 'Habitación no encontrada'}</td>
                  <td>{reservation.payment ? 'Sí' : 'No'}</td>
                  <td>{reservation.breakfast ? 'Sí' : 'No'}</td>
                  <td>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEdit(reservation)}
                  >
                    Editar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(reservation.id)} 
                  >
                    Eliminar
                  </button>
                </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
    </div>
  );
};

export default ShowReservation;
