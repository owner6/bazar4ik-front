<template>
  <div class="listings-header">
    <nav class="navbar">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
              <img src="@/assets/logo.png" alt="Logo" />
            </router-link>
          </div>
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/listings" class="navbar-item">Listings</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/profile" class="button is-light"
                >Profile</router-link
              >
              <button class="button is-light" @click="showLoginModal = true">
                Login
              </button>
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
  background-color: $light-color;
  padding: 0;

  .navbar {
    background-color: $dark-color;
    color: $light-color;
    font-family: $font-family;

    .navbar-brand {
      .navbar-item {
        padding: $spacing-unit;

        img {
          max-height: 40px;
        }
      }
    }

    .navbar-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .navbar-start,
      .navbar-end {
        display: flex;
        align-items: center;

        .navbar-item {
          color: $light-color;
          padding: $spacing-unit;

          &:hover {
            background-color: lighten($dark-color, 0%);
            color: $primary-color;
          }
        }

        .buttons {
          display: flex;
          align-items: center;

          .button {
            margin-left: $spacing-unit / 2;
            padding: $spacing-unit;
            border: none;
            border-radius: 4px;
            font-family: $font-family;
            text-decoration: none;
            font-size: 16px;

            &.is-light {
              background-color: $light-color;
              color: $dark-color;

              &:hover {
                background-color: darken($light-color, 10%);
              }
            }

            &.is-primary {
              background-color: $primary-color;
              color: $light-color;

              &:hover {
                background-color: darken($primary-color, 10%);
              }
            }
          }
        }
      }
    }
  }
}
</style>
