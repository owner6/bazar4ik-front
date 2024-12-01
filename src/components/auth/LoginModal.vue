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
import router from '../../router/index.js';
import RegisterForm from './RegisterForm.vue';
import { login } from '../../api/auth';

export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      email: '',
      password: '',
      isLoginForm: true
    };
  },
  components: {
    RegisterForm
  },
  methods: {
    close() {
      this.$emit('close');
    },

    async login() {
      try {
        const userData = await login(this.email, this.password);
        const { token, user } = userData;

        // Збереження токена у localStorage
        localStorage.setItem('authToken', token);

        // save data  user
        this.user = user;

        // Перехід на сторінку після входу
        await router.push({ path: '/my-account' });
        window.location.reload();
        this.close();
      } catch (error) {
        this.errorMessage =
          'Помилка входу. Перевірте дані та спробуйте ще раз.';
        console.error('Login error:', error);
      }
    },

    toggleForm() {
      this.isLoginForm = !this.isLoginForm;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
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
  background-color: map-get($colors, 'light-gray');
  padding: $spacing-unit * 2;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  position: relative;
  color: $color-text;
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
    background-color: map-get($colors, 'peach');
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      color: $color-text;
    }
  }
}
.toggle {
  margin-top: $spacing-unit;
  color: $color-text;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
