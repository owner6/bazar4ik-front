<template>
  <div class="home-view">
    <section class="section-left">
      <div class="section-content">
        <h1>Everything can be bought and sold here!</h1>
        <div class="search">
          <search-component @search="handleSearch"></search-component>
        </div>
      </div>
    </section>
    <section class="section-right">
      <img src="@/assets/images/image-section-right.jpg" />
    </section>
  </div>
</template>

<script>
import SearchComponent from "../components/SearchPanel.vue";

export default {
  name: "HomeView",
  components: {
    SearchComponent,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.home-view {
  display: flex;
  padding: 0 27px;
  gap: 16px;

  .section-right {
    flex: 1 1 45%;
    border-radius: 24px;
    padding-left: 5px;
  }

  .section-left {
    flex: 1 1 45%;
    background-color: $extra-color-LightGreenPastel;
    border-radius: 24px;
    padding: 150px 45px;
    text-align: left;

    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: auto;

    .section-content {
      width: 410px;
      height: auto;

      h1 {
        font-size: $H1;
        font-weight: 400;
      }

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
  }

  .section-right {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border-radius: 24px;
      max-width: auto;
      height: auto;
    }
  }
}
</style>
