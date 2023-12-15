import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Navbar from './Navbar';
import { getAllClient } from '../api/client.api';
import { getAllRoom } from '../api/rooms.api';
import { createBooking } from '../api/booking.api';
import '../../css/Booking.css';
const Booking = () => {
  const [formData, setFormData] = useState({
    client: '',
    room: '',
    payment: false,
    breakfast: false,
    checkIn: '',
    checkOut: '',
  });
  const [clients, setClients] = useState([]);
  const [rooms, setRooms] = useState([]);


  useEffect(() => {
    // Obtener la lista de clientes desde la API
    async function loadClient() {
      const res = await getAllClient();
      setClients(res.data);
    }
    loadClient();
    // Obtener la lista de habitaciones desde la API
    async function loadRoom() {
      const res = await getAllRoom();
      setRooms(res.data);
    }
    loadRoom();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBooking(formData);
      alert('Creado correctamente')
    } catch (error) {
      // Puedes manejar los errores aquí
      alert('Error al crear la reserva:', error);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className='formulario'>
        <Form onSubmit={handleSubmit}>
          <h2>Reservar</h2>
          <Form.Group controlId="formClient">
            <Form.Label>Cliente</Form.Label>
            <Form.Control
              as="select"
              name="client"
              value={formData.client}
              onChange={handleChange}
            >
              <option value="">Seleccione un cliente</option>
              {clients.map(client => (
                <option key={client.id} value={client.id}>
                  {client.name + " " + client.lastName + " " + client.idDoc}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formRoom">
            <Form.Label>Habitación</Form.Label>
            <Form.Control
              as="select"
              name="room"
              value={formData.room}
              onChange={handleChange}
            >
              <option value="">Seleccione una habitación</option>
              {rooms.map(room => (
                <option key={room.id} value={room.id}>
                  {room.numRoom + " " + room.name}
                </option>
              ))}
          </Form.Control>
        </Form.Group>

          <Form.Group controlId="formPayment">
            <Form.Check
              type="checkbox"
              label="Pago realizado"
              name="payment"
              checked={formData.payment}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBreakfast">
            <Form.Check
              type="checkbox"
              label="Desayuno incluido"
              name="breakfast"
              checked={formData.breakfast}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formCheckIn">
            <Form.Label>Fecha de Check-in</Form.Label>
            <Form.Control
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formCheckOut">
            <Form.Label>Fecha de Check-out</Form.Label>
            <Form.Control
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Crear Reserva
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Booking;
