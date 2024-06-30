<template>
  <div class="home-view">
    <section class="hero">
      <NavCategories class="nav-categories" />
      <div class="hero-content">
        <h1>Everything can be bought and sold here!</h1>
        <div class="search">
          <search-component @search="handleSearch"></search-component>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SearchComponent from "../components/UI/SearchPanel.vue";
import NavCategories from "../components/NavCategories.vue";

export default {
  name: "HomeView",
  components: {
    SearchComponent,
    NavCategories,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.home-view {
  .hero {
    position: relative;
    background-color: $extra-color-LightGreenPastel;
    color: $text-color;
    text-align: center;
    padding: 150px 235px 150px 45px;
    border-radius: 24px;
    height: 626px;

    h1 {
      font-size: $H1;
      font-weight: 400;
    }

    .hero-content {
      width: 410px;
      height: 310px;
      text-align: start;

      .search {
        margin-top: 16px;
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

    .nav-categories {
      position: absolute;
      top: 0;
      width: 100%;
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

      h1 {
        font-size: $H1;
        color: $text-color;
      }

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
