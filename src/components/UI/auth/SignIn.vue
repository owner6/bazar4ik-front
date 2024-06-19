<template>
  <div class="modal" v-show="isVisible">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          {{ isLogin ? "Authorization" : "Registration" }}
        </h5>
        <button type="button" class="close" @click="$emit('close')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="handleSubmit">
          <div class="field">
            <label class="label">Username or Email</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="formData.username"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                v-model="formData.password"
                required
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="formData.rememberMe" /> Remember
                Me
              </label>
            </div>
          </div>
          <button type="submit" class="button is-primary">
            {{ isLogin ? "Login" : "Register" }}
          </button>
        </form>
        <div class="modal-footer">
          <button class="button" @click="toggleLogin">
            {{ isLogin ? "Register" : "Login" }}
          </button>
        </div>
      </div>
    </div>
    <SignUp v-if="!isLogin" @submit="toggleLogin" />
  </div>
  <div>
    <RegistrationModal v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import SignUp from "@/components/UI/auth/SignUp.vue";

export default {
  props: {
    isVisible: Boolean,
  },
  components: {
    SignUp,
  },
  data() {
    return {
      isLogin: true,
      formData: {
        username: "",
        password: "",
        rememberMe: false,
        showModal: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      // Implement logic to handle login or registration form submission
      // (e.g., call API, handle errors)
      console.log("Form submitted:", this.formData);
      this.$emit("close"); // Close the modal after submission (optional)
    },
    toggleLogin() {
      this.isLogin = !this.isLogin;
      this.formData.username = ""; // Clear username when switching modes
      this.formData.password = ""; // Clear password when switching modes
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
  background-color: $light-color;
  padding: $spacing-unit * 2;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.close {
  position: absolute;
  top: $spacing-unit / 2;
  right: $spacing-unit / 2;
  font-size: 1.5rem;
  font-weight: bold;
  color: $dark-color;
  cursor: pointer;

  &:hover {
    color: $primary-color;
  }
}

h2 {
  margin-top: 0;
  color: $primary-color;
}

form {
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: $spacing-unit;
  }

  label {
    margin-bottom: $spacing-unit / 2;
    font-weight: bold;
  }

  input {
    padding: $spacing-unit / 2;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    padding: $spacing-unit;
    border: none;
    border-radius: 4px;
    background-color: $primary-color;
    color: $light-color;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}
</style>
