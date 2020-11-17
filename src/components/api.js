import axios from "axios";

const api = axios.create({
  baseURL: "https://green-api-fiap.herokuapp.com/",
});

export default api;