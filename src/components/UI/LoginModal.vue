<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    login() {
      // added logic autorization
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      this.close();
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
