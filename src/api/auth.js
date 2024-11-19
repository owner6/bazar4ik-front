import axios from "axios";

const auth = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || "http://127.0.0.1:3000",
});

// function for registration user
export const registerUser = async (userData) => {
  try {
    const response = await auth.post("/auth/registration", userData);
    return response.data; // Повертаємо дані успішної відповіді
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
export const login = async ({ email, password }) => {
  try {
    let API_URL;
    const response = await axios.post(
      `${API_URL}/auth/login`,
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const token = response.data.token;

    // save token
    localStorage.setItem("authToken", token);

    return {
      user: response.data.user,
      token,
    };
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export default auth;
