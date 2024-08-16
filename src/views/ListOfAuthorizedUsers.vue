<template>
  <div class="static-page">
    <h1>Dashboard</h1>
    <p>Welcome to the dashboard, only accessible by authenticated users!</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("authToken"); // delete token
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
