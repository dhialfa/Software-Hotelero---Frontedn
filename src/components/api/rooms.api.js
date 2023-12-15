import axios from "axios";

const URL = "http://localhost:8000";

console.log(URL);
const RoomApi = axios.create({
  baseURL: `${URL}/backend/api/room/`,
});

export const getAllRoom = () => RoomApi.get("/");

export const getRoom = (id) => RoomApi.get(`/${id}`);

export const createRoom = (room) => RoomApi.post("/", room);

export const updateRoom = (id, room) => RoomApi.put(`/${id}/`, room);

export const deleteRoom = (id) => RoomApi.delete(`/${id}`);