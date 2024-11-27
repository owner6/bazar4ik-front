<template>
  <div class="container">
    <div class="home-view-container">
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

.home-view-container {
  position: relative;
}

.home-view {
  display: flex;
  gap: 16px;
  padding: 0 27px;
  flex-wrap: wrap;

  .section-left,
  .section-right {
    border-radius: 24px;
  }

  .section-left {
    background-color: map-get($colors, "light-green");
    width: 100%;
    max-width: 685px;
    text-align: left;
    flex: 1;
    padding: 40px;
    box-sizing: border-box;
    margin-bottom: 7px;

    .section-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;

      .search {
        display: flex;
        align-items: center;

        search-component {
          flex-grow: 1;
          justify-content: center;
          padding: map-get($spacings, "md");
          border: none;
          border-radius: 4px;
          background-color: map-get($colors, "peach");
          font-size: 16px;
        }
      }
    }
  }

  .section-right {
    flex: 1;
    min-width: 300px;

    img {
      width: 100%;
      height: auto;
      border-radius: 24px;
    }
  }
}

@media (max-width: 1024px) {
  .home-view {
    padding: 0 16px;

    .section-left {
      padding: 20px;
    }
  }
}

@media (max-width: 768px) {
  .home-view {
    flex-direction: column;

    .section-left {
      padding: 20px;
    }

    .section-right {
      margin-top: 16px;
    }
  }
}

@media (max-width: 480px) {
  .home-view {
    .section-left {
      padding: 20px 10px;

      .section-content {
        h1 {
          font-size: 24px;
        }

        .search {
          flex-direction: column;

          search-component {
            margin-top: 16px;
          }
        }
      }
    }
  }
}
</style>
