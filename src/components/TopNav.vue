<template>
  <div class="header">
    <nav class="navbar">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="branded-inscription">
            BAzaRChiK
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/">
                <img
                  src="../assets/icons/heart--reward-social-rating-media-heart-it-like-favorite-love.svg"
                  alt="Favorites" />
              </router-link>

              <router-link to="/create-listings" class="secondary-button">
                SELL NOW
              </router-link>

              <router-link v-if="isLoggedIn" to="/my-account">
                <img
                  src="../assets/icons/user-circle-single--circle-geometric-human-person-single-user.svg"
                  alt="My Account" />
              </router-link>

              <!-- Динамічні кнопки для авторизації або виходу -->
              <CustomButton
                v-if="!isLoggedIn"
                class="tertiary-button"
                :buttonText="loginButtonText"
                @click="showLoginModal = true" />
              <CustomButton
                v-else
                class="tertiary-button"
                :buttonText="logoutButtonText"
                @click="logout" />

              <router-link to="/" class="item-help-chat">
                <img
                  src="../assets/icons/chat-bubble-square-question--bubble-square-messages-notification-chat-message-question-help.svg"
                  alt="Help Chat" />
              </router-link>

              <!-- Модальне вікно входу -->
              <LoginModal
                :isVisible="showLoginModal"
                @close="handleModalClose"
                @loginSuccess="handleLoginSuccess" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '@/store/auth';
import LoginModal from '@/components/auth/LoginModal.vue';
import CustomButton from '@/components/ui/CustomButton.vue';

// Ініціалізація стану
const authStore = useAuthStore();
const showLoginModal = ref(false);

// Тексти кнопок
const loginButtonText = ref('SIGN UP | LOG IN');
const logoutButtonText = ref('LOGOUT');

// Вирахувані значення
const isLoggedIn = computed(() => authStore.isLoggedIn);

// Перевіряємо авторизацію при завантаженні
onMounted(() => {
  authStore.checkAuthStatus(); // Перевірка токену і оновлення статусу
});

// Функція виходу
const logout = () => {
  authStore.logout();
};

// Обробка закриття модального вікна
const handleModalClose = () => {
  showLoginModal.value = false;
};

// Обробка успішної авторизації
const handleLoginSuccess = () => {
  authStore.login();
  showLoginModal.value = false;
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
