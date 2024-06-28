<template>
  <form @submit.prevent="register">
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" v-model="email" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
    </div>
    <div>
      <label for="confirmPassword">Confirm Password:</label>
      <input type="password" v-model="confirmPassword" required />
    </div>
    <button type="submit">Register</button>
    <p v-if="error" class="error">{{ error }}</p>
    <p class="toggle" @click="$emit('toggle')">
      Already have an account? Login
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: null,
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        this.error = "Passwords do not match.";
        return;
      }
      // Added logic for registration
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

form {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif; /* Apply Roboto font */

  div {
    margin-bottom: $spacing-unit;
  }

  label {
    margin-bottom: $spacing-unit / 2;
    font-weight: bold;
    font-family: "Roboto", sans-serif; /* Apply Roboto font */
  }

  input {
    padding: $spacing-unit / 2;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    font-family: "Roboto", sans-serif; /* Apply Roboto font */
  }

  button {
    padding: $spacing-unit;
    border: none;
    border-radius: 4px;
    background-color: $primary-color;
    color: $light-color;
    font-size: 1rem;
    cursor: pointer;
    font-family: "Open Sans", sans-serif; /* Apply Open Sans font */

    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}

.toggle {
  margin-top: $spacing-unit;
  color: $primary-color;
  cursor: pointer;
  font-family: "Roboto", sans-serif; /* Apply Roboto font */

  &:hover {
    text-decoration: underline;
  }
}

.error {
  color: red;
  margin-top: $spacing-unit;
  font-family: "Roboto", sans-serif; /* Apply Roboto font */
}
</style>
