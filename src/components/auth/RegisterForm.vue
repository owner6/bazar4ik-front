<template>
  <form @submit.prevent="register">
    <div>
      <label for="email">Email:</label>
      <input type="email" v-model="email" placeholder="Your email" required />
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input
        id="phone"
        placeholder="Your phone"
        type="text"
        v-model="phone"
        required
      />
    </div>
    <div>
      <label for="lastname">Lastname:</label>
      <input
        id="lastname"
        placeholder="Your lastname"
        type="text"
        v-model="lastname"
        required
      />
    </div>
    <div>
      <label for="firstname">Firstname:</label>
      <input
        id="firstname"
        placeholder="Your firstname"
        type="text"
        v-model="firstname"
        required
      />
    </div>
    <div>
      <label for="password">Password:</label>
      <input
        type="password"
        v-model="password"
        placeholder="Your password"
        required
      />
    </div>
    <div>
      <label for="confirmPassword">ConfirmPassword:</label>
      <input
        id="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        v-model="confirmPassword"
        required
      />
    </div>
    <button type="submit">Register</button>
    <p v-if="error" class="error">{{ error }}</p>
    <p class="toggle" @click="$emit('toggle')">
      Already have an account? Login
    </p>
  </form>
</template>

<script>
import api from "@/API/auth/api";

export default {
  data() {
    return {
      email: "",
      phone: "",
      lastname: "",
      firstname: "",
      password: "",
      confirmPassword: "",
      error: null,
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.error = "Passwords do not match.";
        return;
      }

      console.log("Attempting to register with:", {
        email: this.email,
        phone: this.phone,
        lastname: this.lastname,
        firstname: this.firstname,
        password: this.password,
      });

      try {
        const response = await api.post("/auth/registration", {
          email: this.email,
          phone: this.phone,
          lastname: this.lastname,
          firstname: this.firstname,
          password: this.password,
        });

        console.log("Registration successful:", response.data);
        this.$emit("close");
      } catch (error) {
        console.error("Registration error:", error);
        if (error.response) {
          if (error.response.status === 400) {
            this.error = error.response.data.message || "Invalid input.";
          } else if (error.response.status === 409) {
            this.error = "A user with this email already exists.";
          } else {
            this.error = error.response.data.message || "Registration failed.";
          }
        } else if (error.request) {
          this.error = "No response from the server.";
        } else {
          this.error = "An error occurred during registration.";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

form {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;

  div {
    margin-bottom: $spacing-unit;
  }

  button {
    padding: $spacing-unit;
    border: none;
    border-radius: 4px;
    background-color: $extra-color-Peach;
    color: $text-color;
    font-size: 1rem;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;

    &:hover {
      color: $text-color;
    }
  }
}

.toggle {
  margin-top: $spacing-unit;
  color: $text-color;
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
