import axios from "axios";

const API_URL = process.env.VUE_APP_API_URL || "http://localhost:3000";

const auth = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || "http://127.0.0.1:3000",
});

// function for registration user
export const registerUser = async (userData) => {
  try {
    const response = await auth.post("/auth/registration", userData);
    return response.data; // return data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Registration failed.");
    } else if (error.request) {
      throw new Error("No response from the server.");
    } else {
      throw new Error("An error occurred during registration.");
    }
  }
};

// logic for authorization user
export async function login(email, password) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data; // Повертаємо дані про користувача та токен
  } catch (error) {
    console.error("Login API error:", error);
    throw error; // Пробрасываем ошибку, чтобы обработать её в компоненте
  }
}

export default auth;
