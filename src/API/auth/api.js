import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || "http://127.0.0.1:3000",
});

export default api;
