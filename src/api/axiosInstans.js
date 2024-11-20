import axios from "axios";

//Create instance with basic settings
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL, // URL бекенда
  headers: {
    "Content-Type": "application/json",
  },
});

// Перехоплювач для додавання токена до кожного запиту
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
