export default {
  logout() {
    localStorage.removeItem("authToken");
  },
  checkAuthToken() {
    return localStorage.getItem("authToken") !== null;
  },
};
