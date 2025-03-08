<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>

      <form v-if="isLoginForm" @submit.prevent="handleLogin">
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
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth';
import router from '../../router/index.js';
import RegisterForm from './RegisterForm.vue';
import { login } from '@/shared/api/auth';

export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  components: {
    RegisterForm
  },
  setup(props, { emit }) {
    const email = ref('');
    const password = ref('');
    const isLoginForm = ref(true);
    const errorMessage = ref('');

    const close = () => {
      emit('close');
    };

    const toggleForm = () => {
      isLoginForm.value = !isLoginForm.value;
    };

    const handleLogin = async () => {
      try {
        const userData = await login(email.value, password.value); // використання імпортованої функції login
        const { token } = userData; // використовуємо лише token, оскільки user не потрібен

        // Save token in localStorage
        localStorage.setItem('authToken', token);

        // Update authorization status in the store
        const authStore = useAuthStore();
        authStore.login();

        // Redirect to the account page after successful login
        await router.push({ path: '/my-account' });
        close();
      } catch (error) {
        errorMessage.value =
          'Помилка входу. Перевірте дані та спробуйте ще раз.';
        console.error('Login error:', error);
      }
    };

    return {
      email,
      password,
      isLoginForm,
      errorMessage,
      close,
      toggleForm,
      handleLogin
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';
</style>
