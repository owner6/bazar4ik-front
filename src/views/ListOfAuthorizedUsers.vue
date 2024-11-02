<template>
  <div class="static-page">
    <h1>Dashboard</h1>
    <p>Welcome to the dashboard, only accessible by authenticated users!</p>
    <button @click="fetchUsers">Show Users</button>

    <table v-if="users.length" class="user-table">
      <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.email }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.phone }}</td>
        </tr>
      </tbody>
    </table>

    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      error: null,
    };
  },

  methods: {
    async fetchUsers() {
      try {
        const token = localStorage.getItem("authToken"); // Assuming the JWT token is stored in localStorage
        const response = await axios.get("http://localhost:3000/auth/users", {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to Authorization header
          },
        });
        this.users = response.data;
      } catch (error) {
        this.error = error.response?.data?.message || "Failed to fetch users";
      }
    },
  },
};
</script>

<style scoped>
.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.user-table th,
.user-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.user-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.error-message {
  color: red;
  margin-top: 20px;
}
</style>
