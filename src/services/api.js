import axios from "axios";

const api = axios.create({
  baseURL: "https://gaveta-backend.herokuapp.com"
});

export default api;
