<template>
  <div class="listings-header">
    <nav class="navbar">
      test
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/main.scss";

.listings-header {
  background-color: $primary-color-LightGray;
  padding: 0 75px 0 75px;
  border-bottom: 0.5px solid $primary-color-SoftGray;

  .navbar {
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