<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>

      <form v-if="isLoginForm" @submit.prevent="login">
        <h2 v-if="isLoginForm">Login</h2>
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
import { useAuthStore } from '@/store/auth'; // Імпортуємо наш store для авторизації
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

        // Зберігаємо дані користувача
        this.user = user;

        // Викликаємо метод для оновлення статусу авторизації в глобальному store
        const authStore = useAuthStore();
        authStore.login(); // Увімкнути авторизацію

        // Перехід на сторінку після входу
        await router.push({ path: '/my-account' });
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
</style>
