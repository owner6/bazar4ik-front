<template>
  <div class="header">
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
              <router-link to="/" class="item-help-chat"
                ><img
                  src="../assets/icons/chat-bubble-square-question--bubble-square-messages-notification-chat-message-question-help.svg"
                  alt="Help Chat"
              /></router-link>
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
  <nav class="bottom-navbar" v-show="showBottomNav">
    <div class="catalog">
      <router-link to="/categories">Categories</router-link>
    </div>
  </nav>
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
      showBottomNav: true,
      lastScrollY: 0,
      ticking: false,
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
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > this.lastScrollY) {
            // Scrolling down
            if (currentScrollY === 0) {
              this.showBottomNav = true;
            } else {
              this.showBottomNav = false;
            }
          } else {
            // Scrolling up
            if (currentScrollY === 0) {
              this.showBottomNav = true;
            } else {
              this.showBottomNav = false;
            }
          }

          this.lastScrollY = currentScrollY;
          this.ticking = false;
        });

        this.ticking = true;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.bottom-navbar {
  position: fixed;
  width: 100%;
  height: 69px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: left;
  align-items: center;
  z-index: 999;
}

.catalog {
  display: inline;
  margin-left: 75px;
}
</style>
