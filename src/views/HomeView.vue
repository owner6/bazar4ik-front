<template>
  <div class="home-view-container">
    <SemiTransparentStrip />
    <div class="home-view">
      <section class="section-left">
        <div class="section-content">
          <h1>Everything<br />can be bought and sold here!</h1>
          <div class="search">
            <search-component @search="handleSearch"></search-component>
          </div>
        </div>
      </section>
      <section class="section-right">
        <img src="@/assets/images/image-section-right.jpg" />
      </section>
    </div>
  </div>
</template>

<script>
import SemiTransparentStrip from "../components/SemiTransparentStrip.vue";
import SearchComponent from "../components/SearchPanel.vue";

export default {
  name: "HomeView",
  components: {
    SearchComponent,
    SemiTransparentStrip,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.home-view-container {
  position: relative;
}

.home-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 0px 27px 0;
  height: 310px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .section-left,
  .section-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 24px;
  }

  .section-left {
    background-color: $extra-color-LightGreenPastel;
    padding: 150px 0 166px 45px;
    text-align: left;

    .section-content {
      width: 100%;

      h1 {
        font-size: $H1;
        font-weight: 300;
        font-family: $PoppinsFonts;
      }

      .search {
        display: flex;
        align-items: center;
        margin-top: 16px;

        search-component {
          flex-grow: 1;
          justify-content: center;
          margin-left: 16px;
          padding: $spacing-unit;
          border: none;
          border-radius: 4px;
          background-color: $extra-color-Peach;
          font-size: 16px;

          &:hover {
            background-color: $button-primary-hover;
          }
        }
      }
    }
  }

  .section-right {
    img {
      border-radius: 24px;
      max-width: 100%;
      height: 100%;
    }
  }
}
</style>
