<template>
  <div class="header">
    <nav class="navbar">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="branded-inscription"
            >BAzaRChiK</router-link
          >
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/">
                <img
                  src="../assets/icons/heart--reward-social-rating-media-heart-it-like-favorite-love.svg"
                />
              </router-link>

              <router-link to="/my-account">
                <img
                  src="../assets/icons/user-circle-single--circle-geometric-human-person-single-user.svg"
                  alt="My Account"
                />
              </router-link>

              <router-link to="/create-ads" class="button-secondary is-light">
                SELL NOW
              </router-link>

              <button
                class="button-tertiary is-light"
                @click="showLoginModal = true"
              >
                SIGN UP | LOG IN
              </button>

              <router-link to="/" class="item-help-chat">
                <img
                  src="../assets/icons/chat-bubble-square-question--bubble-square-messages-notification-chat-message-question-help.svg"
                  alt="Help Chat"
                />
              </router-link>
              <LoginModal
                :isVisible="showLoginModal"
                @close="showLoginModal = false"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LoginModal from "@/components/auth/LoginModal.vue";

export default {
  name: "HeaderComponent",
  components: {
    LoginModal,
  },
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
    };
  },
  mounted() {},
  beforeUnmount() {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
