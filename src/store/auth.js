import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false // Стан авторизації
  }),
  actions: {
    login() {
      this.isLoggedIn = true; // Поміняти на true після авторизації
    },
    logout() {
      this.isLoggedIn = false; // Поміняти на false при виході
    }
  }
});
