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
              <button
                class="button-auth is-light"
                @click="showLoginModal = true"
              >
                SIGN UP | LOG IN
              </button>
              <router-link to="/profile" class="sell-now is-light"
                >SELL NOW</router-link
              >
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.listings-header {
  background-color: $primary-color-LightGray;
  padding: 0 4.688rem 0 4.688rem;

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
                background-color: darken($primary-color-LightGray, 10%);
              }
            }

            &.is-primary {
              background-color: $primary-color-LightGray;
              color: $text-color;

              &:hover {
                background-color: darken($primary-color-LightGray, 10%);
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
                background-color: darken($primary-color-LightGray, 10%);
              }
            }
          }
        }
      }
    }
  }
}
</style>
