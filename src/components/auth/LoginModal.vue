<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <h2 v-if="isLoginForm">Login</h2>
      <h2 v-else>Register</h2>

      <form v-if="isLoginForm" @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <p class="toggle" @click="toggleForm">
          Don't have an account? Register
        </p>
      </form>

      <register-form v-else @close="close" @toggle="toggleForm" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router/index.js";

import RegisterForm from "./RegisterForm.vue";

export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      isLoginForm: true,
      API_URL: process.env.VUE_APP_API_URL || "http://localhost:3000",
    };
  },

  computed: {
    hasAuthToken() {
      return localStorage.getItem("authToken") !== null;
    },
  },

  components: {
    RegisterForm,
  },

  methods: {
    async login() {
      try {
        const response = await axios.post(
          `${this.API_URL}/auth/login`,
          {
            email: this.email,
            password: this.password,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const token = response.data.token;

        localStorage.setItem("authToken", token);

        this.user = response.data.user;

        this.isLoading = false;

        // Delay token deletion by 10 seconds
        setTimeout(() => {
          localStorage.removeItem("authToken");
        }, 10000);

        router.push({ path: "/mypage" });
        window.location.reload();
        this.showAuthForm = false;
      } catch (error) {
        console.error("Login error", error);
      }
    },

    close() {
      this.$emit("close");
    },

    toggleForm() {
      this.isLoginForm = !this.isLoginForm;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: $primary-color-LightGray;
  padding: $spacing-unit * 2;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  position: relative;
  color: $text-color;
}
.close {
  position: absolute;
  top: 0;
  right: $spacing-unit / 2;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: $spacing-unit;
  }

  button {
    padding: $spacing-unit;
    border: none;
    border-radius: 4px;
    background-color: $extra-color-Peach;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      color: $text-color;
    }
  }
}
.toggle {
  margin-top: $spacing-unit;
  color: $text-color;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
