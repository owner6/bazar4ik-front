<template>
  <div class="home-view">
    <bottom-nav-component />
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Our Marketplace</h1>
        <p>Your one-stop shop for everything you need.</p>
        <router-link to="/listings" class="button is-primary"
          >Start Shopping</router-link
        >
      </div>
    </section>
    <section class="features">
      <div class="feature">
        <h2>Wide Selection</h2>
        <p>Find products from thousands of vendors all in one place.</p>
      </div>
      <div class="feature">
        <h2>Best Prices</h2>
        <p>Compare prices and get the best deals on the market.</p>
      </div>
      <search-component @search="handleSearch"></search-component>
    </section>
  </div>
</template>

<script>
import SearchComponent from "../components/UI/SearchComponent.vue";
import BottomNavComponent from "../components/BottomNavComponent.vue";

export default {
  name: "HomeView",
  components: {
    SearchComponent,
    BottomNavComponent,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.home-view {
  .hero {
    background-color: $extra-color-LightGreenPastel;
    color: $text-color;
    text-align: center;
    padding: $spacing-unit * 4;

    .hero-content {
      max-width: 800px;
      margin: 0 auto;

      h1 {
        font-size: 36px;
        margin-bottom: $spacing-unit;
      }

      p {
        font-size: 18px;
        margin-bottom: $spacing-unit * 2;
      }

      .button {
        padding: $spacing-unit;
        border: none;
        border-radius: 4px;
        background-color: $extra-color-Peach;
        color: $extra-color-Peach;
        font-size: 16px;
        color: $text-color;

        &:hover {
          background-color: $button-primary-hover;
        }
      }
    }
  }

  .features {
    display: flex;
    justify-content: space-around;
    padding: $spacing-unit * 4;
    background-color: $extra-color-LightGreenPastel;

    .feature {
      text-align: center;
      max-width: 250px;

      h2 {
        font-size: 24px;
        margin-bottom: $spacing-unit;
        color: $text-color;
      }

      p {
        font-size: 16px;
        color: $text-color;
      }
    }
  }
}
</style>
