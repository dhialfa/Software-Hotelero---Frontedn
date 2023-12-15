import axios from "axios";

const URL = "http://localhost:8000";

console.log(URL);
const UserApi = axios.create({
  baseURL: `${URL}/backend/api/user/`,
});

export const getAllUser = () => UserApi.get("/");

export const getUser= (id) => UserApi.get(`/${id}`);

export const createUser = (user) => UserApi.post("/", user);

export const updateUser = (id, user) => UserApi.put(`/${id}/`, user);

export const deleteUser= (id) => UserApi.delete(`/${id}`);