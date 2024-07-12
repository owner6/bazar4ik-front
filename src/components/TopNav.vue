<template>
  <div
    class="header"
    @mouseenter="showMenu = true"
    @mouseleave="showMenu = false"
  >
    <nav class="navbar">
      <div class="navbar-menu" v-show="showMenu || scrollTop === 0">
        <div class="navbar-start">
          <router-link to="/" class="branded-inscription"
            >BAzaRChiK</router-link
          >
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/" class=""
                ><img
                  src="../assets/icons/heart--reward-social-rating-media-heart-it-like-favorite-love.svg"
              /></router-link>
              <button
                class="button-tertiary is-light"
                @click="showLoginModal = true"
              >
                SIGN UP | LOG IN
              </button>
              <router-link to="/profile" class="button-secondary is-light"
                >SELL NOW</router-link
              >
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
      showMenu: false,
      scrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.pageYOffset
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
