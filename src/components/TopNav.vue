<template>
  <div class="listings-header">
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
              <router-link to="/" class=""
                ><img
                  src="../assets/icons/heart--reward-social-rating-media-heart-it-like-favorite-love.svg"
              /></router-link>
              <button
                class="button-auth is-light"
                @click="showLoginModal = true"
              >
                SIGN UP | LOG IN
              </button>
              <router-link to="/profile" class="sell-now is-light"
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
import LoginModal from "@/components/UI/auth/LoginModal.vue";
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
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.listings-header {
  background-color: $primary-color-LightGray;
  padding: 0 75px 0 75px;

  .navbar {
    background-color: $primary-color-LightGray;

    .navbar-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .navbar-start,
      .navbar-end {
        display: flex;
        align-items: center;

        .branded-inscription {
          color: $extra-color-Peach;
          font-size: 24px;
          text-decoration: none;
        }

        .navbar-item {
          color: $text-color;
          padding: $spacing-unit;

          &:hover {
            color: $primary-color-LightGray;
          }
        }

        .buttons {
          display: flex;
          align-items: center;
          gap: 24px;

          .sell-now {
            padding: $spacing-unit;
            border-radius: 7px;
            text-decoration: none;
            font-size: 12px;
            border: 1px solid black;
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-style: normal;

            &.is-light {
              color: $text-color;

              &:hover {
                background-color: $primary-color-LightGray;
              }
            }

            &.is-primary {
              background-color: $primary-color-LightGray;
              color: $text-color;

              &:hover {
                background-color: $primary-color-LightGray;
              }
            }
          }

          .button-auth {
            padding: $spacing-unit;
            border-radius: 7px;
            text-decoration: none;
            font-size: 12px;
            border: none;
            cursor: pointer;
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-style: normal;
            background-color: $primary-color-LightGray;

            &.is-light {
              color: $text-color;

              &:hover {
                background-color: $primary-color-LightGray;
              }
            }
          }
        }
        .router-link-active,
        .router-link-exact-active {
          display: inline-block;
          line-height: 0;
        }
      }
    }
  }
}
</style>
