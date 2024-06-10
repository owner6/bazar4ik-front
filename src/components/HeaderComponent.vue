<template>
  <div class="listings-header">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="@/assets/logo.png" alt="Logo" />
        </router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
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
              <router-link to="/login" class="button is-primary"
                >Login</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ListingsHeader",
  // Other component options...
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.listings-header {
  background-color: $light-color;
  box-shadow: 0 2px 4px $shadow-color;

  .navbar {
    max-width: 1200px;
    margin: 0 auto;
    padding: $navbar-padding;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar-brand {
      .navbar-item {
        img {
          max-height: $navbar-height;
        }
      }
    }

    .navbar-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .navbar-start {
        .navbar-item {
          margin-right: 20px;
        }
      }

      .navbar-end {
        .navbar-item {
          .buttons {
            .button {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
