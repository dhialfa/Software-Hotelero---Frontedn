import axios from "axios";

const URL = "http://localhost:8000";

console.log(URL);
const BookingApi = axios.create({
  baseURL: `${URL}/backend/api/booking/`,
});

export const getAllBooking = () => BookingApi.get("/");

export const getBooking = (id) => BookingApi.get(`/${id}`);

export const createBooking = (booking) => BookingApi.post("/", booking);

export const updateBooking = (id, booking) => BookingApi.put(`/${id}/`, booking);

export const deleteBooking = (id) => BookingApi.delete(`/${id}`);